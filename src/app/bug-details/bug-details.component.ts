import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssuesService } from '../issues.service';
import { Issue, Comment } from '../issue';
import { MatDialog } from '@angular/material/dialog';
import { CommentDetailsDialogComponent } from '../comment-details-dialog/comment-details-dialog.component';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.css']
})
export class BugDetailsComponent implements OnInit {
  bug: Issue | undefined;
  comment: Comment = {
    name: '',
    assignee: '',
    assignedby: '',
    date: '',
    time: '',
    status: '',
    details: ''
  };
  modalOpen = false;

  constructor(
    private route: ActivatedRoute, 
    private issueService: IssuesService, 
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bug = this.issueService.getBugById(id);
  }

  openAddCommentModal(): void {
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
  }

  addComment(): void {
    if (this.isValidComment()) {
      this.comment.date = new Date().toISOString().slice(0, 10);
      this.comment.time = new Date().toLocaleTimeString();
      const newComment: Comment = { ...this.comment };
      if (this.bug) {
        this.issueService.addComment(this.bug.issueNo, newComment); // Save comment
        // this.bug.comments = this.bug.comments || [];
        this.bug.comments.push(newComment);
        this.closeModal();
        this.resetComment();
      }
    }
  }

  isValidComment(): boolean {
    return !!(
      this.comment.name &&
      this.comment.assignee &&
      this.comment.assignedby &&
      this.comment.status &&
      this.comment.details
    );
  }

  resetComment(): void {
    this.comment = {
      name: '',
      assignee: '',
      assignedby: '',
      date: '',
      time: '',
      status: '',
      details: ''
    };
  }

  openCommentDetailsDialog(comment: Comment): void {
    const dialogRef = this.dialog.open(CommentDetailsDialogComponent, {
      width: '600px',
      panelClass: 'dialog-content',
      data: comment
    });
  }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Comment } from '../issue'; // Update with your interface/class path

@Component({
  selector: 'app-comment-details-dialog',
  templateUrl: './comment-details-dialog.component.html',
  styleUrl:'./comment-details-dialog.component.css',
})
export class CommentDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CommentDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Comment
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
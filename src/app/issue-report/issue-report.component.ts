import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {

  @Output() formClose = new EventEmitter();
  issueForm!: FormGroup;
  suggestions: Issue[] = [];


  constructor(private builder: FormBuilder, private issueService: IssuesService) { }

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      projectid: ['', Validators.required],
      title: ['', Validators.required],
      description: ['',Validators.required],
      priority: ['', Validators.required],
      type: ['', Validators.required],
      file: [''],
      comments:[[]],
    });

    this.issueForm.controls['title'].valueChanges.subscribe((title: string) => {
      this.suggestions = this.issueService.getSuggestions(title);
    });
  }

  addIssue() {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }

    this.issueService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }




}

import { Injectable } from '@angular/core';
import { Issue } from './issue';


@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private issues: Issue[] = [];

  constructor() { 
    this.loadIssues();
  }

  private loadIssues() {
    const issues = localStorage.getItem('issues');
    if (issues) {
      this.issues = JSON.parse(issues);
    }
  }

  private saveIssues() {
    localStorage.setItem('issues', JSON.stringify(this.issues));
  }

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    issue.comments = []; // Initialize comments array
    this.issues.push(issue);
    this.saveIssues();
  }

  completeIssue(issue: Issue) {
    const index = this.issues.findIndex(i => i.issueNo === issue.issueNo);
    if (index !== -1) {
      this.issues[index] = { ...issue, completed: new Date() };
      this.saveIssues();
    }
  }

  getBugById(id: number): Issue | undefined {
    return this.issues.find(bug => bug.issueNo === id);
  }
  getSuggestions(title: string): Issue[] {
    if (title.length > 3) {
      return this.issues.filter(issue => issue.title.indexOf(title) !== -1);
    }
    return [];
  }

  addComment(issueNo: number, comment: any) {
    const issue = this.getBugById(issueNo);
    if (issue) {
      if (!issue.comments) {
        issue.comments = [];
      }
      // issue.comments.push(comment);
      // this.saveIssues();
    }
  }
}




  
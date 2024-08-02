import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  showReportIssue = false;
  selectedIssue: Issue | null = null;

  constructor(
    private router: Router,
    private issueService: IssuesService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    // Check authentication on component initialization
    if (!this.authService.isLoggedIn()) {
      // Handle unauthorized access
      console.log('Not logged in. Redirecting...');
      this.authService.logout(); // Ensure user is logged out
      // Redirect to login page or handle unauthorized access 
      this.router.navigate(['']);
    } else {
      // Initialize or fetch issues data
      this.getIssues();
      this.router.navigate(['/issues']);
    }
  }

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues(); // Refresh the list of issues after closing the report
  }

  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issueService.completeIssue(this.selectedIssue);
      this.getIssues(); // Refresh the list of issues after marking as complete
    }
    this.selectedIssue = null;
  }

  viewBugDetails(id: number) {
    this.router.navigate(['/issues', id]);
  }

  logout() {
    this.authService.confirmlogout();
    // this.router.navigate(['']); // Redirect to login page after logout
  }
}

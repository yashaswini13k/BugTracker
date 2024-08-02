import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IssueListComponent } from './issue-list/issue-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssueReportComponent } from './issue-report/issue-report.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routes';
import { AuthService } from './login/auth.service';
import { BugDetailsComponent } from './bug-details/bug-details.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommentDetailsDialogComponent } from './comment-details-dialog/comment-details-dialog.component';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IssuesService } from './issues.service';
import { Issue } from './issue';


@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueReportComponent,
    HeaderComponent,
    LoginComponent,
    BugDetailsComponent,
    ConfirmDialogComponent,
    CommentDetailsDialogComponent,
    

  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    RouterModule,
    HttpClientModule,
    
  ],
  providers: [AuthService, 
    IssuesService,
    //  { provide: Issue, useClass: Issue }
  ],
  bootstrap: [AppComponent],
  exports: [
    IssueReportComponent
  ]
})
export class AppModule { }

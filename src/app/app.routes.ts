import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { ErrorComponent } from './error/error.component';
import { BugDetailsComponent } from './bug-details/bug-details.component';

 export const routes: Routes = [ 
    {path:'',component  :   LoginComponent},
    {path: 'issues',component: IssueListComponent},
    {path:'issues/:id',component: BugDetailsComponent},
    {path:'**',component: ErrorComponent}
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ProjectComponent } from './dashboard/project/project.component';
import { ProjectDetailComponent } from './dashboard/project/project-detail/project-detail.component';
import { DashboardTabsComponent } from './dashboard/dashboard-tabs/dashboard-tabs.component';
import { CreateProjectComponent } from './dashboard/create-project/create-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SearchPipe} from '../assets/Pipe';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent },
  {path:'create-project', component: CreateProjectComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectComponent,
    ProjectDetailComponent,
    DashboardTabsComponent,
    CreateProjectComponent,
    DashboardComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

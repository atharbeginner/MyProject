import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { DonateComponent } from './donate/donate.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path:'',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:[
      {path: 'projects',component: ProjectListComponent},
      {path: 'projects/:id',component: ProjectDetailsComponent},
      {path: 'donate',component: DonateComponent},
      {path: 'about-us',component: AboutUsComponent}
    ]
  },
  {path: '**',component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

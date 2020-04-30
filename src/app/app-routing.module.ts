import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'admin/view/:id', component: ViewRegistrationComponent},
  {path: 'admin', component: AdminComponent},
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
	declarations: [AdminComponent, HomeComponent, ViewRegistrationComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), ReactiveFormsModule],
	exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { CallbackComponent } from './components/callback/callback.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AuthGuard} from "./services/auth.guard";

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: "full"},
    {path: 'admin/view/:id', component: ViewRegistrationComponent, canActivate: [AuthGuard]},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    {path: "**", redirectTo: "", pathMatch: "full"},
    {path: 'callback', component: CallbackComponent}
];

@NgModule({
    declarations: [AdminComponent, HomeComponent, ViewRegistrationComponent, CallbackComponent],
    imports: [CommonModule, RouterModule.forRoot(routes), ReactiveFormsModule],
    exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { SignedInGuardService } from './services/signed-in-guard.service';
import { LoginComponent } from './login/login.component';
import { ZooCatalogComponent } from './zoo-catalog/zoo-catalog.component';

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [SignedInGuardService] },
  { path: "catalog", component: ZooCatalogComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent, canActivate: [SignedInGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

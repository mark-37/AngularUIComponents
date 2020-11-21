import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { MaterialsModule } from '../materials/materials.module';
import { RegisterComponent } from '../components/register/register.component';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    MaterialsModule,
    RouterModule
  ],
  providers: []
})
export class AuthenticationModule { }

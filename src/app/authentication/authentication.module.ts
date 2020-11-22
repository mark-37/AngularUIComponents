import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { MaterialsModule } from '../materials/materials.module';
import { RegisterComponent } from '../components/register/register.component';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    MaterialsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AuthenticationModule { }

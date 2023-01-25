import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { InfoComponent } from './components/info/info.component';
import { ShowInfoDirective } from './directives/show-info.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StartPanelComponent } from './components/start-panel/start-panel.component';
import { LoggedComponent } from './components/logged/logged.component';
import { ResetPasswordInfoComponent } from './components/reset-password-info/reset-password-info.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';

export const appRouters: Routes = [
  {path: "", component: StartPanelComponent},
  {path: "reset-password", component: ResetPasswordComponent},
  {path: "reset-password-info", component: ResetPasswordInfoComponent},
  {path: "logged", component: LoggedComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    InfoComponent,
    ShowInfoDirective,
    StartPanelComponent,
    LoggedComponent,
    ResetPasswordInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouters),
    PasswordStrengthMeterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

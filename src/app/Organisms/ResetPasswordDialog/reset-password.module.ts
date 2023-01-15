import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { BrowserModule } from '@angular/platform-browser';
import { NbDialogModule, NbCardModule, NbStepperModule } from '@nebular/theme';

import { LogoButtonModule } from "Atoms/LogoButton/logobutton.module"
import { ActionButtonModule } from "Atoms/ActionButton/actionbutton.module"
import { InputFieldModule } from "Atoms/InputField/inputfield.module"
import { ResetPasswordComponent } from 'Organisms/ResetPasswordDialog/reset-password.component';

import { UserService } from "Services/user.service"

@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
  	BrowserModule,
    NbStepperModule,
    NbDialogModule,
    NbCardModule,
    LogoButtonModule,
    ActionButtonModule,
    InputFieldModule
  ],
  exports: [
    ResetPasswordComponent
  ],
  providers: [UserService],
  bootstrap: [ResetPasswordComponent]
})

export class ResetPasswordModule {}
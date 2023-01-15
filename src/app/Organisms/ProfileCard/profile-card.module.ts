import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { BrowserModule } from '@angular/platform-browser';
import { NbCardModule } from '@nebular/theme';

import { LogoButtonModule } from "Atoms/LogoButton/logobutton.module"
import { ActionButtonModule } from "Atoms/ActionButton/actionbutton.module"
import { InputFieldModule } from "Atoms/InputField/inputfield.module"
import { ProfileCardComponent } from './profile-card.component';
import { ResetPasswordModule } from "Organisms/ResetPasswordDialog/reset-password.module"

import { UserService } from "Services/user.service"

@NgModule({
  declarations: [
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
  	BrowserModule,
    NbCardModule,
    LogoButtonModule,
    ActionButtonModule,
    InputFieldModule,
    ResetPasswordModule
  ],
  exports: [
    ProfileCardComponent
  ],
  providers: [UserService],
  bootstrap: [ProfileCardComponent]
})

export class ProfileCardModule {}
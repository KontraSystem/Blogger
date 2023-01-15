import { NgModule } from "@angular/core"
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NbLayoutModule, NbMenuModule, NbDialogService, NbMenuService } from '@nebular/theme';
import { NavActionButtonModule } from "Atoms/NavActionButton/navactionbutton.module"
import { ActionButtonModule } from "Atoms/ActionButton/actionbutton.module"
import { LogoButtonModule } from "Atoms/LogoButton/logobutton.module"
import { SearchGroupModule } from "Molecules/SearchGroup/searchgroup.module"
import { LoginDialogModule } from "Organisms/LoginDialog/login-dialog.module"
import { RegisterDialogModule } from "Organisms/RegisterDialog/register-dialog.module"

import { NavActionComponent } from './navaction.component';

@NgModule({
  declarations: [
    NavActionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NbLayoutModule,
    NbMenuModule,
    LogoButtonModule,
    SearchGroupModule,
    NavActionButtonModule,
    ActionButtonModule,
    HttpClientModule,
    LoginDialogModule,
    RegisterDialogModule
  ],
  exports: [ 
    NavActionComponent
  ],
  providers: [NbMenuService, NbDialogService],
  bootstrap: [NavActionComponent]
})

export class NavActionModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { BrowserModule } from '@angular/platform-browser';
import { NbCardModule, NbToastrService } from '@nebular/theme';

import { LogoButtonModule } from "Atoms/LogoButton/logobutton.module"
import { ActionButtonModule } from "Atoms/ActionButton/actionbutton.module"
import { PostComponent } from './post.component';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
  	BrowserModule,
    NbCardModule,
    LogoButtonModule,
    ActionButtonModule
  ],
  exports: [
    PostComponent
  ],
  providers: [NbToastrService],
  bootstrap: [PostComponent]
})

export class PostModule {}
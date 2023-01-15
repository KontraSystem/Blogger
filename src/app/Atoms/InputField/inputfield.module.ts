import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbInputModule, NbFormFieldModule, NbIconModule, NbButtonModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';

import { InputFieldComponent } from './inputfield.component';

@NgModule({
  declarations: [
    InputFieldComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NbInputModule,
    NbFormFieldModule,
    ReactiveFormsModule,
    NbIconModule, 
    NbButtonModule
  ],
  exports: [
    InputFieldComponent
  ],
  providers: [],
  bootstrap: [InputFieldComponent]
})

export class InputFieldModule {}
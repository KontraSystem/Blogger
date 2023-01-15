import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputFieldComponent } from "Atoms/InputField/inputfield.component"

@Component({
  selector: 'input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ["../InputField/inputfield.component.css"]
})
export class InputAreaComponent extends InputFieldComponent {
  title: string
  description: string
  full_text: string
}


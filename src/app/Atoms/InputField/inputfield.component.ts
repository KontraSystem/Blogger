import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'input-field',
  templateUrl: './inputfield.component.html',
  styleUrls: ["./inputfield.component.css"]
})
export class InputFieldComponent {
  @Input('fieldName') fieldName: String = "text here"
  @Input('type') type: String = "text"
  @Input('label') label: String = "Label"
  @Input('text') text: string = ""

  field = new FormControl("")
  showPassword = false


  getInputType() {
    if(this.type === "password") {
      if (this.showPassword) {
        return 'text';
      }
    }
    return this.type
  }

  ngOnInit() {
    this.field.setValue(this.text)
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}


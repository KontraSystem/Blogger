import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-action-button',
  templateUrl: '../ActionButton/actionbutton.component.html',
  styleUrls: ['./navaction.component.css']
})
export class NavActionButtonComponent {
  @Input("buttonLabel") label: String = "Log In";
}

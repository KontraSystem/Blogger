import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'action-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './actionbutton.component.html',
  styleUrls: ['../button.component.css']
})
export class ActionButtonComponent {
  @Input("buttonLabel") label: String = "Log In";
}

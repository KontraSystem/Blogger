import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'logo-button',
  templateUrl: './logobutton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../button.component.css']
})
export class LogoButtonComponent {
  @Input('label') label: string = ""
  @Input('buttonIcon') buttonIcon: string = ""
  @Input('size') size: string = "large"

  @Input('outline') outline: boolean = true
}
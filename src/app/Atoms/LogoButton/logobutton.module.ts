import { NgModule } from "@angular/core"

import { NbIconModule, NbButtonModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from "@nebular/eva-icons"
import { LogoButtonComponent } from './logobutton.component';

@NgModule({
  declarations: [
    LogoButtonComponent
  ],
  imports: [
    NbLayoutModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule
  ],
  exports: [ 
    LogoButtonComponent
  ],
  providers: [],
  bootstrap: [LogoButtonComponent]
})

export class LogoButtonModule {}

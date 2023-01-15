import { NgModule } from "@angular/core"

import { NbButtonModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from "@nebular/eva-icons"
import { ActionButtonComponent } from './actionbutton.component';

@NgModule({
  declarations: [
    ActionButtonComponent
  ],
  imports: [
    NbLayoutModule,
    NbButtonModule,
    NbEvaIconsModule
  ],
  exports: [ 
    ActionButtonComponent
  ],
  providers: [],
  bootstrap: [ActionButtonComponent]
})

export class ActionButtonModule {}

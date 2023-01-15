import { NgModule } from "@angular/core"

import { NbButtonModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from "@nebular/eva-icons"
import { NavActionButtonComponent } from './navactionbutton.component';

@NgModule({
  declarations: [
    NavActionButtonComponent
  ],
  imports: [
    NbLayoutModule,
    NbButtonModule,
    NbEvaIconsModule
  ],
  exports: [ 
    NavActionButtonComponent
  ],
  providers: [],
  bootstrap: [NavActionButtonComponent]
})

export class NavActionButtonModule {}

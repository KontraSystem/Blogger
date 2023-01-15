import { NgModule } from "@angular/core"

import { NbLayoutModule } from "@nebular/theme"
import { ActionButtonModule } from "Atoms/ActionButton/actionbutton.module"
import { InputFieldModule } from "Atoms/InputField/inputfield.module"
import { SearchGroupComponent } from "./searchgroup.component"

@NgModule({
  declarations: [
    SearchGroupComponent
  ],
  imports: [
    NbLayoutModule,
    ActionButtonModule,
    InputFieldModule
  ],
  exports: [
    SearchGroupComponent
  ],
  providers: [],
  bootstrap: [SearchGroupComponent]
})

export class SearchGroupModule {}
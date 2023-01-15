import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from '@angular/forms';
import { NbDialogModule, NbInputModule, NbCardModule, NbLayoutModule } from "@nebular/theme"

import { RegisterDialogComponent } from "Organisms/RegisterDialog/register-dialog.component"
import { ActionButtonModule } from "Atoms/ActionButton/actionbutton.module";
import { InputFieldModule } from "Atoms/InputField/inputfield.module";

import { UserService } from "Services/user.service" 

@NgModule({
	declarations: [
		RegisterDialogComponent
	],
	imports: [
		NbCardModule,
		ReactiveFormsModule,
		NbLayoutModule,
		ActionButtonModule,
		InputFieldModule,
    NbDialogModule.forRoot(),
	],
	exports: [
		RegisterDialogComponent
	],
	providers: [UserService],
	bootstrap: [RegisterDialogComponent]
})

export class RegisterDialogModule { }
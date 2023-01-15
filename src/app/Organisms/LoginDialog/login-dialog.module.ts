import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from '@angular/forms';
import { NbDialogModule, NbInputModule, NbCardModule, NbLayoutModule } from "@nebular/theme"

import { LoginDialogComponent } from "Organisms/LoginDialog/login-dialog.component"
import { ActionButtonModule } from "Atoms/ActionButton/actionbutton.module";
import { InputFieldModule } from "Atoms/InputField/inputfield.module";

import { UserService } from "Services/user.service" 

@NgModule({
	declarations: [
		LoginDialogComponent
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
		LoginDialogComponent
	],
	providers: [UserService],
	bootstrap: [LoginDialogComponent]
})

export class LoginDialogModule { 

}
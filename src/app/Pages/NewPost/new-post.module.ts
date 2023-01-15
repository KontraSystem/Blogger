import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from '@angular/forms';
import { NbDialogModule, NbInputModule, NbCardModule, NbLayoutModule } from "@nebular/theme"

import { NewPostComponent } from "Pages/NewPost/new-post.component"
import { ActionButtonModule } from "Atoms/ActionButton/actionbutton.module";
import { InputFieldModule } from "Atoms/InputField/inputfield.module";
import { InputAreaModule } from "Atoms/InputArea/input-area.module";

import { UserService } from "Services/user.service" 

@NgModule({
	declarations: [
		NewPostComponent
	],
	imports: [
		NbCardModule,
		ReactiveFormsModule,
		NbLayoutModule,
		ActionButtonModule,
		InputFieldModule,
		InputAreaModule,
    NbDialogModule.forRoot(),
	],
	exports: [
		NewPostComponent
	],
	providers: [UserService],
	bootstrap: [NewPostComponent]
})

export class NewPostModule { }
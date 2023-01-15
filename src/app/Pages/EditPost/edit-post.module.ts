import { NgModule } from "@angular/core";

import { NbDialogModule, NbInputModule, NbCardModule, NbLayoutModule } from "@nebular/theme"

import { EditPostComponent } from "Pages/EditPost/edit-post.component"
import { NewPostModule } from "Pages/NewPost/new-post.module"

import { PostService } from "Services/post.service" 

@NgModule({
	declarations: [
		EditPostComponent
	],
	imports: [
		NbCardModule,
		NbLayoutModule,
		NewPostModule,
    NbDialogModule.forRoot(),
	],
	exports: [
		EditPostComponent
	],
	providers: [PostService],
	bootstrap: [EditPostComponent]
})

export class EditPostModule { }
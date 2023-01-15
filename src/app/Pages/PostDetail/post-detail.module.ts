import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { BrowserModule } from "@angular/platform-browser"

import { NbListModule } from "@nebular/theme"

import { PostModule } from "Organisms/Post/post.module"
import { PostDetailComponent } from "Pages/PostDetail/post-detail.component"

import { PostService } from "Services/post.service"

@NgModule({
	declarations: [PostDetailComponent],
	imports: [
		CommonModule,
		BrowserModule,
		PostModule,
		NbListModule
	],
	exports: [PostDetailComponent],
	providers: [PostService],
	bootstrap: [PostDetailComponent]
})

export class PostDetailModule { }
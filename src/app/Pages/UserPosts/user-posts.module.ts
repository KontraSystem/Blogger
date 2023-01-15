import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { BrowserModule } from "@angular/platform-browser"

import { NbListModule } from "@nebular/theme"

import { PostModule } from "Organisms/Post/post.module"
import { UserPostsComponent } from "Pages/UserPosts/user-posts.component"

import { PostService } from "Services/post.service"

@NgModule({
	declarations: [UserPostsComponent],
	imports: [
		CommonModule,
		BrowserModule,
		NbListModule,
		PostModule
	],
	exports: [UserPostsComponent],
	providers: [PostService],
	bootstrap: [UserPostsComponent]
})

export class UserPostsModule { }
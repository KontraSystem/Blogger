import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { NbListModule } from "@nebular/theme"
import { PostModule } from "Organisms/Post/post.module"

import { HomeComponent } from "Pages/Home/home.component"
import { PostService } from "Services/post.service"

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		BrowserModule,
		NbListModule,
		PostModule
	],
	exports: [HomeComponent],
	providers:[PostService],
	bootstrap: [HomeComponent]
})

export class HomeModule { }
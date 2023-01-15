import { Component, ViewChild, Input, OnInit } from "@angular/core";
import {Location} from '@angular/common';
import { Router } from "@angular/router";
import { NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from "@nebular/theme"

import { PostService } from "Services/post.service"

@Component({
	selector: "new-post",
	templateUrl: "new-post.component.html",
	styleUrls: ["./new-post.component.css"]
})

export class NewPostComponent {

	@Input('id') public id: number
	@Input('post_title') public post_title: string
	@Input('post_description') public post_description: string
	@Input('post_full_text') public post_full_text: string

	@ViewChild('title') title: any
	@ViewChild('description') description: any
	@ViewChild('post') full_text: any
	positions = NbGlobalPhysicalPosition
	config = { icon: 'book-outline', preventDuplicates: true, position: this.positions.BOTTOM_RIGHT, duration: 10000 }

	constructor(private toastrService: NbToastrService, private postService: PostService, private router: Router, private location: Location) {
	}

	ngOnInit() {

	}

	cancel() {
		this.location.back()
	}

	submit() {
		if(this.id) {
			this.postService.editPost({
				id: this.id,
				title: this.title.field.value,
				description: this.description.field.value,
				full_text: this.full_text.field.value,
			}).subscribe((res) => {
				this.toastrService.show("Post updated", "Post Saved", this.config)
			})
		} else {
			this.postService.createNewPost({
				title: this.title.field.value,
				description: this.description.field.value,
				full_text: this.full_text.field.value,
				user_id: Number(localStorage.getItem("userId")) ?? -1
			}).subscribe(data => {
				this.toastrService.show(this.title.field.value, "New Post Created", this.config)
				this.router.navigate(["/"])
			})
		}
	}

}
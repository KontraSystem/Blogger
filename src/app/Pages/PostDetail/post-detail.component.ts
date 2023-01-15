import { Component, OnInit } from "@angular/core"
import { Router } from '@angular/router';

import { PostService } from "Services/post.service"
@Component({
	selector: "post-detail",
	templateUrl: "post-detail.component.html"
})
export class PostDetailComponent {
	post: {
		id: number,
		title: string,
		full_text: string,
		username: string,
		modified_at: Date
	}

	constructor(private postService: PostService) { }

	ngOnInit() {
		this.post = this.postService.getDetails()
	}
}
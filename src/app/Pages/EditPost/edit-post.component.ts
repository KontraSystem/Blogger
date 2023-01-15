import { Component, ViewChild, Input, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { PostService } from "Services/post.service"

@Component({
	selector: "edit-post",
	templateUrl: "edit-post.component.html",
	styleUrls: ["../NewPost/new-post.component.css"]
})

export class EditPostComponent {
	postData: {
		id: number
    title: string,
    description: string,
    username?: string,
    full_text: string
  }

	constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		console.log(this.postService.getDetails())
		this.postData = this.postService.getDetails()
	}

	cancel() {
		this.router.navigate(["/"])
	}

}
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { PostService } from "Services/post.service"

@Component({
	selector: "user-posts",
	templateUrl: "./user-posts.component.html"
})

export class UserPostsComponent { 

	posts: Array<{
		id: number,
		title: string,
		description: string,
		username: string,
		modified_at: Date
	}>
	constructor(private postService: PostService, private _router: Router) {	}

	ngOnInit() {
		this.postService.getAllUserPosts().subscribe((res: Array<{
			id: number,
			title: string,
			description: string,
			username: string,
			modified_at: Date
		}>) => {
			console.log(res)
			this.posts = res
		})
	}

}
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { PostService } from "Services/post.service"

@Component({
	selector: "home",
	templateUrl: "./home.component.html"
})

export class HomeComponent { 

	posts: Array<{
		id: number,
		title: string,
		description: string,
		username: string,
		modified_at: Date
	}>

	constructor(private postService: PostService, private _router: Router) {	}

	ngOnInit() {
		this.postService.getAllPosts().subscribe((res: Array<{
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

	getPostDetail(id: number) {
		this.postService.getPostDetails(id).subscribe((res) => {
			this.postService.setDetails(res)
			this._router.navigate(["post/details"])
		})
	}

}
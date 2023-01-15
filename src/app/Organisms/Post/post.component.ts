import { Component, Input } from '@angular/core';
import { Router } from "@angular/router"
import { NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from "@nebular/theme"

import { PostService } from "Services/post.service"
import { UserService } from "Services/user.service"

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
})
export class PostComponent {

  @Input("title") title: string = "Log In";
  @Input("id") id: number

  @Input("description") description: string = `A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
    Originally, nebula was a name for any diffuse astronomical object,
    including galaxies beyond the Milky Wa`

  @Input('username') user: string = ""

  @Input('date') date: Date = new Date()

  @Input('isDetail') isDetail = false

  @Input('userPosts') userPosts: boolean
  positions = NbGlobalPhysicalPosition
  config = { preventDuplicates: true, position: this.positions.BOTTOM_RIGHT, duration: 10000 }

  constructor(
    private toastrService: NbToastrService, 
    private router: Router, 
    private postService: PostService,
    private userService: UserService
  ) {

  }

  back() {
    this.router.navigate(["../"])
  }

  editPost() {
    this.postService.getPostDetails(this.id).subscribe((res) => {
      console.log("res", res)
      this.postService.setDetails(res)
      this.router.navigate(["post/edit"])
    })
  }

  deletePost() {
    this.postService.deletePost(this.id).subscribe(data => {
      this.toastrService.show("by "+this.userService.getUsername(), "Post Deleted", {...this.config, icon: 'trash-outline'})
      window.location.reload()
      this.router.navigate(["/user/posts"])
    })
  }
}

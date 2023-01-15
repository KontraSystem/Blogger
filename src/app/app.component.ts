import { Component, HostBinding, OnInit } from '@angular/core';
import { NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService, NbSidebarService } from '@nebular/theme';

import { UserService } from "Services/user.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private index: number = 0;
  private posts: Array<{ 
    title: String,
    description: String,
    full_text: String,
    user_id: Number,
    created_at: String 
  }>

  @HostBinding('class')
  classes = 'example-items-rows';

  positions = NbGlobalPhysicalPosition
  config = { icon: 'book-outline', preventDuplicates: true, position: this.positions.BOTTOM_RIGHT, duration: 1000000 }

  constructor(
    private toastrService: NbToastrService, 
    private sidebarService: NbSidebarService,
    protected userService: UserService
  ) {
    
  }

  showToast() {
    this.toastrService.show("or register", `Log In`, this.config);
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
    return false;
  }

}

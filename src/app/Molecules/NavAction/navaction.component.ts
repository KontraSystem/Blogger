import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { NbMenuItem, NbDialogService } from "@nebular/theme"

import { UserService } from "Services/user.service"

import { LoginDialogComponent } from "Organisms/LoginDialog/login-dialog.component"
import { RegisterDialogComponent } from "Organisms/RegisterDialog/register-dialog.component"

@Component({
  selector: 'nav-action',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navaction.component.html',
  styleUrls: ["./navaction.component.css"]
})
export class NavActionComponent {

  buttonLabel = this.userService.getUserToken() ? "Log out" : "Sign in or Register"
  

  constructor(private router: Router, private dialogService: NbDialogService, protected userService: UserService) { }

  ngOnInit() {
    this.router.navigate(["/"])
  }

  profileItems: NbMenuItem[] = this.userService.getUserToken() ? [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "My Profile",
      link: "profile",
      children: [
        {
          title: "My Posts",
          link: "user/posts"
        },
        {
          title: "My Settings",
          link: "/settings"
        }
      ]
    }
  ] : [{ title: "Home" }]

  openLoginDialog() {
    this.dialogService.open(LoginDialogComponent)
    .onClose.subscribe(value => {
      window.location.reload()
    })
  }

  openRegisterDialog() {
    this.dialogService.open(RegisterDialogComponent)
    .onClose.subscribe(value => {
      window.location.reload
    })
  }

  handleLogout() {
    if(this.userService.getUserToken()) {
      localStorage.clear()
      
      window.location.reload()
    }
  }

}

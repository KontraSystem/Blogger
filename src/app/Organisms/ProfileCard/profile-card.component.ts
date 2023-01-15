import { Component, OnInit, ViewChild } from "@angular/core"
import { Location } from "@angular/common"
import { NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbDialogService, NbToastrService } from "@nebular/theme"
import { UserService } from "Services/user.service"

import { ResetPasswordComponent } from "Organisms/ResetPasswordDialog/reset-password.component"

@Component({
	selector: "profile-card",
	templateUrl: "./profile-card.component.html"
})

export class ProfileCardComponent {

	userData: {
		id: number,
		username: string,
		email: string,
		created_at: Date
	}

	@ViewChild('username') username: any
	@ViewChild('email') email: any

	positions = NbGlobalPhysicalPosition
	config = { icon: 'checkmark-circle-2-outline', preventDuplicates: true, position: this.positions.BOTTOM_RIGHT, duration: 10000 }
	
	constructor(
		private location: Location,
		private dialogService: NbDialogService, 
		private userService: UserService,
		private toastrService: NbToastrService
	) {}

	ngOnInit() {
		this.userService.getUserData().subscribe((res) => {
			this.userData = res
		})
	}

	back() {
		this.location.back()
	}

	updateData() {
		const email = this.email.field.value
		const username = this.username.field.value
		
		this.userService.updateUser({ id: this.userData.id, email: email, username: username }).subscribe((res) => {
			this.toastrService.show("User data reset", "Success", this.config)
		})	
	}

	resetPasswordDialog() {
		this.dialogService.open(ResetPasswordComponent)
    .onClose.subscribe(value => {
      //window.location.reload
      if(value.success) {
      	this.toastrService.show("Password reset", "Success", this.config)
      }
    })
	}

}
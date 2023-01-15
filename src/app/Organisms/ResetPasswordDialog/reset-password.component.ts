import { Component, ViewChild } from "@angular/core"
import { NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbDialogRef, NbToastrService } from "@nebular/theme"
import { UserService } from "Services/user.service"

@Component({
	selector: "reset-password",
	templateUrl: "./reset-password.component.html"
})

export class ResetPasswordComponent {

	@ViewChild('password') pass: any
	@ViewChild('newpassword') newPass: any
	@ViewChild('repassword') rePass: any

	positions = NbGlobalPhysicalPosition
	config = { preventDuplicates: true, position: this.positions.BOTTOM_RIGHT, duration: 1000 }

	constructor(private toastrService: NbToastrService, private userService: UserService, private ref: NbDialogRef<ResetPasswordComponent>) {

	}
	

	cancel() {
		this.ref.close({ success: false })
	}

	submit() {
		if(this.newPass.field.value.length > 8) {
			if(this.newPass.field.value === this.rePass.field.value) {
				this.userService.resetPassword({ id: Number(this.userService.getUserId()) ?? -1, password: this.newPass.field.value as string}).subscribe((data: {
					success: boolean }) => {
		      this.ref.close({
		      	success:true
		      })
		    });
			} else {
				this.toastrService.show("Invalid", "Passwords don't match", { ...this.config, icon: "alert-circle-outline" })
			} 
		} else {
			this.toastrService.show("Invalid", "Password needs to be at least 8 characters", { ...this.config, icon: "alert-circle-outline" })
		}
	}
}
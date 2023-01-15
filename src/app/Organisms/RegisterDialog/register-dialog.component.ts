import { Component, ViewChild } from "@angular/core"
import { FormControl } from '@angular/forms';

import { NbDialogRef } from '@nebular/theme';
import { UserService } from "Services/user.service"

@Component({
	selector: "register-dialog",
	templateUrl: "register-dialog.component.html",
	styleUrls: ["../../app.component.css"]
})

export class RegisterDialogComponent {

	@ViewChild('email') email: any
	@ViewChild('username') username: any
	@ViewChild('password') password: any
	@ViewChild('repassword') repassword: any

	constructor(private ref: NbDialogRef<RegisterDialogComponent>, private userService: UserService) { }

	cancel() {
		this.ref.close()
	}

  submit() {
		if(this.password.field.value === this.repassword.field.value) {
    	this.userService.register({
    		username: this.username.field.value,
    		email: this.email.field.value,
    		password: this.password.field.value
    	}).subscribe((data) => {
    		this.userService.setUser({ 
				...data.data,
				token: data.token
			})
    		this.ref.close(data.success)
    	})
    }
	}
}
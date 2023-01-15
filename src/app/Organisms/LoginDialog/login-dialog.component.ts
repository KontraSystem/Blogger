import { Component, ViewChild } from "@angular/core"
import { FormControl } from '@angular/forms';

import { NbDialogRef } from '@nebular/theme';
import { UserService } from "Services/user.service"
@Component({
	selector: "login-dialog",
	templateUrl: "login-dialog.component.html",
	styleUrls: ["../../app.component.css"]
})

export class LoginDialogComponent {

	@ViewChild('email') email: any;
	@ViewChild('password') password: any;

	constructor(private userService: UserService, private ref: NbDialogRef<LoginDialogComponent>) {

	}

	cancel() {
		this.ref.close()
	}

	submit() {
		this.userService.login({
			email: this.email.field.value,
			password: this.password.field.value
		}).subscribe((data: {
			success: boolean
			data: {
				id: number,
				username: string,
				email: string
			},
			token: string
		}) => {
			this.userService.setUser({ 
				...data.data,
				token: data.token
			})
      this.ref.close()
    });
	}

}
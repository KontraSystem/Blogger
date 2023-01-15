import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { BrowserModule } from "@angular/platform-browser"
import { ProfileCardModule } from "Organisms/ProfileCard/profile-card.module"

import { SettingsComponent } from "Pages/ProfileSettings/settings.component"

import { UserService } from "Services/user.service"

@NgModule({
	declarations: [SettingsComponent],
	imports: [
		CommonModule,
		BrowserModule,
		ProfileCardModule
	],
	exports: [SettingsComponent],
	providers: [UserService],
	bootstrap: [SettingsComponent]
})

export class SettingsModule { }
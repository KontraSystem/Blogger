import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common"
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from "Pages/Home/home.component"
import { NewPostComponent } from "Pages/NewPost/new-post.component"
import { PostDetailComponent } from "Pages/PostDetail/post-detail.component"
import { UserPostsComponent } from "Pages/UserPosts/user-posts.component"
import { EditPostComponent } from "Pages/EditPost/edit-post.component"
import { SettingsComponent } from "Pages/ProfileSettings/settings.component"
import { 
  NbDialogModule, 
  NbSidebarService, 
  NbMenuModule, 
  NbSidebarModule, 
  NbLayoutModule, 
  NbThemeModule, 
  NbToastrModule, 
  NbActionsModule,
  NbToastrService 
} from '@nebular/theme';


import { HomeModule } from "Pages/Home/home.module"
import { UserPostsModule } from "Pages/UserPosts/user-posts.module"
import { EditPostModule } from "Pages/EditPost/edit-post.module"
import { LogoButtonModule } from "Atoms/LogoButton/logobutton.module"
import { NavActionModule } from 'Molecules/NavAction/navaction.module'
import { NewPostModule } from "Pages/NewPost/new-post.module"
import { PostDetailModule } from "Pages/PostDetail/post-detail.module"
import { SettingsModule } from "Pages/ProfileSettings/settings.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbToastrModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'post/new', component: NewPostComponent},
      {path: 'post/details', component: PostDetailComponent},
      {path: 'user/posts', component: UserPostsComponent},
      {path: 'post/edit', component: EditPostComponent},
      {path: 'settings', component: SettingsComponent}

    ]),
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbActionsModule,
    HomeModule,
    PostDetailModule,
    HttpClientModule,
    NavActionModule,
    LogoButtonModule,
    NewPostModule,
    EditPostModule,
    UserPostsModule,
    SettingsModule
  ],
  providers: [NbToastrService, NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {  
}

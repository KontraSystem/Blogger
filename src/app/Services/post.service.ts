import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { UserService } from "Services/user.service"

type PostDetail = {
  id: number,
  title: string,
  description: string,
  full_text: string,
  username: string,
  user_id: number,
  modified_at: Date
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  rootUrl = "https://blogger-be.herokuapp.com/"

  detailPost: PostDetail

  constructor(private http: HttpClient, private userService: UserService) { 
    this.createNewPost = this.createNewPost.bind(this)
    this.getAllPosts = this.getAllPosts.bind(this)
    this.getAllUserPosts = this.getAllUserPosts.bind(this)
    this.getPostDetails = this.getPostDetails.bind(this)
    this.deletePost = this.deletePost.bind(this)
    this.editPost = this.editPost.bind(this)
    this.setDetails = this.setDetails.bind(this)
    this.getDetails = this.getDetails.bind(this)
  }

  setDetails(data: PostDetail) {
    this.detailPost = data
  }

  getDetails() {
    return this.detailPost
  }

  getAllPosts(): Observable<any> {
    return this.http.get<any>(this.rootUrl+'api/posts');
  }
 
  createNewPost(data: {
    title: string,
    description: string,
    full_text: string,
    user_id: number
  }): Observable<any> {
    return this.http.post<any>(this.rootUrl+'api/posts/new-post', data)
  }

  getAllUserPosts(): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", this.userService.getUserId() ?? -1);
    return this.http.get<any>(this.rootUrl+'api/posts/user-posts', { params: queryParams })
  }

  getPostDetails(id: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return this.http.get<any>(this.rootUrl+'api/posts/post-details', { params: queryParams })
  }

  deletePost(id: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this.http.delete<any>(this.rootUrl+'api/posts/post-details/delete', { params: queryParams })
  }

  editPost(data: {
    id: number,
    title: string,
    description: string,
    full_text: string,
  }): Observable<any> {
    return this.http.put<any>(this.rootUrl+'api/posts/post-details/edit', data)
  }
}
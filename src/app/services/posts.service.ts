import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }

  createPost(newPostData: Omit<Post, 'id'>){
    return this.http.post<Post>(this.apiUrl, newPostData)
  }
}

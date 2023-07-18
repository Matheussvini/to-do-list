import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: any = [];

  constructor(private postsService: PostsService) {}

  getPosts() {
    this.postsService.getAllPosts().subscribe({
      next: (response) => {
        console.log('response', response);
        this.posts = response.splice(0, 10);
        console.log('10 posts', this.posts);
      },
      error: (error) => {
        console.error('Erro na requisição: ', error);
      },
    });
  }
}

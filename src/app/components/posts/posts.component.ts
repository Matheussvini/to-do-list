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
        const randomNumber = Math.floor(Math.random() * 100);
        this.posts = response.splice(randomNumber, 10);
      },
      error: (error) => {
        alert('Erro na requisição')
        console.error('Erro na requisição: ', error);
      },
    });
  }
}

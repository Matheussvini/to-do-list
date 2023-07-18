import { Component } from '@angular/core';
import { Post, PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: Post[] = [];

  newPostData = {
    title: '',
    body: '',
    userId: 1,
  };

  constructor(private postsService: PostsService) {}

  getPosts() {
    this.postsService.getAllPosts().subscribe({
      next: (response) => {
        const randomNumber = Math.floor(Math.random() * 100);
        this.posts = response.splice(randomNumber, 10);
      },
      error: (error) => {
        alert('Erro na requisição');
        console.error('Erro na requisição: ', error);
      },
    });
  }

  createPost() {
    if (
      this.newPostData.title.trim() !== '' &&
      this.newPostData.body.trim() !== ''
    ) {
      this.postsService.createPost(this.newPostData).subscribe({
        next: (response) => {
          alert(`Novo post criado com sucesso: 
          Id: ${response.id},
          UserId: ${response.userId},
          Título: ${response.title},
          Corpo: ${response.body}`);
        },
        error: (error) => {
          alert('Erro na requisição');
          console.error('Erro na requisição: ', error);
        },
        complete: () => {
          this.newPostData.title = '';
          this.newPostData.body = '';
        },
      });
    }
  }
}

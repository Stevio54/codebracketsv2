import { Component } from '@angular/core';
import { Post } from '../Models/post';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as rt from 'reading-time';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  public loadedPost: Post;

  private arcticleName: string;

  public readingTime: any;

  constructor(private meta: Meta, private title: Title, private http: HttpClient,
    private router: ActivatedRoute) {
      this.router.paramMap.subscribe((params) => {
        this.arcticleName = params.get('id');
        this.loadArticle();
      });
    }

  loadArticle() {
    this.http.get(`assets/content/posts/${this.arcticleName}.md`, {responseType: 'text'}).subscribe((data) => {
      this.loadedPost = new Post(this.arcticleName, data);
      this.readingTime = rt(this.loadedPost.contents);
    });
  }

}

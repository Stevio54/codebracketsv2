import { Component, AfterContentInit } from '@angular/core';
import { Post } from '../Models/post';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as rt from 'reading-time';
import { ViewCounterService } from '../view-counter.service';
import { PostsService } from '../posts.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements AfterContentInit {

  public loadedPost: Post;

  public postData: Post;

  private arcticleName: string;

  public readingTime: any;

  public footerImages: Array<string>;

  constructor(private meta: Meta, private title: Title, private http: HttpClient,
    private router: ActivatedRoute, private viewService: ViewCounterService,
    private postService: PostsService) {
      this.router.paramMap.subscribe((params) => {
        this.arcticleName = params.get('id');
        this.loadArticle();
      });
      this.postService.posts.subscribe((posts) => {
        this.postData =  _.orderBy(posts, ['date'], ['desc']).find((d) => d.name === this.arcticleName);
      });
    }

  loadArticle() {
    this.http.get(`assets/content/posts/${this.arcticleName}.md`, {responseType: 'text'}).subscribe((data) => {
      this.loadedPost = new Post(this.arcticleName, data);
      this.readingTime = rt(this.loadedPost.contents);
      this.viewService.addView(`/post/${this.arcticleName}`);
    });
  }

  ngAfterContentInit() {
    setTimeout(() => {
      if (this.loadedPost.scripts && this.loadedPost.scripts.length) {
        for (const sc of this.loadedPost.scripts) {
          this.http.get(sc, {responseType: 'text'}).subscribe((data) => {
            // tslint:disable-next-line:no-eval
            eval(data); // simply execute
            });
        }
      }
    }, 500);
  }

}

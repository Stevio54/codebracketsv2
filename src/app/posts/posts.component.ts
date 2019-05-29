import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Models/post';
import { PostsService } from '../posts.service';
import * as _ from 'lodash';
import { AngularFirestore } from '@angular/fire/firestore';
import * as m from 'moment';
import { ViewCounterService } from '../view-counter.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public postsData: Array<Post>;

  constructor(private meta: Meta, private title: Title, private http: HttpClient,
    private postService: PostsService, private viewService: ViewCounterService) {}

  ngOnInit() {
      this.postService.posts.subscribe((posts) => {
        this.postsData =  _.orderBy(posts, ['date'], ['desc']);
      });
      this.viewService.addView('/posts');
  }
}

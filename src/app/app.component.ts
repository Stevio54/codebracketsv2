import {Component, OnInit} from '@angular/core';
import { PostsService } from './posts.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collapsed = true;

  tags = [];

  latestPosts = [];

  constructor(private postService: PostsService) {
    postService.getPosts(); // get post data
  }

  ngOnInit() {
    this.postService.tags.subscribe((tags) => {
      this.tags = tags; // get unique tags
    });
    this.postService.latestPosts.subscribe((posts) => {
      this.latestPosts = posts;
    });
  }
}

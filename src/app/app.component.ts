import {Component, OnInit} from '@angular/core';
import { PostsService } from './posts.service';
import * as _ from 'lodash';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { ViewCounterService } from './view-counter.service';
import { QuerySnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collapsed = true;

  tags = [];

  latestPosts = [];

  viewCounts = 0;

  sarcasmTextInput = '';
  sarcasmTextOutput = '';

  constructor(private postService: PostsService, private routing: Router, private viewService: ViewCounterService) {
    postService.getPosts(); // get post data
    routing.events.subscribe((evt: any) => {
      if (evt instanceof NavigationEnd) {
      this.viewService.getViews(evt.urlAfterRedirects).then((items: QuerySnapshot<any>) => {
        this.viewCounts = items.size;
      });
      }
    });
  }

  ngOnInit() {
    this.postService.tags.subscribe((tags) => {
      this.tags = tags; // get unique tags
    });
    this.postService.latestPosts.subscribe((posts) => {
      this.latestPosts = posts;
    });
  }

  convertText() {
    this.sarcasmTextOutput = this.convertToSarcasm(this.sarcasmTextInput);
  }

  convertToSarcasm(input: string) {
    return input.match(/..?/g).map(function(value) { return value.charAt(0).toLowerCase() + value.charAt(1).toUpperCase(); }).join('');
  }
}

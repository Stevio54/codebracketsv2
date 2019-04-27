import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Post } from './Models/post';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public posts: BehaviorSubject<Array<Post>> = new BehaviorSubject([]);
  public tags: BehaviorSubject<Array<string>> = new BehaviorSubject([]);
  public latestPosts: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  constructor(private meta: Meta, private title: Title, private http: HttpClient) { }

  getPosts() {
    this.http.get(`assets/content/main.json`, {responseType: 'json'}).subscribe((data) => {
      const rawPosts = <Array<Post>>data;
      const filteredPosts = _.filter(rawPosts, (post) => !post.draft);
      // filter out draft items
      this.posts.next(filteredPosts);
      this.tags.next(_.orderBy(_.uniq(_.flatMap(filteredPosts, (r) => r.tags)))); // get unique tags
      this.latestPosts.next(_.flatMap(_.take(_.orderBy(filteredPosts, ['date'], ['desc']), 5), (r) =>  ({ title: r.title, name: r.name })));
    });
  }
}

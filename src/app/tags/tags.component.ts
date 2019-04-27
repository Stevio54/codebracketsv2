import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Post } from '../Models/post';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  private postsData: Array<Post>;
  public visiblePosts: Array<Post>;

  private tags: Array<string>;

  public availTags: BehaviorSubject<Array<string>>;

  public selectedTags: Array<string> = [];

  constructor(private meta: Meta, private title: Title, private http: HttpClient,
    private postService: PostsService,
    private router: ActivatedRoute,
    private route: Router) {
      this.router.paramMap.subscribe((params) => {
        this.loadTags(params.get('tag'));
        this.loadArticles();
      });
      this.availTags = this.postService.tags;
    }

  loadArticles() {
    this.postService.posts.subscribe((posts) => {
      this.postsData = posts;
      this.visiblePosts = _.filter(this.postsData, (post) => _.intersection(post.tags, this.tags).length === this.tags.length);
    });
  }

  private loadTags(tags: string) {
    try {
      this.tags = JSON.parse(tags);
    } catch (e) {
      this.tags = [];
      this.tags.push(tags);
    }
    this.selectedTags = _.union(this.tags, this.selectedTags);
  }

  updateTags() {
    this.route.navigate(['/tags', JSON.stringify(this.selectedTags)]);
  }

}

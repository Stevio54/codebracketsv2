import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {PostsComponent} from './posts/posts.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { CommonModule } from '@angular/common';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { TagsComponent } from './tags/tags.component';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    TransferHttpCacheModule,
    CommonModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({ loader: HttpClient, markedOptions: {
      provide: MarkedOptions,
      useValue: <MarkedOptions>{
        gfm: true,
        breaks: true,
        smartLists: true,
        smartypants: true,
        tables: true
      }
    }
    }),
    AppRoutingModule],
  exports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
      if (isPlatformBrowser(this.platformId)) {
          const hash = location.hash.replace('#!/', '');
          if (hash.length > 1) {
              history.pushState({}, 'entry page', hash);
          }
      }
  }
}

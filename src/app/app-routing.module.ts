import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { TagsComponent } from './tags/tags.component';

const routes = [{ path: '', redirectTo: '/posts', pathMatch: 'full' },
{ path: 'posts', component: PostsComponent, pathMatch: 'full'},
{ path: 'post/:id', component: PostComponent, pathMatch: 'full'},
{ path: 'tags/:tag', component: TagsComponent, pathMatch: 'full'}];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

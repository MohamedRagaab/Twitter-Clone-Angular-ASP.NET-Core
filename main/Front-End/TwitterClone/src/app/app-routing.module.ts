import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ListsComponent } from './lists/lists.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'explore',
    component:ExploreComponent,
    pathMatch:'full'
  },
  {
    path:'notification',
    component:NotificationsComponent,
    pathMatch:'full'
  },
  {
    path:'messages',
    component:MessagesComponent,
    pathMatch:'full'
  },
  {
    path:'bookmarks',
    component:BookmarksComponent,
    pathMatch:'full'
  },
  {
    path:'lists',
    component:ListsComponent,
    pathMatch:'full'
  },
  {
    path:'profile',
    component:ProfileComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

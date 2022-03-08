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
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:'',component:LayoutComponent, canActivate: [AuthGuard],
  children:[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'explore',component:ExploreComponent},
    {path:'notifications',component:NotificationsComponent},
    {path:'messages',component:MessagesComponent},
    {path:'bookmarks',component:BookmarksComponent },
    {path:'lists',component:ListsComponent},
    {path:'profile',component:ProfileComponent},
  ]
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  // otherwise return to home
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

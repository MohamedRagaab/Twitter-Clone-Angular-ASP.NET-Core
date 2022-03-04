import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExploreComponent } from './explore/explore.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ListsComponent } from './lists/lists.component';
import { ProfileComponent } from './profile/profile.component';
import { MoreComponent } from './more/more.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    NotificationsComponent,
    MessagesComponent,
    BookmarksComponent,
    ListsComponent,
    ProfileComponent,
    MoreComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

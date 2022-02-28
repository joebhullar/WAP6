import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { PostsComponent } from './Components/posts/posts.component';
import { PostDetailComponent } from './Components/post-detail/post-detail.component';
import { CommentsComponent } from './Components/comments/comments.component';
import { CommentDetailComponent } from './Components/comment-detail/comment-detail.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { AlbumDetailComponent } from './Components/album-detail/album-detail.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { CreateFeedbackComponent } from './Components/create-feedback/create-feedback.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HelpComponent } from './Components/help/help.component';
import { AuthGuard } from './_guard/auth.guard';
import { LogoutComponent } from './Components/logout/logout.component';

const routes:Routes=[
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  // {path:'Home', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'Home', component:HomeComponent},
  // {path:'Products', component:ProductsComponent, canActivate:[AuthGuard]}, //canActivate:[AuthGuard]
  {path:'Products', component:ProductsComponent}, //canActivate:[AuthGuard]
  {path:'ProductDetail/:productId', component:ProductDetailComponent},
  {path:'Users', component:UsersComponent},
  {path:'UserDetail/:id', component:UserDetailComponent},
  {path:'Posts', component:PostsComponent},
  {path:'PostDetail/:id', component:PostDetailComponent},
  {path:'Comments', component:CommentsComponent},
  {path:'CommentDetail/:id', component:CommentDetailComponent},
  {path:'Albums', component:AlbumsComponent},
  {path:'AlbumDetail/:id', component:AlbumDetailComponent},
  {path:'Feedbacks', component:FeedbackComponent},
  {path:'CreateFeedback', component:CreateFeedbackComponent},
  {path:'Login', component:LoginComponent},
  {path:'Registration', component:RegistrationComponent},
  {path:'Help', component:HelpComponent},
  {path:'Contact', component:ContactComponent},
  {path:'logout', component:LogoutComponent},
  {path:'**', component:PageNotFoundComponent}
]


@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ProductDetailComponent,
    UsersComponent,
    UserDetailComponent,
    PostsComponent,
    PostDetailComponent,
    CommentsComponent,
    CommentDetailComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    FeedbackComponent,
    CreateFeedbackComponent,
    RegistrationComponent,
    LoginComponent,
    ContactComponent,
    HelpComponent,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

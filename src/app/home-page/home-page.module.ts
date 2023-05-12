import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';

import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule.forRoot(
      {
        loader: HttpClient,
        sanitize: SecurityContext.NONE
        
      }
    ),


    RouterModule.forChild([
      
      {
        path:"", component: HomePageComponent
      },      
    ]),
  ]
})
export class HomePageModule { }

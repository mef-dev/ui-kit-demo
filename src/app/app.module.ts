import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoNavContainerComponent } from './components/no-nav-container/no-nav-container.component';
import { APP_BASE_HREF } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    NoNavContainerComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    }),
    NgxDatatableModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/ui_kit_demo' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

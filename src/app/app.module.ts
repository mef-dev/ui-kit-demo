import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoNavContainerComponent } from './components/no-nav-container/no-nav-container.component';
import {APP_BASE_HREF} from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HomePageComponent } from './components/home-page/home-page.component';

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
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgxDatatableModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/ui_kit_demo' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

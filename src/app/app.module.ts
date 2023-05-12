import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { SelectModule } from './select/select.module';
import { CardModule } from './card/card.module';
import { PageLayoutsModule } from './page-layouts/page-layouts.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MefDevCollapseModule } from '@natec/mef-dev-ui-kit';
import { TypographyModule } from './typography/typography.module';
import { MarkdownModule } from 'ngx-markdown';
import { HomePageModule } from './home-page/home-page.module';
import { NoNavContainerComponent } from './no-nav-container/no-nav-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    NoNavContainerComponent,
    
  ],
  imports: [
    HomePageModule,
    MarkdownModule,
    NgxDatatableModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SelectModule,
    CardModule,
    PageLayoutsModule, 
    MefDevCollapseModule, 
    TypographyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

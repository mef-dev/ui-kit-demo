import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoNavContainerComponent } from './components/no-nav-container/no-nav-container.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MarkdownModule } from 'ngx-markdown';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { MDSwitchModule } from '@natec/mef-dev-ui-kit';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    NoNavContainerComponent,
    HomePageComponent,
    ThemeToggleComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
    NgxDatatableModule,
    MDSwitchModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/ui_kit_demo' },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}

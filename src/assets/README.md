# @natec/mef-dev-ui-kit

## Description
This is Ui-kit-lib to create plugins according to the template and visual on the platform [mefdev.com](https://preview.mef.dev/) with the help of ready made solutions.It provides users with the opportunity to explore and test various components and functionalities of the library before using them in their own projects.
How to create your first Ui-package click [here](https://mef.dev/dev_guides/first_ui_plugin.md)

Also you can check displaying of all the elements together here [UI-kit-demo](https://mef.dev/ui_kit_demo).

This guide created for Angular@15 version project. Cause we will use packages compatible with Angular 15 version.

## Version control
You can use the library on the following versions of Angular:
|Angular/CLI|@natec/mef-dev-ui-kit|
|--------|:--------------|
|v.13    |     v.1   |
|v.14    |     v.14  |
|v.15    |     v.15  |
|v.16    |     v.16  |

## Getting Started
### Installing
  Firstly you need to install following packages:

  > @natec/mef-dev-ui-kit: 
  ```sh
  npm i @natec/mef-dev-ui-kit@15
  ```

  > Simple table extension with sorting, filtering, paging... for Angular apps. ngx-datatable: 
  ```sh
  npm i @swimlane/ngx-datatable@20
  ```

  > Sleek, intuitive, and powerful front-end framework for faster and easier web development. bootstrap:
  ```sh
  npm i bootstrap@5
  ```

  > Ngx-bootstrap provides Bootstrap components powered by Angular, so you don't need to include original JS components.ngx-bootstrap:
  ```sh
  npm i ngx-bootstrap@10
   ```

  > CSS font-family parser/stringifier. Font-awesome:
  ```sh
  npm i font-awesome@4
  ```    
### Adding dependencies:
  Now you need to add path in your Angular.json file
    
  ```html
  "architect": {
    "build": {
      "options": {
        "styles": [
              "node_modules/bootstrap/scss/bootstrap.scss",
              "node_modules/@natec/mef-dev-ui-kit/src/lib/styles/pg/core.scss",
              "node_modules/font-awesome/scss/font-awesome.scss",
              "src/styles.scss"
        ]
      }
    }
  }
  ```
### Usage
Firstly, you need to import BrowserAnimationsModule in your `app.module.ts`
```html
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

You need to import Module from Ui-kit-lib installed earlier in your own module, and add to imports too.
Example:
```html 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MefDevCardModule } from '@natec/mef-dev-ui-kit';

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    MefDevCardModule,
  ]
})
export class CardsModule { }
```

After, you can use MefDev components in your project. Example of usage:
```html
    <mefdev-card 
      class="b-color-Light-Gray-2 pt-3"
      [description] = "'Description'"
      [card_type]="'type'"
      [img]="'assets/imgs/store/Frame 521.png'">
      <ng-template #card_title >
         card_title
      </ng-template>
      <ng-template #card_footer>
        card_footer
      </ng-template>
    </mefdev-card>
```

### List of modules you can import in your project:
* MefDevCardModule
* MefDevCollapseModule
* MefDevModalModule
* MefDevPageLayoutsModule
* MefDevFilteredFieldModule
* MefDevHelpBlockModule
* MefDevProgressModule
* MefDevSelectModule
* MefDevSwitchModule
* MefDevTabsModule

> Examples of other components you can find in this documentation in left menubar.
  
### Useful links:   
___
   * Documentation of the library: https://mef.dev/ui_kit
   * Demo of the library: https://mef.dev/ui_kit_demo
   * Library package: https://www.npmjs.com/package/@natec/mef-dev-ui-kit
   * Ui-kit-lib at GitHub: https://github.com/mef-dev/ui-kit-demo.git
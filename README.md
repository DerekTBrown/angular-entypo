# angular-entypo
[![Build Status](https://travis-ci.org/DerekTBrown/angular-entypo.svg?branch=master)](https://travis-ci.org/DerekTBrown/angular-entypo)

## Usage

1. Include the Entypo Font.

  Option A: Use the font hosted by jsdelivr:

    ```css
    @font-face {
        font-family: 'EntypoRegular';
        src: url('https://cdn.jsdelivr.net/gh/derektbrown/angular-entypo@1.0.0/fonts/entypo.eot');
        src: url('https://cdn.jsdelivr.net/gh/derektbrown/angular-entypo@1.0.0/fonts/entypo.eot?#iefix') format('embedded-opentype'),
             url('https://cdn.jsdelivr.net/gh/derektbrown/angular-entypo@1.0.0/fonts/entypo.woff') format('woff'),
             url('https://cdn.jsdelivr.net/gh/derektbrown/angular-entypo@1.0.0/fonts/entypo.ttf') format('truetype'),
             url('https://cdn.jsdelivr.net/gh/derektbrown/angular-entypo@1.0.0/fonts/entypo.svg#EntypoRegular') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'EntypoSocialRegular';
        src: url('https://cdn.jsdelivr.net/gh/derektbrown/angular-entypo@1.0.0/fonts/entypo-social.eot');
        src: url('https://cdn.jsdelivr.net/gh/derektbrown/angular-entypo@1.0.0/fonts/entypo-social.eot?#iefix') format('embedded-opentype'),
             url('https://cdn.jsdelivr.net/gh/derektbrown/angular-entypo@1.0.0/fonts/entypo-social.woff') format('woff'),
             url('https://cdn.jsdelivr.net/gh/derektbrown/angular-entypo@1.0.0/fonts/entypo-social.ttf') format('truetype'),
             url('https://cdn.jsdelivr.net/gh/derektbrown/angular-entypo@1.0.0/fonts/entypo-social.svg#EntypoRegular') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    ```

  Option B: [Download the font](https://github.com/danielbruce/entypo) and include it manually.

2. Install the `angular-entypo` package from `npm`.

3. Import the `AngularEntypoModule` and declare the `AngularEntypoComponent` like so:

  ```typescript
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

  import { AppComponent } from './app.component';

  //  |  DOWN HERE
  //  V
  import { AngularEntypoModule, AngularEntypoComponent } from 'angular-entypo';

  @NgModule({
    declarations: [
      AppComponent,
      AngularEntypoComponent // <-- ALSO HERE
    ],
    imports: [
      BrowserModule,
      AngularEntypoModule // <-- AND AGAIN HERE
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

  ```

4. Use it to create icons:

  ```html

  <entypo name="phone"></entypo>
  <entypo name="github"></entypo>

  <!-- Also supports some font-awesome style transforms: !-->
  <entypo name="github" flip="vertical" scale="3"></entypo>

  ```

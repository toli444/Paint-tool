import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCanvasComponent } from './my-canvas/my-canvas.component';
import { MyToolbarComponent } from './my-toolbar/my-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCanvasComponent,
    MyToolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

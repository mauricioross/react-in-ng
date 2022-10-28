import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomReactComponentWrapperComponent } from 'src/CustomReactComponentWrapper';
import { CustomReactCompWrapperComponent } from 'src/CustomReactCompWrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomReactComponentWrapperComponent,
    CustomReactCompWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

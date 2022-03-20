import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from './shared';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

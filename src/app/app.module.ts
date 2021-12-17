import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Home } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, LoginComponent, Home],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

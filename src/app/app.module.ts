import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './presentation/components/header/header.component';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { HomeComponent } from './presentation/components/home/home.component';
import { DefaultLayoutComponent } from './presentation/components/default-layout/default-layout.component';
import { AboutComponent } from './presentation/components/about/about.component';
import { NotfoundComponent } from './presentation/components/notfound/notfound.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DefaultLayoutComponent,
    AboutComponent,
    NotfoundComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [HighlightDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

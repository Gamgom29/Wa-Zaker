import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuranComponent } from './components/quran/quran.component';
import { AzkarComponent } from './components/azkar/azkar.component';
import { AzanComponent } from './components/azan/azan.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    QuranComponent,
    AzkarComponent,
    AzanComponent,
    NavbarComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

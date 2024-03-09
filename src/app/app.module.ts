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
import { QuranReadingComponent } from './components/quran-reading/quran-reading.component';
import { QuranListenComponent } from './components/quran-listen/quran-listen.component';
@NgModule({
  declarations: [
    AppComponent,
    QuranComponent,
    AzkarComponent,
    AzanComponent,
    NavbarComponent,
    SearchPipe,
    QuranReadingComponent,
    QuranListenComponent,
    
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

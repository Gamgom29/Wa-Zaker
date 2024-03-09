import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuranComponent } from './components/quran/quran.component';
import { AzkarComponent } from './components/azkar/azkar.component';
import { AzanComponent } from './components/azan/azan.component';
import { QuranReadingComponent } from './components/quran-reading/quran-reading.component';
import { QuranListenComponent } from './components/quran-listen/quran-listen.component';

const routes: Routes = [
  {path:'' , redirectTo :'quran' , pathMatch:'full' },
  {path:'quran' , component:QuranComponent },
  {path:'azkar' , component:AzkarComponent},
  {path:'azan' , component:AzanComponent},
  {path:'quran-reading' , component:QuranReadingComponent},
  {path:'quran-listen' , component:QuranListenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    scrollPositionRestoration:'enabled'
  }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

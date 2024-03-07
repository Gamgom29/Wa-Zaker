import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuranComponent } from './components/quran/quran.component';
import { AzkarComponent } from './components/azkar/azkar.component';
import { AzanComponent } from './components/azan/azan.component';

const routes: Routes = [
  {path:'' , redirectTo :'quran' , pathMatch:'full' },
  {path:'quran' , component:QuranComponent},
  {path:'azkar' , component:AzkarComponent},
  {path:'azan' , component:AzanComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

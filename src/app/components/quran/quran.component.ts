import { QuranService } from './../../quran.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Surah } from 'src/app/shared/interfaces/surah';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.scss']
})
export class QuranComponent implements OnInit {
  constructor(private _QuranService:QuranService){}
  
  ngOnInit(): void {
    this._QuranService.getAllSurah().subscribe({
      next:res=>{
        this.surahs = res.data;
        this.surahNameConvert();
      },
      error:err=>{
        console.log(err);
        
      }
    });
    this._QuranService.getSpecSurah(1).subscribe({
      next:res=>{
        this.displayedSurah = res.data;
      }
    });
    
  }
  surahNameConvert(){
    this.surahs.forEach(surah => {
      let sName = surah.name.split("").filter(
        (char)=>{
          return (
            char.charCodeAt(0) < 1612 || char.charCodeAt(0) === 1649
          );
        }
      ).join("");
      this.SearchSurahs.push({
        name:sName,
        number:surah.number,
        key:surah.number,
      })
    });
    console.log(this.SearchSurahs);
  }
  SearchSurahs:any[]=[];
  surahs:Surah[] = [];
  displayedSurah:any = {};
  getSpecSurah(number:any){
    console.log(number);
    
    if(number >= 1 && number<= 114 ){
      this._QuranService.getSpecSurah(number).subscribe({
        next:res=>{
          this.displayedSurah = res.data;
        },
        error:err=>{
          console.log(err);
        }
      })
    }
    
  }
}



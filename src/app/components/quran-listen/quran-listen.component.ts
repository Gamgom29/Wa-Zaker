import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { QuranService } from 'src/app/quran.service';
import { Surah } from 'src/app/shared/interfaces/surah';

@Component({
  selector: 'app-quran-listen',
  templateUrl: './quran-listen.component.html',
  styleUrls: ['./quran-listen.component.scss']
})
export class QuranListenComponent {
  constructor(private _QuranService:QuranService ,private _Renderer2:Renderer2){}
  audioSrc:string = 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/1.mp3';
  ngOnInit(): void {
    this._QuranService.getAllSurah().subscribe({
      next:res=>{
        this.surahs = res.data;
        this.curSurah = res.data[0];
        console.log(res.data);
        console.log(this.curSurah);
        this.surahNameConvert();
      },
      error:err=>{
        console.log(err);
        
      }
    });
  }
  surahNameConvert(){
    this.surahs.map((item)=>{
      item.number = item.number -1 ;
    });
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
    
    console.log(this.surahs);
    
  }
  SearchSurahs:any[]=[];
  surahs:Surah[] = [];
  curSurah:Surah = {} as Surah;
  getSurahFromSearch(name:string){
    let indx = this.SearchSurahs.findIndex(item=> item.name == name);
    if(indx >= 0 && indx < 114 ){
      this.curSurah = this.surahs[indx];
      this.audioSrc = `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${indx+1}.mp3`;
    }
    console.log(indx);
  }
  getSpecSurah(number:any){
    console.log(this.curSurah);
    if(number >= 0 && number< 114 ){
      this.curSurah = this.surahs[number];
      this.audioSrc = `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${+number+1}.mp3`;
    }
    
  }
}

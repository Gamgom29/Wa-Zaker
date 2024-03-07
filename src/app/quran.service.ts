import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuranService {

  constructor(private _HttpClient:HttpClient) { }

  getAllSurah():Observable<any>{
    return this._HttpClient.get(`https://api.alquran.cloud/v1/surah`);
  }
  getSpecSurah(num:number):Observable<any> {
    return this._HttpClient.get(`https://api.alquran.cloud/v1/surah/${num}`);
  }
}

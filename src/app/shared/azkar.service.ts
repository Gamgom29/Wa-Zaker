import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzkarService {

  constructor(private _HttpClient:HttpClient) { }
  getAzkar():Observable<any>{
    return this._HttpClient.get(`./assets/jsons/azkar.json`);
  }
}

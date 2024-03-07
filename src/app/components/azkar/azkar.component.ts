import { Component, OnInit } from '@angular/core';
import { AzkarService } from 'src/app/shared/azkar.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-azkar',
  templateUrl: './azkar.component.html',
  styleUrls: ['./azkar.component.scss']
})
export class AzkarComponent implements OnInit {
    constructor(private _AzkarService:AzkarService){}
    azkar:any[] = [];
    curAzkar:any;
    azkarCount = 0 ;
    curZikr:any;
    ngOnInit(): void {
        this._AzkarService.getAzkar().subscribe({
          next:res=>{
            this.azkar = res;
            console.log(res);
            this.curAzkar = res[0];
            this.curZikr = this.curAzkar.data[0];
            console.log(this.curZikr);
            
            console.log(this.curAzkar);
          },
          error:err=>{
            console.log(err);
          }
        })
    }
    getZikr(num:number){
      console.log(num);
      if(num >= 0 && num < this.curAzkar.data.length){
        this.azkarCount = num;
        this.curZikr = this.curAzkar.data[num];
      }
    }
    changeAzkar(num:number){
      this.curAzkar = this.azkar[num];
      this.curZikr = this.curAzkar.data[0]; 
    }
}

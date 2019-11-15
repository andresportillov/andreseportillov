import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  URL:string;
  Key='d1ceb426d249f3fe3ccaa35fce5f7fda'


  constructor(private http: HttpClient) {
    
    this.URL=`https://api.openweathermap.org/data/2.5/weather?appid=${this.Key}&q=`



  }

  getclima(ciudad:string, paisCode:string){
     return this.http.get(`${this.URL}${ciudad},${paisCode}`)
  }



}

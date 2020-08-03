import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TestService {

 //private _url: string =  "https://bloomberg-market-and-financial-news.p.rapidapi.com/market/get-cross-currencies";
 private _url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

 

  getAPI(): Observable<any[]>{
  // let httpOptions = {
    //  headers: new HttpHeaders({
     //   'Content-Type': 'application/json',
      //  'x-rapidapi-key': 'b769b23626mshe8863c38d5f5aedp1c95a4jsn6b1148dd16f2',
      //  'x-rapidapi-host': 'bloomberg-market-and-financial-news.p.rapidapi.com',
    
     // })
      
   // };


     // let required =  "aed%2Caud%2Cbrl%2Ccad%2Cchf%2Ccnh%2Ccny%2Ccop%2Cczk%2Cdkk%2Ceur%2Cgbp%2Chkd%2Chuf%2Cidr%2Cils%2Cinr%2Cjpy%2Ckrw%2Cmxn%2Cmyr%2Cnok%2Cnzd%2Cphp%2Cpln%2Crub%2Csek%2Csgd%2Cthb%2Ctry%2Ctwd%2Cusd%2Czar"
    
    
  // return this.http.get<any[]>(this._url,httpOptions,).pipe(catchError(error => throwError(error)));
  return this.http.get<any[]>(this._url).pipe(catchError(error => throwError(error)));
  }
}

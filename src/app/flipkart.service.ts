import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {
  Allitem;
  public mydata= new Subject<any>()
  constructor(private data:Data) { }
  getData(result){
    this.mydata.next(result);
  }
}

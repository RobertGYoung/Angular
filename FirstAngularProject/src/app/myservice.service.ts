import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  
  showDate(){
    let today= new Date();
    return today;
  }
  constructor() { }
}

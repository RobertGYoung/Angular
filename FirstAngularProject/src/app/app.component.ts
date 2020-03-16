import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 //template:'<h4>{{title}}</h4>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deleted';
  today;

  constructor(private myservice: MyserviceService){}
  ngOnInit(){
    this.today = this.myservice.showDate()
  }
}
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Employee} from './models/employee';
@Component({
 selector: 'app-root',
 templateUrl:'./app.component.html'
// template: '<h1> Hello {{name}}</h1>'
})

export class AppComponent {
  name: string = 'Angular - Forms';
  languages=['English','French','Spanish','Other']
  model=new Employee('Rahb', 'Young',true,'Monthly','English');

  FirstNameUppercase(value:string){
    if(value.length>0){
        this.model.firstname = value.charAt(0).toUpperCase()+value.slice(1);
    }
    else{
      this.model.firstname=value;
    }
  }
}

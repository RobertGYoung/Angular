import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-component',
  //templateUrl: './team-component.component.html',
  template: `<div><span [innerHTML] = 'name' [style.border]='myAmazingStyle'></span></div><br><button (click)="onClick()">Scream</button>
  <br>
  <h1>What is your name?</h1><input [(ngModel)] = 'data1'/>
  <br> <h1>Hey {{data1}}!</h1>`,
  styleUrls: ['./team-component.component.css']
})
export class TeamComponentComponent implements OnInit {
  teamNames:string[]= ["Noel", "Kaleb", "Abul", "Justin", "George", "Yong", "Colin", "Ezra", "Vikki", "Brian", "Ryan", "Bryan", "Sonafer"];
  name:string="Rob";
  myAmazingStyle="red"
  data1: string="";
 onClick(){
    window.alert('AHHHHHHHHHHHHHHHHHHHHH!');

  }


  constructor() { }

  ngOnInit(): void {
  }

}

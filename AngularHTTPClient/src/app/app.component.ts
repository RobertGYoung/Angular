import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  template: ` {{title}}<hr/>
  <div *ngFor = "let bob of myUsers">
    {{bob.id}} {{bob.name}}
  
  </div>
  <h1>{{awesomeMessage}}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHTTPClient';
  awesomeMessage= 'Rob is amazing'
  myUsers;

  //Inject HttpClient into your component or service.

  constructor(private http: HttpClient){ }

  ngOnInit():void {

    //Make the HTTP request:
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data =>{

        console.log(data);
        this.myUsers=data;


      })

  }


}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { TeamComponentComponent } from './team-component/team-component.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { MySquarePipe } from './pipes/app.mysquare';
import { ConcatPipes } from './pipes/app.concatPipe';
import { MyserviceService} from './myservice.service';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    TeamComponentComponent,
    MySquarePipe,
    ConcatPipes
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

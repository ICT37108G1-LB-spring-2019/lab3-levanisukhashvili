import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';


  allData = [{
    name: 'ლევანი',
    surename: 'სუხაშვილი',
    personalNumber: '12345678910'
  }]
  getDatas(e){
    this.allData = e
  }

}


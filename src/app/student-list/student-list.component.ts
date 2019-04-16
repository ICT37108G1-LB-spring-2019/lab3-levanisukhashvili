import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  x = [
    {
      name: 'ლევანი1',
      surname: 'სუხაშვილი1',
      personalNumber: '01234567891'
    },
    {
      name: 'ლევანი2',
      surname: 'სუხაშვილი2',
      personalNumber: '12345678910'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

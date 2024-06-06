import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  showList: boolean = true;
  people = [
  {
    name: 'John',
    age: 34,
    hairColor: 'brown'
  },
  {
    name: 'Jane',
    age: 35,
    hairColor: 'blue'
  },{
    name: 'Bob',
    age: 50,
    hairColor: 'red'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}

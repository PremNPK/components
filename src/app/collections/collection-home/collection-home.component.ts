import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {
  data=[
    {name:'Prem',age:25,job:'Developer'},
    {name:'Surya',age:24,job:'Tester'},
    {name:'Hari',age:23,job:'Developer'}
  ];
  headers=[
    {key:'name',label:'Name'},
    {key:'age',label:'Age'},
    {key:'job',label:'Job'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

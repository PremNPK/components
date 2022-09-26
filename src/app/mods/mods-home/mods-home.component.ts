import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen=false;
  items=[
    { title:'Why is the sky blue?',content:'The sky is blue because due to scattering'},
    { title:'What does an orange taste like?',content:'An orange taste is delicious '},
    { title:'what color is the cat ',content:'The cat is an orange color'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.modalOpen=!this.modalOpen;
  }

}

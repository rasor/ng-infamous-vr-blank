import { Component, OnInit } from '@angular/core';
//import infamous from 'infamous'
declare var infamous: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NgInfamousVrBlank';

  constructor() {
    infamous.html.useDefaultNames();
  }

  // sample from https://infamous.io/docs/workflows.html
  ngOnInit(): void {
    const {Motor} = infamous.core
    var node: any;
    node = document.querySelector('i-node')
    node.rotation = ( x, y, z ) => [ x, ++y, z ] //   
  }
}

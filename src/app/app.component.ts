import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
//import infamous from 'infamous'
declare var infamous: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("inode") inode: ElementRef;
  title = 'NgInfamousVrBlank';

  constructor() {
    infamous.html.useDefaultNames();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // sample from https://infamous.io/docs/workflows.html
    const {Motor} = infamous.core
    let node: any;
    //node = document.querySelector('i-node')
    node = this.inode.nativeElement;
    console.log('Hello ' + node.tagName);
    node.rotation = ( x, y, z ) => [ x, ++y, z ] //   
  }
}

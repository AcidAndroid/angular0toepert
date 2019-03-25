import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.scss']
})
export class VirtualComponent implements OnInit {

@ViewChild(CdkVirtualScrollViewport) viewport:CdkVirtualScrollViewport
  public personas:any =[]


  constructor() {

    this.personas= Array(500000).fill(0)
    

   }

  ngOnInit() {

    console.log(this.personas);
    

  }

  irFinal(){

    this.viewport.scrollToIndex(this.personas.length)
  }

  irInicio(){

    this.viewport.scrollToIndex(0)
  }

  irMitad(){

    this.viewport.scrollToIndex(this.personas.length/2)
  }

}

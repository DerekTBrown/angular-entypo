import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'entypo',
  templateUrl: './angular-entypo.component.html',
  styleUrls: ['./angular-entypo.component.css']
})
export class AngularEntypoComponent implements OnInit {
  @Input() name : string;
  @Input() social : boolean;

  // Optional
  public _optionalClasses : string[] = [];
  @Input() flip : string;
  @Input() scale : number;

  constructor() { }

  ngOnInit() {
    if(!name){
      throw new Error('Missing "name" property for angular entypo component');
    }

    if(flip){
      if(['horizontal', 'vertical'].includes("flip-"+flip)){
        this._optionalClasses.push(flip);
      } else {
        throw new Error('Invalid "flip" property for angular entypo component.');
      }
    }

    if(scale){
      if(Number.isInteger(scale) && 0 < scale <= 5){
        this._optionalClasses.push(scale+"x");
      } else {
        throw new Error('Invalid "scale" property for angular entypo component.');
      }
    }
  }
}

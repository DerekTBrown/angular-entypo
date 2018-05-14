import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId : module.id,
  selector: 'entypo',
  template: `
  <i class="entypo {{name}}" [ngClass]="optionalClasses"></i>
  `,
  styleUrls: ['angular-entypo.component.css']
})
export class AngularEntypoComponent implements OnInit {
  @Input() name : string;

  // Optional
  public _optionalClasses : string[] = [];
  @Input() flip : string;
  @Input() scale : string;

  constructor() { }

  ngOnInit() {
    if(!this.name){
      throw new Error('Missing "name" property for angular entypo component');
    }

    if(this.flip){
      if(['horizontal', 'vertical'].indexOf(this.flip) >= 0){
        this._optionalClasses.push("flip-"+this.flip);
      } else {
        throw new Error('Invalid "flip" property for angular entypo component.');
      }
    }

    if(this.scale){
      let scaleInt : number = <number>parseInt(this.scale);

      if(Number.isInteger(scaleInt) && 0 < scaleInt && scaleInt <= 5){
        this._optionalClasses.push(scaleInt+"x");
      } else {
        throw new Error('Invalid "scale" property for angular entypo component.');
      }
    }
  }
}

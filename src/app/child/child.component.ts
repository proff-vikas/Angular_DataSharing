import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ImportsNotUsedAsValues } from 'typescript';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
@Input() Fruits = "apple";
@Input() addDatas = ['apple'];
@Output() newAnimalsEvent = new EventEmitter<string>();

currentFruits = "Apple"

  ngOnInit(): void {
  }
  addAnimals(value: string){
  this.newAnimalsEvent.emit(value);
 }

 addData(newData: string){
  this.addDatas.push(newData);
 }
}

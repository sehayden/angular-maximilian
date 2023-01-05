import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['../die/die.component.css']
})
export class DiceComponent {
  elements = []
  onElementCreated(ele: string){
    this.elements.push(ele)
  }
}

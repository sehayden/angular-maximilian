import { Component } from '@angular/core';
import { LogginService } from 'src/app/services/logging/logging.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['../die/die.component.css'],
  providers: [LogginService]
})
export class DiceComponent {
  constructor(private loggingService: LogginService){
    setInterval(() => {
      this.turn = !this.turn
      this.loggingService.logStatusChange(this.turn ? 'your turn' : 'opponent turn')
    }, 30000)
  }
  elements = []
  turn = true
  onElementCreated(ele: string){
    this.elements.push(ele)
  }
}

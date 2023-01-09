import { Component, EventEmitter, Output, ViewChild, OnInit } from '@angular/core';
import { LogginService } from 'src/app/services/logging/logging.service';

@Component({
  selector: 'app-roller',
  templateUrl: './roller.component.html',
  styleUrls: ['./roller.component.css'],
  providers: [LogginService]
})
export class RollerComponent{
  @Output() elementCreated = new EventEmitter<string>();
  myMap = {
    1: 'anemo', 2: 'geo', 3: 'electro', 4: 'cryo', 5: 'pyro', 6: 'hydro', 7: 'dendro', 8: 'default'
  }
  constructor(private loggingService: LogginService){

  }
  onElementCreated(){
    let rand = Math.floor(Math.random() * 9)
    this.elementCreated.emit(this.myMap[rand])
    this.loggingService.logStatusChange(this.myMap[rand])
  }
}

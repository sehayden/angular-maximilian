import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  @Input()
  player: {name: string, status: string} = {name: 'guest', status: 'beginner'}
}

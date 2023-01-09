import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { LogginService } from 'src/app/services/logging/logging.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['../die/die.component.css'],
  providers: [LogginService, AccountService]
})
export class DiceComponent implements OnInit{
  constructor(private loggingService: LogginService, private accountService: AccountService){
    setInterval(() => {
      this.turn = !this.turn
      this.loggingService.logStatusChange(this.turn ? 'your turn' : 'opponent turn')
    }, 30000)
  }
  ngOnInit(): void {
    this.accounts = this.accountService.accounts
  }
  index: number
  updatedStatus: string
  turn = true
  elements = []
  onElementCreated(ele: string){
    this.elements.push(ele)
  }
  onUpdatePlayer() {
    this.accountService.updateStatus(this.index, this.updatedStatus)
  }
  accounts: {name: string, status: string}[] = []

}

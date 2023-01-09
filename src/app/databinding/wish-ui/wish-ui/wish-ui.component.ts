import { Component } from '@angular/core';
import { WishService } from 'src/app/services/wish/wish.service';

@Component({
  selector: 'app-wish-ui',
  templateUrl: './wish-ui.component.html',
  styleUrls: ['./wish-ui.component.css']
})
export class WishUiComponent {
  result = '*'
  constructor(private wishService: WishService){
    
  }
  wish(){
    if (this.wishService.remainingWish > 0){
      this.result = '*'
      setTimeout(() => {
        this.result = this.result.repeat(this.wishService.wishNow())
      }, 2000)
    } else {
      this.result = '-'
    }
    
  }
}

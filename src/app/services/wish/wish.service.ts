import { Injectable } from "@angular/core";
import { LogginService } from "../logging/logging.service";

@Injectable()
export class WishService {
    remainingWish: number = 3
    wishNow () {
        if (this.remainingWish > 0){
            this.remainingWish -= 1
            this.logginService.logStatusChange('remaining wish ' + this.remainingWish)
            return Math.floor( Math.random() * 3 ) + 3;
        } else {
            return this.remainingWish;
        }
    }
    constructor(private logginService: LogginService){}
}
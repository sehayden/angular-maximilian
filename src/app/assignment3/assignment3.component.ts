import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  isShow = false;
  timeStamp = [];
  handleToggle(){
    this.isShow = !this.isShow;
    this.timeStamp.push(new Date())
    console.log(this.timeStamp)
  }


}

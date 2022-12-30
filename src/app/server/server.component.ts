import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit {
    id = 10;
    status: string = 'offline';
    allowNewServer = false;
    createServerStatus = 'No server was created.'
    i = 1;
    element = 'anemo';
    elements = []
    color = 'turquoise';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true
        }, 2000)
    }

    ngOnInit(): void {
        
    }

    getServerStatus(){
        return this.status
    }

    onCreateServer() {
        this.createServerStatus = 'Server was created.'
    }

    addToEle() {
        this.elements.push(this.element);
        console.log(this.elements)
    }
    genRandomElement() {
        this.i = Math.floor( Math.random() * 8 );
        switch(this.i){
            case 1: 
                this.element = 'anemo';
                this.color = 'turquoise'
                break;
            case 2:
                this.element = 'cryo';
                this.color = 'aqua'
                break;
            case 3:
                this.element = 'geo';
                this.color = 'yellow';
                break;
            case 4:
                this.element = 'pyro';
                this.color = 'red'
                break;
            case 5:
                this.element = 'hydro';
                this.color = 'blue';
                break;
            case 6:
                this.element = 'dendro';
                this.color = 'green';
                break;
            default:
                this.element = 'electro';
                this.color = 'purple';
                break
        }
    }

}
import { Component } from "@angular/core";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shoppingList.component.html'
})

export class ShoppingListComponent {
    list = [
        {
            item: 'AlHaitham',
            count: 3,
            price: 10
        },
        {
            item: 'Cyno',
            count: 2,
            price: 0
        },
        {
            item: 'Nahida',
            count: 0,
            price: 7500
        },
        {
            item: 'Tignari',
            count: 6,
            price: 6000
        },

    ]
}
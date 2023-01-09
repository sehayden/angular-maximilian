import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { HeaderComponent } from './project/header/header.component';
import { ShoppingListComponent } from './project/shoppingList/shoppingList.component';
import { DieComponent } from './databinding/die/die.component';
import { DiceComponent } from './databinding/dice/dice.component';
import { RollerComponent } from './databinding/roller/roller.component';
import { BasicHighlightDirective } from './directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directive/unless/unless.directive';
import { PlayersComponent } from './databinding/players/players/players.component';
import { WishService } from './services/wish/wish.service';
import { WishUiComponent } from './databinding/wish-ui/wish-ui/wish-ui.component';
import { LogginService } from './services/logging/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Assignment3Component,
    HeaderComponent,
    ShoppingListComponent,
    DieComponent,
    DiceComponent,
    RollerComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    PlayersComponent,
    WishUiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [WishService, LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

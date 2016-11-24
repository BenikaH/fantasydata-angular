import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } 	 from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { OptimizedComponent }	from './optimized/optimized.component';
import { RosterComponent }		from './roster/roster.component';
import { PlayersService } from './players.service';
import { PlayerComponent } from './player/player.component';
//import { AutocompleteComponent } from './autocomplete/autocomplete.component'

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent, DashboardComponent, OptimizedComponent, RosterComponent, PlayerComponent ],
  providers:    [ PlayersService ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

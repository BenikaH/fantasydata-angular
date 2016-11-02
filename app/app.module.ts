import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } 	 from '@angular/forms';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { OptimizedComponent }	from './optimized/optimized.component';
import { RosterComponent }		from './roster/roster.component';
import { PlayersService } from './players.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, DashboardComponent, OptimizedComponent, RosterComponent ],
  providers:    [ PlayersService ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

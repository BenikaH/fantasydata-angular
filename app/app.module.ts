import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } 	 from '@angular/forms';

import { AppComponent }   from './app.component';
import { OptimizedComponent }	from './optimized/optimized.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, OptimizedComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

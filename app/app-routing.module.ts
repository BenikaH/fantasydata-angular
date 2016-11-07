import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { OptimizedComponent }  from './optimized/optimized.component';
import { RosterComponent }		from './roster/roster.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'optimized', component: OptimizedComponent },
  { path: 'roster',     component: RosterComponent }
  //{ path: 'autocomplete',	component: AutocompleteComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
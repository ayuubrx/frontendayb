import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationListComponent } from './components/formations/formation-list.component';
import { FormationDetailComponent } from './components/formations/formation-detail.component';
import {RapportListComponent} from './components/rapport/rapport-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'formations', pathMatch: 'full' },
  { path: 'formations', component: FormationListComponent },
  { path: 'formations/:id', component: FormationDetailComponent },
  { path: 'rapports', component: RapportListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

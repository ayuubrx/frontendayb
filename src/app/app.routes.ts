import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DefaultLayoutComponent } from './layout/default-layout.component';

import { FormationListComponent } from './components/formations/formation-list.component';

import { RapportListComponent } from './components/rapport/rapport-list.component';
import { ResultatListComponent } from './components/resultat/resultat-list.component';
import { RoleListComponent } from './components/role/role-list.component';
import {ProfilComponent} from './components/profil/profil.component';
import {LoginComponent} from './components/auth/login/login.component';
export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {path: '',component: HomeComponent },// page d'accueil en solo
      { path: 'formations', component: FormationListComponent },
      { path: 'rapports', component: RapportListComponent },
      { path: 'resultats', component: ResultatListComponent },
      { path: 'roles', component: RoleListComponent },
      { path: 'profil', component: ProfilComponent }, // ✅ ici
      { path: 'auth', component: LoginComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

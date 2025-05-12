import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout.component';
import { HomeComponent } from './home/home.component';
import { FormationListComponent } from './components/formations/formation-list.component';
import { RapportEtuListComponent } from './components/rapport/rapport-etu-list.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LoginComponent } from './components/auth/login/login.component';
import { QuizListComponent } from './components/quiz/quiz-list.component';
import { QuizDetailComponent } from './components/quiz/quiz-detail.component';
import {ResultatListComponent} from './components/resultat/resultat-list.component';
import {ResultatDetailComponent} from './components/resultat/resultat-detail.component';
import {SignupComponent} from './components/auth/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'formations', component: FormationListComponent },
      { path: 'rapports', component: RapportEtuListComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'auth', component: LoginComponent },
      { path: 'quizzes', component: QuizListComponent },
      { path: 'quizzes/:id', component: QuizDetailComponent },
      { path: 'resultats', component: ResultatListComponent },
      { path: 'resultats/:id', component: ResultatDetailComponent },
      { path: 'signup', component: SignupComponent }


    ]
  },
  { path: '**', redirectTo: '' }
];

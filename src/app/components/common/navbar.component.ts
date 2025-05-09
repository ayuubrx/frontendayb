import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="navbar">
      <div class="navbar-container">
        <div class="left-section">
          <div class="logo">E-Learn</div>
        </div>
        <div class="right-section">
          <nav class="nav-links">
            <a routerLink="/" routerLinkActive="active">Accueil</a>
            <a routerLink="/formations" routerLinkActive="active">Formations</a>
            <a routerLink="/quizzes" routerLinkActive="active">Quizzes</a>
            <a routerLink="/rapports" routerLinkActive="active">Rapports Étudiants</a>
            <a routerLink="/resultats" routerLinkActive="active">Résultats</a>
            <a routerLink="/roles" routerLinkActive="active">Rôles</a>
            <a routerLink="/profil" routerLinkActive="active">Profil</a>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .navbar {
      background-color: #2d80f4;
      color: white;
      padding: 1rem 2rem;
    }

    .navbar-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      max-width: 1200px;
      margin: 0 auto;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      white-space: nowrap; /* Garde E-Learn sur une ligne */
      color: white;
      margin-right: 2rem;
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }


  `]
})
export class NavbarComponent {}

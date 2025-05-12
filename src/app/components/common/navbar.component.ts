import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <header class="navbar">
      <div class="navbar-container">
        <div class="left-section">
          <a routerLink="/" class="logo">E-Learn</a>
        </div>

        <!-- ✅ Si l'utilisateur n'est pas sur / ou /login ou /signup -->
        <div class="right-section" *ngIf="!isMinimalRoute()">
          <nav class="nav-links">
            <a routerLink="/formations" routerLinkActive="active">Formations</a>
            <a routerLink="/quizzes" routerLinkActive="active">Quizzes</a>
            <a routerLink="/rapports" routerLinkActive="active">Rapports Étudiants</a>
            <a routerLink="/resultats" routerLinkActive="active">Résultats</a>
            <a routerLink="/profil" routerLinkActive="active">Profil</a>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .navbar {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      color: white;
      padding: 1rem 2rem;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
      white-space: nowrap;
      background: linear-gradient(to right, #ff4d88, #00cfff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      margin-right: 2rem;
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .nav-links a {
      color: #b0b0b0;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: #ff4d88;
    }
  `]
})
export class NavbarComponent {
  constructor(public router: Router) {}
  isMinimalRoute(): boolean {
    return ['/', '/auth', '/signup'].includes(this.router.url);

  }
}

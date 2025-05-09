import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="footer-bar">
      <div class="footer-content">
        <p>&copy; 2025 E-Learn. Tous droits réservés.</p>
        <p>Conçu avec ❤️ pour l'éducation numérique.</p>
        <div class="footer-links">
          <a routerLink="/formations">Formations</a> |
          <a routerLink="/quizzes">Quizzes</a> |
          <a routerLink="/rapports">Rapports</a> |
          <a routerLink="/resultats">Résultats</a> |
          <a routerLink="/roles">Rôles</a> |
          <a routerLink="/profil">Profil</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer-bar {
      background-color: #2d80f4;
      color: white;
      text-align: center;
      padding: 1rem 0;
    }

    .footer-links a {
      color: white;
      margin: 0 0.5rem;
      text-decoration: none;
      font-weight: 500;
    }

    .footer-links a:hover {
      text-decoration: underline;
    }

  `]
})
export class FooterComponent {}

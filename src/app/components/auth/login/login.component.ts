import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  slogans: string[] = [
    'Idea to <span class="gradient-text">YouTube</span> video',
    'Idea to <span class="gradient-text">Slideshow</span> video',
    'Idea to <span class="gradient-text">Social Ad</span> video'
  ];
  currentSloganIndex: number = 0;

  constructor(private router: Router) {}

  get currentSlogan(): string {
    return this.slogans[this.currentSloganIndex];
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentSloganIndex = (this.currentSloganIndex + 1) % this.slogans.length;
    }, 3000);
  }

  onLogin() {
    // Authentification simulée — à remplacer avec un vrai service
    localStorage.setItem('token', 'true');
    this.router.navigate(['/formations']);
  }
}

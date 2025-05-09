import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';

// @ts-ignore
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None  // <<< AJOUT ICI

})
export class LoginComponent implements OnInit {
  slogans: string[] = [
    'Idea to <span class="gradient-text">YouTube</span> video',
    'Idea to <span class="gradient-text">Slideshow</span> video',
    'Idea to <span class="gradient-text">Social Ad</span> video'
  ];
  currentSloganIndex: number = 0;

  get currentSlogan(): string {
    return this.slogans[this.currentSloganIndex];
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentSloganIndex = (this.currentSloganIndex + 1) % this.slogans.length;
    }, 3000);
  }
}

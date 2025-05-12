import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  slogans: string[] = [
    'Learn with <span class="gradient-text">freedom</span>',
    'Build your <span class="gradient-text">future</span>',
    'Unlock your <span class="gradient-text">potential</span>'
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

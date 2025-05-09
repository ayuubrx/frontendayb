import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resultat-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resultat-list.component.html',
  styleUrls: ['./resultat-list.component.css']
})
export class ResultatListComponent implements OnInit {
  resultats = [
    { etudiant: 'Ayoub B.', quiz: 'Quiz Angular', note: 17, sur: 20 },
    { etudiant: 'Salma R.', quiz: 'Quiz Node.js', note: 14.5, sur: 20 }
  ];

  ngOnInit(): void {}
}

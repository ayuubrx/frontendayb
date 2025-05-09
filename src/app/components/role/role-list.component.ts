import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-role-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles = [
    { nom: 'Administrateur', description: 'Accès complet au système' },
    { nom: 'Formateur', description: 'Gère les formations et les quiz' },
    { nom: 'Étudiant', description: 'Accède aux cours et répond aux quiz' }
  ];

  ngOnInit(): void {}
}

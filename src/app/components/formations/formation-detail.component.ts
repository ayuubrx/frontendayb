// src/app/components/formations/formation-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../models/formation.model';

@Component({
  selector: 'app-formation-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {
  formation!: Formation;

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formationService.getFormation(id)
      .subscribe(data => {
        this.formation = data;

        // Pour test local : valeur par défaut si pas de vidéo
        if (!this.formation.videoUrl) {
          this.formation.videoUrl = 'formation2.mp4'; // à condition que ce fichier existe
        }
      });
  }
}

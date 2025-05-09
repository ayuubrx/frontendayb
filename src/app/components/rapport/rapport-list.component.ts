import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ nécessaires pour ngIf, ngFor, ngClass, date
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-rapport-list',
  standalone: true,
  imports: [CommonModule], // ✅ ajoute ça ici
  templateUrl: './rapport-list.component.html',
  styleUrls: ['./rapport-list.component.css']
})
export class RapportListComponent implements OnInit {
  rapports: any[] = [];

  allRapports = [
    { etudiant: 'Ayoub Baroukh', module: 'Angular', score: 85, date: new Date() },
    { etudiant: 'Salma R.', module: 'Node.js', score: 72, date: new Date() },
    { etudiant: 'Ayoub Baroukh', module: 'TypeScript', score: 91, date: new Date() }
  ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const user = this.userService.getUser();
    this.rapports = this.allRapports.filter(r =>
      r.etudiant.trim().toLowerCase() === user.fullName.trim().toLowerCase()
    );
  }
}

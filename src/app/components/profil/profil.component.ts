import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  @ViewChild('photoInput') photoInput!: ElementRef<HTMLInputElement>;

  user = {
    firstName: 'Ayoub',
    lastName: 'Baroukh',
    email: 'ayoub@example.com',
    initials: 'A',
    profileVisible: true,
    shareLink: 'https://elearn.com/profil/ayoub',
    photo: '',
    skills: ['Angular', 'TypeScript', 'UI/UX Design']  // ← Exemple
  };

  showVisibilityModal = false;
  HTMLInputElement: any;
  checked: any;
  as: any;

  triggerPhotoUpload(): void {
    this.photoInput.nativeElement.click();
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.photo = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  toggleVisibility(): void {
    this.showVisibilityModal = true;
  }

  closeModal(): void {
    this.showVisibilityModal = false;
  }
  onCheckboxChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.user.profileVisible = input.checked;
  }
  addSkill(): void {
    const newSkill = prompt('Entrez une nouvelle compétence :');
    if (newSkill) {
      this.user.skills.push(newSkill.trim());
    }
  }


}

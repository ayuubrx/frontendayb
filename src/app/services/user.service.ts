// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUser = {
    firstName: 'Ayoub',
    lastName: 'Baroukh',
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };

  getUser() {
    return this.currentUser;
  }
}

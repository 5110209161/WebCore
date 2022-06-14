import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private userSubject = new Subject<UserModel>();  // message object to pass user profile

  constructor() { }

  /**
   * Send message of logon user
   * @param message 
   */
  sendUserMessage(message: UserModel) {
    this.userSubject.next(message);
  }

  /**
   * Get message of logon user
   * @returns 
   */
  getUserMessage(): Observable<UserModel> {
    return this.userSubject.asObservable();
  }

  /**
   * Clear message
   */
  clearMessage() {
    this.userSubject.next(undefined);
  }
}

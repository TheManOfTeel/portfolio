import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private encodedEmail = 'dGhlbWFub2Z0ZWVsQGljbG91ZC5jb20=';
  private encodedEmailSubject = 'UG9ydGZvbGlvIElucXVpcnk=';

  constructor() { }

  mailTo() {
    window.open(`mailto:${atob(this.encodedEmail)}?subject=${atob(this.encodedEmailSubject)}`, '_self');
  }
}

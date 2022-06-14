import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/common/message.service';
import { UserModel } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserModel;  // user account
  rememberMe: boolean;
  errorMsg = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.user = <UserModel>{ account: 'admin', password: 'admin' };
  }

  ngOnInit(): void {
  }

  /**
   * Login function to check user account and navigate
   */
  logIn() {
    let existing = this.loginService.checkUserAccount(this.user);
    if (existing) {
      this.router.navigate(['dashboard']);
      this.messageService.sendUserMessage(this.user);
    } else {
      this.errorMsg = 'Invalid account or password!';
    }
  }

}

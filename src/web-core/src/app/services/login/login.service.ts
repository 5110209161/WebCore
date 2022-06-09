import { Injectable } from "@angular/core";
import { UserModel } from "src/app/models/user.model";

const ADMIN_USER: UserModel = {
  account: 'admin',
  password: 'admin'
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userList: Array<UserModel>;  // user list
  adminUser: UserModel;  // administrator

  constructor() {
    this.adminUser = ADMIN_USER;
    this.userList = new Array<UserModel>(this.adminUser);
  }

  /**
   * Check user account, return if user exists in user list
   * @param user 
   */
  checkUserAccount(user: UserModel): boolean {
    let existing = this.userList.find(x => x.account === user.account && x.password === user.password);
    if (existing === undefined || existing === null)
      return false;
    return true;
  }
}
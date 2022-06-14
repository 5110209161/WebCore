import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'src/app/services/common/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  newsActive: boolean = true;
  newsKey = 'primenews';

  menuActive: boolean;

  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    // get logon user profile
    this.messageService.getUserMessage().subscribe(user => console.log(user));

    this.primengConfig.ripple = true;
  }

  hideNews() {
    this.newsActive = false;
    const now = new Date();
    const item = {
        value: false,
        expiry: now.getTime() + 604800000,
    }
    localStorage.setItem(this.newsKey, JSON.stringify(item));
  }

  onMenuButtonClick() {
    this.menuActive = true;
    this.addClass(document.body, 'blocked-scroll');
  }

  onMaskClick() {
    this.hideMenu();
  }

  hideMenu() {
    this.menuActive = false;
    this.removeClass(document.body, 'blocked-scroll');
  }

  addClass(element: any, className: string) {
    if (element.classList)
      element.classList.add(className);
    else
      element.className += ' ' + className;
  }

  removeClass(element: any, className: string) {
    if (element.classList)
      element.classList.remove(className);
    else
      element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

}

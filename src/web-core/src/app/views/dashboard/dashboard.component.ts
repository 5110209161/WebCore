import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/common/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    // get logon user profile
    this.messageService.getUserMessage().subscribe(user => console.log(user));
  }

}

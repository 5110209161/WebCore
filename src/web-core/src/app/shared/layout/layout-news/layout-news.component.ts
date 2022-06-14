import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-layout-news',
  templateUrl: './layout-news.component.html',
  styleUrls: ['./layout-news.component.scss']
})
export class LayoutNewsComponent implements OnInit {

  @Input() active: boolean;

  @Output() onNewsHide: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  hideNews(event: Event) {
    this.onNewsHide.emit();
    event.preventDefault();
  }

  redirect() {
    window.open('https://www.primefaces.org/primeblocks-ng"', '_blank');
  }

}

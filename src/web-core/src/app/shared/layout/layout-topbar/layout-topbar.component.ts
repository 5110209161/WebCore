import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/domain/app-config';
import { AppConfigService } from 'src/app/services/common/app-config.service';

@Component({
  selector: 'app-layout-topbar',
  templateUrl: './layout-topbar.component.html',
  styleUrls: ['./layout-topbar.component.scss'],
  animations: [
    trigger('overlayMenuAnimation', [
      transition(':enter', [
          style({opacity: 0, transform: 'scaleY(0.8)'}),
          animate('.12s cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 1, transform: '*' })),
        ]),
        transition(':leave', [
          animate('.1s linear', style({ opacity: 0 }))
        ])
  ])
  ]
})
export class LayoutTopbarComponent implements OnInit {

  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();

  @ViewChild('topbarMenu') topbarMenu: ElementRef;

  activeMenuIndex: number;

  outsideClickListener: any;

  config: AppConfig;

  subscription: Subscription;

  logoMap = {
      'bootstrap4-light-blue': 'bootstrap4-light-blue.svg',
      'bootstrap4-light-purple': 'bootstrap4-light-purple.svg',
      'bootstrap4-dark-blue': 'bootstrap4-dark-blue.svg',
      'bootstrap4-dark-purple': 'bootstrap4-dark-purple.svg',
      'md-light-indigo': 'md-light-indigo.svg',
      'md-light-deeppurple': 'md-light-deeppurple.svg',
      'md-dark-indigo': 'md-dark-indigo.svg',
      'md-dark-deeppurple': 'md-dark-deeppurple.svg',
      'mdc-light-indigo': 'md-light-indigo.svg',
      'mdc-light-deeppurple': 'md-light-deeppurple.svg',
      'mdc-dark-indigo': 'md-dark-indigo.svg',
      'mdc-dark-deeppurple': 'md-dark-deeppurple.svg',
      'lara-light-indigo': 'lara-light-indigo.png',
      'lara-light-purple': 'lara-light-purple.png',
      'lara-light-blue': 'lara-light-blue.png',
      'lara-light-teal': 'lara-light-teal.png',
      'lara-dark-indigo': 'lara-dark-indigo.png',
      'lara-dark-purple': 'lara-dark-purple.png',
      'lara-dark-blue': 'lara-dark-blue.png',
      'lara-dark-teal': 'lara-dark-teal.png',
      'saga-blue': 'saga-blue.png',
      'saga-green': 'saga-green.png',
      'saga-orange': 'saga-orange.png',
      'saga-purple': 'saga-purple.png',
      'vela-blue': 'vela-blue.png',
      'vela-green': 'vela-green.png',
      'vela-orange': 'vela-orange.png',
      'vela-purple': 'vela-purple.png',
      'arya-blue': 'arya-blue.png',
      'arya-green': 'arya-green.png',
      'arya-orange': 'arya-orange.png',
      'arya-purple': 'arya-purple.png',
      'nova': 'nova.png',
      'nova-alt': 'nova-alt.png',
      'nova-accent': 'nova-accent.png',
      'nova-vue': 'nova-vue.png',
      'luna-blue': 'luna-blue.png',
      'luna-green': 'luna-green.png',
      'luna-pink': 'luna-pink.png',
      'luna-amber': 'luna-amber.png',
      'rhea': 'rhea.png',
      'fluent-light': 'fluent-light.png',
      'soho-light': 'soho-light.png',
      'soho-dark': 'soho-dark.png',
      'viva-light': 'viva-light.svg',
      'viva-dark': 'viva-dark.svg',
      'mira': 'mira.jpg',
      'nano': 'nano.jpg',
      'tailwind-light': 'tailwind-light.png'
  };

  constructor(private configService: AppConfigService, private router: Router) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeMenuIndex = null;
       }
    });
  }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => this.config = config);
  }

  onMenuButtonClick(event: Event): void {
    this.menuButtonClick.emit();
    event.preventDefault();
  }

  /** change theme of the system  */
  changeTheme(event: Event, theme: string, dark: boolean): void {
    let themeElement = document.getElementById('theme-link');
    themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.config.theme, theme));
    this.configService.updateConfig({ ...this.config, ...{theme, dark} });
    this.activeMenuIndex = null;
    event.preventDefault;
  }

  bindOutsideClickListener(): void {
    if (!this.outsideClickListener) {
      this.outsideClickListener = (event) => {
        if (this.isOutsideTopbarMenuClicked(event)) {
          this.activeMenuIndex =  null;
        }
      };

      document.addEventListener('click', this.outsideClickListener);
    }
  }

  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      document.removeEventListener('click', this.outsideClickListener);
      this.outsideClickListener = null;
    }
  }

  /** toggle menu items */
  toggleMenu(event: Event, index: number): void {
    this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
  }

  isOutsideTopbarMenuClicked(event): boolean { 
    return !(this.topbarMenu.nativeElement.isSameNode(event.target) || this.topbarMenu.nativeElement.contains(event.target));
   }

  onOverlayMenuEnter(event: AnimationEvent) {
    switch(event.toState) {
        case 'visible':
            this.bindOutsideClickListener();
        break;

        case 'void':
            this.unbindOutsideClickListener();
        break;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNewsComponent } from './layout-news.component';

describe('LayoutNewsComponent', () => {
  let component: LayoutNewsComponent;
  let fixture: ComponentFixture<LayoutNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

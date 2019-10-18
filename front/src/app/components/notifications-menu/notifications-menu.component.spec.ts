import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsMenuComponent } from './notifications-menu.component';

describe('NotificationsMenuComponent', () => {
  let component: NotificationsMenuComponent;
  let fixture: ComponentFixture<NotificationsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

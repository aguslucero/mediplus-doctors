import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryHeaderComponent } from './diary-header.component';

describe('DiaryHeaderComponent', () => {
  let component: DiaryHeaderComponent;
  let fixture: ComponentFixture<DiaryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

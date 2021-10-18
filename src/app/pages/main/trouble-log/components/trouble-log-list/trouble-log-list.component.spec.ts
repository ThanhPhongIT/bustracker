import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleLogListComponent } from './trouble-log-list.component';

describe('TroubleLogListComponent', () => {
  let component: TroubleLogListComponent;
  let fixture: ComponentFixture<TroubleLogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroubleLogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

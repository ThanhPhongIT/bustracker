import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleLogDetailComponent } from './trouble-log-detail.component';

describe('TroubleLogDetailComponent', () => {
  let component: TroubleLogDetailComponent;
  let fixture: ComponentFixture<TroubleLogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroubleLogDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleLogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

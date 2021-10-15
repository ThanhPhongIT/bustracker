import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberHomeClassComponent } from './member-home-class.component';

describe('MemberHomeClassComponent', () => {
  let component: MemberHomeClassComponent;
  let fixture: ComponentFixture<MemberHomeClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberHomeClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberHomeClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

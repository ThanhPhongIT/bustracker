import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberHomeGroupComponent } from './member-home-group.component';

describe('MemberHomeGroupComponent', () => {
  let component: MemberHomeGroupComponent;
  let fixture: ComponentFixture<MemberHomeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberHomeGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberHomeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBusHomeComponent } from './list-bus-home.component';

describe('ListBusHomeComponent', () => {
  let component: ListBusHomeComponent;
  let fixture: ComponentFixture<ListBusHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBusHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBusHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

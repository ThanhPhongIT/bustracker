import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBusLogComponent } from './list-bus-log.component';

describe('ListBusLogComponent', () => {
  let component: ListBusLogComponent;
  let fixture: ComponentFixture<ListBusLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBusLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBusLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

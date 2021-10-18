import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBusLogComponent } from './detail-bus-log.component';

describe('DetailBusLogComponent', () => {
  let component: DetailBusLogComponent;
  let fixture: ComponentFixture<DetailBusLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBusLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBusLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

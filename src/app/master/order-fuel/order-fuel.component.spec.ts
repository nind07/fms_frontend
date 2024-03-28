import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFuelComponent } from './order-fuel.component';

describe('OrderFuelComponent', () => {
  let component: OrderFuelComponent;
  let fixture: ComponentFixture<OrderFuelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderFuelComponent]
    });
    fixture = TestBed.createComponent(OrderFuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

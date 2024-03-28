import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFuelComponent } from './manage-fuel.component';

describe('ManageFuelComponent', () => {
  let component: ManageFuelComponent;
  let fixture: ComponentFixture<ManageFuelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageFuelComponent]
    });
    fixture = TestBed.createComponent(ManageFuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

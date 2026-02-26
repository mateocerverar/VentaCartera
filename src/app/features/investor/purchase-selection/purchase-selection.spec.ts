import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSelection } from './purchase-selection';

describe('PurchaseSelection', () => {
  let component: PurchaseSelection;
  let fixture: ComponentFixture<PurchaseSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseSelection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseSelection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

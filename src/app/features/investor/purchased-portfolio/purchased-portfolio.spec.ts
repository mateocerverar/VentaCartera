import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedPortfolio } from './purchased-portfolio';

describe('PurchasedPortfolio', () => {
  let component: PurchasedPortfolio;
  let fixture: ComponentFixture<PurchasedPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasedPortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasedPortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

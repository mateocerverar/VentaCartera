import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditUpload } from './credit-upload';

describe('CreditUpload', () => {
  let component: CreditUpload;
  let fixture: ComponentFixture<CreditUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

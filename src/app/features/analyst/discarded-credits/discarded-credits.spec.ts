import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscardedCredits } from './discarded-credits';

describe('DiscardedCredits', () => {
  let component: DiscardedCredits;
  let fixture: ComponentFixture<DiscardedCredits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscardedCredits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscardedCredits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

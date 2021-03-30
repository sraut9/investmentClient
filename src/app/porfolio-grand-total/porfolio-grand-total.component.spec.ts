import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioGrandTotalComponent } from './porfolio-grand-total.component';

describe('PorfolioGrandTotalComponent', () => {
  let component: PorfolioGrandTotalComponent;
  let fixture: ComponentFixture<PorfolioGrandTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorfolioGrandTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfolioGrandTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

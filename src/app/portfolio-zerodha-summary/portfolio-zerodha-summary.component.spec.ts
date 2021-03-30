import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioZerodhaSummaryComponent } from './portfolio-zerodha-summary.component';

describe('PortfolioZerodhaSummaryComponent', () => {
  let component: PortfolioZerodhaSummaryComponent;
  let fixture: ComponentFixture<PortfolioZerodhaSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioZerodhaSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioZerodhaSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

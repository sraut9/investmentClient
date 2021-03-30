import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSidvinSummaryComponent } from './portfolio-sidvin-summary.component';

describe('PortfolioSidvinSummaryComponent', () => {
  let component: PortfolioSidvinSummaryComponent;
  let fixture: ComponentFixture<PortfolioSidvinSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSidvinSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSidvinSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

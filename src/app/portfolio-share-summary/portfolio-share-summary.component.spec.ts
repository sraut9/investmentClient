import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioShareSummaryComponent } from './portfolio-share-summary.component';

describe('PortfolioShareSummaryComponent', () => {
  let component: PortfolioShareSummaryComponent;
  let fixture: ComponentFixture<PortfolioShareSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioShareSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioShareSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

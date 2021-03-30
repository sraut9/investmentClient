import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSharekhanSummaryComponent } from './portfolio-sharekhan-summary.component';

describe('PortfolioSharekhanSummaryComponent', () => {
  let component: PortfolioSharekhanSummaryComponent;
  let fixture: ComponentFixture<PortfolioSharekhanSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSharekhanSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSharekhanSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

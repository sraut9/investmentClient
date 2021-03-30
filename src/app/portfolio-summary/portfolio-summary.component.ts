import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
//import { PortfolioSidvinSummaryComponent } from '../portfolio-sidvin-summary/portfolio-sidvin-summary.component';
import { GrandtotalService } from '../services/grandtotal.service';
import { Total } from '../help/total';

@Component({
  selector: 'app-portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrls: ['./portfolio-summary.component.css']
})
export class PortfolioSummaryComponent implements OnInit {

  isFetching = false;

  portfolios: any;
  currentPortfolios = {name: '', id: 0, type: '', invested_nav_price: 0, unit_no_of_shares: 0};
  currentIndex = -1;
  name = '';
  headers = ["Name", "Type", "Cost NAV / Price", "Current NAV / Price" , "Units / No of shares", "Total Cost", 
              "Current Value", "Total Return", "%"];
  totalCost = 0;
  totalCurrentValue = 0;
  totalReturn = 0;
  percent = 0;
  
  constructor(private portfolioService: PortfolioService, private grandtotalService: GrandtotalService) { }

  ngOnInit(): void {
    this.retrievePortfolio();
  }

  retrievePortfolio(): void {
    this.isFetching = true;

    this.portfolioService.getAll()
      .subscribe(
        data => {
          this.portfolios = data;
          //console.log(data);
          this.setTotal();
          this.isFetching = false;
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePortfolio();
    //this.currentPortfolios = null;
    this.currentIndex = -1;
  }

  setActivePortfolio(tutorial: any, index: number): void {
    this.currentPortfolios = tutorial;
    this.currentIndex = index;
  }

  removeAllPortfolios(): void {
    this.portfolioService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrievePortfolio();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.portfolioService.findByName(this.name)
      .subscribe(
        data => {
          this.portfolios = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setTotal(): void {
    this.portfolios.forEach((element: any) => {
      this.totalCost += (element.invested_nav_price * element.unit_no_of_shares);
      this.totalCurrentValue += (element.last_nav_price * element.unit_no_of_shares);
    });
    this.totalReturn = this.totalCurrentValue - this.totalCost; 
    this.percent = this.totalReturn / this.totalCost * 100;

    this.grandtotalService.setTotal({
      name: "Zerodha-MF",
      totalCost: this.totalCost,
      totalCurrentValue: this.totalCurrentValue,
      totalReturn: this.totalReturn,
      percent: this.percent
    });
  }
}

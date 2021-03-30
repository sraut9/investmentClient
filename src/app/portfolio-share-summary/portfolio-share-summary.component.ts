import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';
import { GrandtotalService } from '../services/grandtotal.service';

@Component({
  selector: 'app-portfolio-share-summary',
  templateUrl: './portfolio-share-summary.component.html',
  styleUrls: ['./portfolio-share-summary.component.css']
})
export class PortfolioShareSummaryComponent implements OnInit {

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
  
  constructor(private shareService: ShareService, private grandtotalService: GrandtotalService) { }

  ngOnInit(): void {
    this.retrievePortfolio();
  }

  retrievePortfolio(): void {
    this.isFetching = true;
    this.shareService.getAll()
      .subscribe(
        data => {
          this.portfolios = data;
          //console.log(data);
          this.setTotal();
          this.isFetching = false;
        },
        error => {
          console.log(error);
          this.isFetching = false;
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
    this.shareService.deleteAll()
      .subscribe(
        response => {
          //console.log(response);
          this.retrievePortfolio();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.shareService.findByName(this.name)
      .subscribe(
        data => {
          this.portfolios = data;
          //console.log(data);
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
      name: "Zerodha-Share",
      totalCost: this.totalCost,
      totalCurrentValue: this.totalCurrentValue,
      totalReturn: this.totalReturn,
      percent: this.percent
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { GrandtotalService } from '../services/grandtotal.service';
import { Total } from '../help/total';

@Component({
  selector: 'app-porfolio-grand-total',
  templateUrl: './porfolio-grand-total.component.html',
  styleUrls: ['./porfolio-grand-total.component.css']
})
export class PorfolioGrandTotalComponent implements OnInit {

  headers = ["Name", "Total Cost", 
  "Current Value", "Total Return", "%"];

  constructor(private grandTotalService: GrandtotalService) { 
    (async () => { 
      // Do something before delay
      console.log('before delay')

      //await this.delay(25000);

      // Do something after
      console.log('after delay')
      this.totals = this.grandTotalService.getPortfolioTotals();

      if (this.totals.length > 3)
        this.setTotal();
    })();
  }

  totals: Total[] = [];

  totalCost: number = 0;
  totalCurrentValue: number = 0;
  totalReturn: number = 0;
  percent: number = 0;

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  ngOnInit(): void {

    // (async () => { 
    //   // Do something before delay
    //   console.log('before delay')

    //   await this.delay(25000);

    //   // Do something after
    //   console.log('after delay')
    //   this.totals = this.grandTotalService.getPortfolioTotals();
    //   this.setTotal();
    // })();

  }

  setTotal(): void {
    this.totals.forEach((element: any) => {
      this.totalCost += (element.totalCost);
      this.totalCurrentValue += (element.totalCurrentValue);
    });
    this.totalReturn = this.totalCurrentValue - this.totalCost; 
    this.percent = this.totalReturn / this.totalCost * 100;
  }

}

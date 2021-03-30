import { Injectable } from '@angular/core';
import { Total } from '../help/total';

@Injectable({
  providedIn: 'root'
})
export class GrandtotalService {
  // setTotal(arg0: { totalCost: number; totalCurrentValue: number; totalReturn: number; percent: number; }) {
  //   throw new Error("Method not implemented.");
  // }
  portfolioTotals: Total[] = [];

  setTotal(total: Total) {

    for (var i=0; i < this.portfolioTotals.length; i++) {
      if (this.portfolioTotals[i].name === total.name) {
          return; // found duplicate and hence don't add
      }
    }
    
    this.portfolioTotals.push(total);

    // if (this.portfolioTotals.length < 4) {
    //   if (this.portfolioTotals.indexOf(total) === -1) {
    //     this.portfolioTotals.push(total);
    //   }
    // }
  }

  getPortfolioTotals(): Total[] {
    if (this.portfolioTotals.length > 3)
      return this.portfolioTotals;
    return [];
  }

  constructor() { }
}

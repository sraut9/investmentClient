import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
//import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
//import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { PortfolioSummaryComponent } from './portfolio-summary/portfolio-summary.component';
import { from } from 'rxjs';
import { PorfolioGrandTotalComponent } from './porfolio-grand-total/porfolio-grand-total.component';
import { PortfolioShareSummaryComponent } from './portfolio-share-summary/portfolio-share-summary.component';
import { PortfolioSidvinSummaryComponent } from './portfolio-sidvin-summary/portfolio-sidvin-summary.component';
import { PortfolioSharekhanSummaryComponent } from './portfolio-sharekhan-summary/portfolio-sharekhan-summary.component';
import { PortfolioZerodhaSummaryComponent } from './portfolio-zerodha-summary/portfolio-zerodha-summary.component';

const routes: Routes = [
  // { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  // { path: 'tutorials', component: TutorialsListComponent },
  // { path: 'tutorials/:id', component: TutorialDetailsComponent },
  // { path: 'add', component: AddTutorialComponent }
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioSummaryComponent },
  { path: 'total', component: PorfolioGrandTotalComponent },
  { path: 'sidvin', component: PortfolioSidvinSummaryComponent },
  { path: 'shares', component: PortfolioShareSummaryComponent },
  { path: 'sharekhan', component: PortfolioSharekhanSummaryComponent },
  { path: 'zerodha', component: PortfolioZerodhaSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

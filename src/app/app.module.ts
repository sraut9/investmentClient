import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { PortfolioSummaryComponent } from './portfolio-summary/portfolio-summary.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioSidvinSummaryComponent } from './portfolio-sidvin-summary/portfolio-sidvin-summary.component';
import { PortfolioShareSummaryComponent } from './portfolio-share-summary/portfolio-share-summary.component';
import { PortfolioSharekhanSummaryComponent } from './portfolio-sharekhan-summary/portfolio-sharekhan-summary.component';
import { PorfolioGrandTotalComponent } from './porfolio-grand-total/porfolio-grand-total.component';
import { PortfolioZerodhaSummaryComponent } from './portfolio-zerodha-summary/portfolio-zerodha-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    PortfolioSummaryComponent,
    PortfolioDetailComponent,
    PortfolioSidvinSummaryComponent,
    PortfolioShareSummaryComponent,
    PortfolioSharekhanSummaryComponent,
    PorfolioGrandTotalComponent,
    PortfolioZerodhaSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

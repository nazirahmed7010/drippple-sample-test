import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { CurrencyFormatterPipe } from 'src/pipes/currency-formatter.pipe';
import { CurrencyFormatter2Pipe } from 'src/pipes/currency-formatter2.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormatterPipe,
    CurrencyFormatter2Pipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatDividerModule,
    NgbModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

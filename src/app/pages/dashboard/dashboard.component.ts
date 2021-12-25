import { Component, OnInit } from '@angular/core';

import { ChartType } from "./cartjs.model";

import { lineAreaChart, lineBarChart, pieChart } from './data';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Line Chart
  lineAreaChart: ChartType;
  // Bar Chart
  lineBarChart: ChartType;
  // Pie Chart
  pieChart: ChartType;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Charts' }, { label: 'Chartjs chart', active: true }];
  

    this._fetchData();
  }

  private _fetchData() {
    // Line Chart data
    this.lineAreaChart = lineAreaChart;
    // Bar Chart data
    this.lineBarChart = lineBarChart;
    // Pie Chart data
    this.pieChart = pieChart;
  }

}

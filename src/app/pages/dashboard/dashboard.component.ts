import { Component, OnInit } from '@angular/core';

import { Chart } from "chart.js";
import { lineAreaChart, lineBarChart, pieChart } from "./data";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public chartid: any;
  public ctx: any;
  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.__fetch('chartBar', 'bar', lineBarChart.labels, lineBarChart.datasets, lineBarChart.options);
    this.__fetch('Cartline', 'line', lineAreaChart.labels, lineAreaChart.datasets, lineAreaChart.options);
    this.__fetch('ChartPie', 'pie', pieChart.labels, pieChart.datasets, pieChart.options);
  }

  private __fetch(id: string, type: string, label, dataset, option) {
    this.chartid = document.getElementById(id);
    this.ctx = this.chartid.getContext('2d');
    this.chart = new Chart(this.ctx, {
    type: type,
    data: {
        labels: label,
        datasets: dataset
    },
    options: option
});

  }

}

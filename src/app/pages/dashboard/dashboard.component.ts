import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { HttpService } from 'app/shared/services/http_services';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  isLoading: boolean = false;
  listeItems: any;
  constructor(private service: HttpService) { }
  ngOnInit() {
    this.getStatistique();
  }

    getStatistique() {
      this.isLoading = true;
      this.service.getDashboardStat().subscribe((data) => {
        console.log(data);
        this.listeItems = data.data;
        this.isLoading = false;
      });
  }
}

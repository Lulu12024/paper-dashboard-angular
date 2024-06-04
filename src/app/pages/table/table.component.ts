import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/shared/services/http_services';

@Component({
  selector: 'table-cmp',
  moduleId: module.id,
  templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {
  isLoading: boolean = false;
  listeItems: any[];

  constructor(private service: HttpService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.isLoading = true;
    this.service.getUserList().subscribe((data) => {
      console.log(data);
      this.listeItems = data.user;
      console.log(this.listeItems)
      this.isLoading = false;
    });
  }
}

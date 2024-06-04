import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/shared/services/http_services';

@Component({
    selector: 'upgrade-cmp',
    moduleId: module.id,
    templateUrl: 'upgrade.component.html'
})

export class UpgradeComponent implements OnInit{
    isLoading: boolean = false;
    listeItems: any[];

    constructor(private service: HttpService) { }

    ngOnInit(){
        this.getDeposit()
    }

    getDeposit() {
        this.isLoading = true;
        this.service.getDepositList().subscribe((data) => {
          console.log(data);
          this.listeItems = data.transactions;
          this.isLoading = false;
        });
    }
}

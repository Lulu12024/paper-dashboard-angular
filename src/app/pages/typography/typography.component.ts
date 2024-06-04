import { Component } from '@angular/core';
import { HttpService } from 'app/shared/services/http_services';
import { ToastrService } from 'ngx-toastr';
import { UtilsService} from 'app/shared/services/utils.services';


@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent{

    isLoading: boolean = false;
    listeItems: any[];
    action: string;
    currentItem: any;
    showModal: boolean = false;

    constructor(private service: HttpService,private toastr: ToastrService , private toast: UtilsService) { }

    ngOnInit() {
        this.getWithdraw();
    }
    getWithdraw() {
        this.isLoading = true;
        this.service.getWithdrawList().subscribe((data) => {
          console.log(data);
          this.listeItems = data.transactions;
          this.isLoading = false;
        });
    }
    confirmAction(action: string, item: any) {
      this.action = action;
      this.currentItem = item;
      this.showModal = true;
    }
  
    closeModal() {
      this.showModal = false;
    }
  
    executeAction() {
      if (this.action === 'valider') {
        this.validerDemande(this.currentItem);
      } else if (this.action === 'annuler') {
        this.annulerDemande(this.currentItem);
      }
      this.closeModal();
    }
  
    validerDemande(item: any) {
      this.isLoading = true; // Activer le loader
      console.log('Demande validée : ', item);
      // Ici, vous effectuez votre logique pour valider la demande
      let param = {
        "withdraw_id" : item.id
      }
      this.service.confirmWithdraw(param).subscribe((data) => {
        console.log(data);
        this.isLoading = false;
        this.toastr.success('La demande a été validée avec succès.', 'Succès');
      });
      
    }
  
    annulerDemande(item: any) {
      this.isLoading = true; // Activer le loader
      console.log('Demande annulée : ', item);
      
      let param = {
        "withdraw_id" : item.id
      }
      this.service.cancelWithdraw(param).subscribe((data) => {
        console.log(data);
        this.isLoading = false;
        this.toastr.success('La demande a été validée avec succès.', 'Succès');
      });
    }
}

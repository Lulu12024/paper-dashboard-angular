import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment"
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public observer: Subscriber<{}>;
 

  constructor(private toastr: ToastrService) { }

  display_success(title,type) {
    this.toastr.success(title, type);
  }
  display_error(title,type) {
    this.toastr.error(title, type);
  }
}

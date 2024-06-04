import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public observer: Subscriber<{}>;
 

  constructor(private http: HttpClient) { }

  
    getUserList(): Observable<any>{
      return this.http.get( environment.apiUrl + 'get_list_user');
    }
  
    getWithdrawList(): Observable<any>{
      return this.http.get( environment.apiUrl + 'get-all-withdraw-request');
    }
    
    getDepositList(): Observable<any>{
      return this.http.get( environment.apiUrl + 'get-all-deposit');
    }
    
    editVictime(item): Observable<any>{
      return this.http.post( environment.apiUrl + '' , item);
    }

    getDashboardStat(): Observable<any>{
      return this.http.get( environment.apiUrl + 'get-dashboard-statistisque');
    }

    confirmWithdraw(item:any): Observable<any>{
      return this.http.post( environment.apiUrl + 'approve_withdraw_request' , item);
    }
    
    cancelWithdraw(item:any): Observable<any>{
      return this.http.post( environment.apiUrl + 'cancel_withdraw_request' , item);
    }
}

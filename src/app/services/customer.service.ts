import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { CustomerResponseModel } from '../models/customerResponseModel';
import { from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiURL = "https://localhost:4200/api/Customers/getcustomerdetails";

  

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel>{
    return this.httpClient.get<CustomerResponseModel>(this.apiURL);   
  
   }

}
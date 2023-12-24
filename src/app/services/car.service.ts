import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { CarResponseModel } from '../models/carResponseModel';
import { from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiURL = "https://localhost:4200/api/Cars/getcardetails";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiURL);   
  
   }

}

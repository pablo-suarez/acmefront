import { Injectable } from '@angular/core';
import { Vehicle } from './../interfaces/vehicle';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  API_ENDPOINT = 'https://acmeoet.herokuapp.com/api';
  constructor(private httpClient:HttpClient) {   }
  get(){
      return this.httpClient.get(this.API_ENDPOINT + '/vehicles');
  }
  save(vehicle:Vehicle){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/vehicles', vehicle, {headers:headers});
  }
  put(vehicle){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/vehicles/' + vehicle.id, vehicle, {headers:headers});
  }
  delete(id){
    return this.httpClient.delete(this.API_ENDPOINT + '/vehicles/' + id);
  }
  getOwner(){
    return this.httpClient.get(this.API_ENDPOINT + '/owners');
  }
  getDriver(){
    return this.httpClient.get(this.API_ENDPOINT + '/drivers');
  }
  getKindVehicle(){
    return this.httpClient.get(this.API_ENDPOINT + '/kind_vehicles');
  }
}

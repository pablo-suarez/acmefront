import { Driver } from './../interfaces/driver';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
/**
 * Conexiones al API del conductor
 */
  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor(private httpClient:HttpClient) {   }
  get(){
      return this.httpClient.get(this.API_ENDPOINT + '/drivers');
  }
  save(driver:Driver){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/drivers', driver, {headers:headers});
  }
  put(driver){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/drivers/' + driver.id, driver, {headers:headers});
  }
  delete(id){
    return this.httpClient.delete(this.API_ENDPOINT + '/drivers/' + id);
  }
}

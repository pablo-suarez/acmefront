import { Owner } from './../interfaces/owner';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
/**
 * Conexiones al API del propietario
 */
  API_ENDPOINT = 'https://acmeoet.herokuapp.com/api';
  constructor(private httpClient:HttpClient) {   }
  get(){
      return this.httpClient.get(this.API_ENDPOINT + '/owners');
  }
  save(owner:Owner){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/owners', owner, {headers:headers});
  }
  put(owner){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/owners/' + owner.id, owner, {headers:headers});
  }
  delete(id){
    return this.httpClient.delete(this.API_ENDPOINT + '/owners/' + id);
  }
}

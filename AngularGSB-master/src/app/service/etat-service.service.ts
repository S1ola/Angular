import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etat} from "../metier/Etat";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EtatServiceService {
  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string="";

  constructor(private httpClient:HttpClient) {
    let httpHeader = new HttpHeaders({
      'content-type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  getListeEtat():Observable<any>{
    this.ClientUrl=environment.ENDPOINT+'api/frais/listeEtat';
    return  this.httpClient.get(this.ClientUrl)
  }
}

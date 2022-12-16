import { Injectable } from '@angular/core';
import {Frais} from "../metier/Frais";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {FichefraisComponent} from "../fichefrais/fichefrais.component";


@Injectable({
  providedIn: 'root'
})
export class FichefraisServiceService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string = "";

  private unFrais: Frais = new Frais();

  constructor(private httpClient: HttpClient) {
    //on définit le header
    let httpHeader = new HttpHeaders({
      'content-type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }


  getFicheFraisListe(id: number): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/frais/listeFrais/' + id;
    return this.httpClient.get(this.ClientUrl);
  }

  getFicheFrais(id: number): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/frais/getUnFrais/' + id;
    return this.httpClient.get(this.ClientUrl);
  }

  private handleError(error: Response | any) {
    let errMsg: string = "";
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    console.error(errMsg);
    return Promise.reject(error.message || error);

  }

  updateFrais(unFrais: Frais): Observable<any>{
    this.ClientUrl = environment.ENDPOINT + 'api/frais/updateFicheFrais';
    return  this.httpClient.post(this.ClientUrl, JSON.stringify(unFrais));
  }

  deleteFrais(unFrais:Frais ): Observable<any>{
    this.ClientUrl = environment.ENDPOINT + 'api/frais/deleteFicheFrais';
    return  this.httpClient.post(this.ClientUrl, JSON.stringify(unFrais));



}
  addFicheFrais(unFrais:Frais):Observable<any>{
    this.ClientUrl=environment.ENDPOINT+'api/frais/addFicheFrais';
    return this.httpClient.post(this.ClientUrl,JSON.stringify(unFrais));
  }

}

import { Oportunidade } from './../model/Oportunidade';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OportunidadesService {

 apiUrl = 'https://my-hero-app-versao-beta.herokuapp.com/oportunidades'

  constructor(private httpClient: HttpClient) { }

  listar(){
    return this.httpClient.get(this.apiUrl);
  }

  adicionar(oportunidade : Oportunidade){
    return this.httpClient.post(this.apiUrl,oportunidade);
  }
}

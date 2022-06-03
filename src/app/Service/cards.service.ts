import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Card } from '../Model/card.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

//The purpose of creating this sevice is to call the http or any api.
export class CardsService {

baseUrl = 'https://localhost:7000/api/cards';

  constructor(private http: HttpClient) { 

  }

//We call the api here by using this getAllCards method.
getAllCards(): Observable<Card[]> {
return this.http.get<Card[]>(this.baseUrl);
}

addCard(card: Card): Observable<Card>{
  card.id = '00000000-0000-0000-0000-000000000000';
  return this.http.post<Card>(this.baseUrl, card);
}

}

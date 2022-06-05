import { Component, OnInit } from '@angular/core';
import { Card } from './Model/card.model';
import { Error } from './Model/card.model';

import { CardsService } from './Service/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularPrac4';
cards: Card[] = [];
card: Card = {
  id: '',
  cardNumber: '',
  cardholderName: '',
  expiryMonth: '',
  cvc: '',
  expiryYear: ''
};
consoleTheError: Error = {
status: ''
};

constructor(private cardsService: CardsService) {}

ngOnInit(): void {
  this.allCards();
}

allCards(){
  this.cardsService.getAllCards().subscribe(
    Response => {
      this.cards = Response;
    }
  )
}

onSubmit(){
  this.cardsService.addCard(this.card).subscribe(
    Response => {
      this.card = Response;
console.log(Response);
    }
  )
}

onSubmitDelete(cardid: string){
  this.cardsService.deleteCard(cardid, this.consoleTheError.status);
  return this.allCards();
}


}
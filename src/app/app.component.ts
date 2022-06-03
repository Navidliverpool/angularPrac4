import { Component, OnInit } from '@angular/core';
import { Card } from './Model/card.model';
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

constructor(private cardsService: CardsService) {}

ngOnInit(): void {
  this.allCards();
}

allCards(){
  this.cardsService.getAllCards().subscribe(
    Response => {
  console.log(this.card);

      this.cards = Response;
    }
  )
}

onSubmit()
{
  console.log(this.card);

}
}

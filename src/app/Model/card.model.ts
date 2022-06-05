export interface Card{
id: string;
cardNumber: string;
cardholderName: string;
expiryMonth: string;
expiryYear: string;
cvc: string;
}

export interface Error{
    status: string;    
}
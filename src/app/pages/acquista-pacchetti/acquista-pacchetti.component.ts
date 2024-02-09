import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Pacchetti } from 'src/app/Models/Pacchetti';
import { Servizi } from 'src/app/Models/Servizi';
import { CheckoutInfo } from 'src/app/Models/CheckoutInfo';
import { tap } from 'rxjs';
@Component({
  selector: 'app-acquista-pacchetti',
  templateUrl: './acquista-pacchetti.component.html',
  styleUrl: './acquista-pacchetti.component.less'
})
export class AcquistaPacchettiComponent {
  public pacchettiList: Pacchetti[] = [];
  public servizi: Servizi[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.pacchettiList.push(
      {
        nome: "Singola caldaia",
        prezzo: 24.99,
        sconto: 19.99,
        attivo: true
      },
      {
        nome: 'Pacchetto "1 caldaia"',
        prezzo: 34.99,
        sconto: 24.99,
        attivo: true
      },
      {
        nome: 'Pacchetto "Friends"',
        prezzo: 44.99,
        sconto: 29.99,
        attivo: true
      },
      {
        nome: 'Pacchetto "Risolutore"',
        prezzo: 24.99,
        sconto: 19.99,
        attivo: true
      },
      {
        nome: 'Pacchetto "Exclusive"',
        prezzo: 119.98,
        sconto: 99.98,
        attivo: true
      },
      {
        nome: 'Pacchetto "All-in"',
        prezzo: 249.98,
        sconto: 199.98,
        attivo: true
      }
    );

    this.servizi.push(
      {
        nomeServizio: "Sblocca la risoluzione a tutti i guasti di tutte le caldaie di ogni marca"
      },
      {
        nomeServizio: "Sblocca pacchetto accortezze per la sostituzione"
      },
      {
        nomeServizio: " il pacchetto individuazione guasti"
      }
    );
  }

  public navigateToCheckout(selectedPacchetto: Pacchetti) {
    const checkoutInfo: CheckoutInfo = new CheckoutInfo();
    checkoutInfo.line_items = [];
    checkoutInfo.line_items.push(
      {
        price_data: {
          unit_amount: (selectedPacchetto.sconto ?? selectedPacchetto.prezzo)*100,
          currency: "EUR",
          product_data: {
            name: selectedPacchetto.nome
          }
        },
        quantity: 1
      }
    );
    checkoutInfo.cancel_url = "http://localhost/4200/login";
    checkoutInfo.allow_promotion_codes = true;
    checkoutInfo.customerEmail = "test@gmail.com";
    checkoutInfo.mode = "payment";
    checkoutInfo.success_url = "http://localhost/4200/profilo";
    checkoutInfo.payment_method_types = [];
    checkoutInfo.payment_method_types.push("card");
    this.httpClient
      .post<string>('https://autoclima-001-site2.atempurl.com/api/payment/create-checkout-session', checkoutInfo)
      .pipe(
        tap((checkoutUrl: string) => window.location.href = checkoutUrl)
      )
      .subscribe();
  }
}

// {
//   "line_items": [
//     {
//       "price_data": {
//         "unit_amount": 499,
//         "currency": "EUR",
//         "product_data": {
//           "name": "Pacchetto Singola Caldaia"
//         }
//       },
//       "quantity": 1
//     }
//   ],
//   "cancel_url": "autoclimarepair.it/cancel",
//   "allow_promotion_codes": true,
//   "customerEmail": "test@gmai.com",
//   "mode": "payment",
//   "success_url": "autoclimarepair.it",
//   "payment_method_types": [
//     "card"
//   ]
// }

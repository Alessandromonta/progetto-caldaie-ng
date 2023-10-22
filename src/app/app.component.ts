import { Component } from '@angular/core';
import { Stripe, loadStripe, StripeElement } from '@stripe/stripe-js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, map, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { PaymentInformation, LineItem, PriceData, ProductData } from 'src/app/Models/checkout.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}
  title = 'prova-checkout';
  stripe = loadStripe('pk_test_51NexKpLxzcDkkwupzZUQg0kQy3NVZHOZMwIVIT5Diz62qnf47SnCorczAple0dx2NTs62qaKKTgwfTBRcxpT6cIZ0047B4tIGz');

  ngOnInit() : void {

  }

  public async checkout() {
    let link: string;
    let checkoutConfig: PaymentInformation = new PaymentInformation();
    checkoutConfig.customerEmail = 'Test@gmail.com';


    let item = new LineItem();
    item.price_data = new PriceData();
    item.quantity = 1;
    item.price_data.currency = 'EUR';
    item.price_data.product_data = new ProductData();
    item.price_data.unit_amount = 54;
    item.price_data.product_data.name = "Un bambino scuro";

    checkoutConfig.line_items = {
      1: item
    }
    checkoutConfig.mode = "payment";
    checkoutConfig.allow_promotion_codes = true;
    checkoutConfig.success_url = "";
    checkoutConfig.cancel_url = "";
    checkoutConfig.payment_method_types = [];
    checkoutConfig.payment_method_types.push('card')
    //"ConnectionStrings": { "DefaultConnection": "Server=SQL8002.site4now.net;Database=db_aa06c8_autoclimarepair;User Id=db_aa06c8_autoclimarepair_admin;Password=Autoclima2023;" }
    console.log(checkoutConfig);
    this.httpClient
      .post<any>(
        'http://autoclima-001-site1.atempurl.com/api/payment/create-checkout-session', checkoutConfig,
        { responseType: 'json' }
      )
      .pipe(
        tap( res => {
          link = res;
        }),
        tap( (res) => console.log(link)),
        tap( (res) =>  window.location.href = link)
      )
      .subscribe();
  }
}

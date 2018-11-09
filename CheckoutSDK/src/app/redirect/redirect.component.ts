import { Component, OnInit } from '@angular/core';
import { RedirectCheckout } from "@bambora/checkout-sdk-web";

@Component({
  selector: 'app-redirect',
  template: `<button (click)="ToggleRedirectWindow()">Betala redirect</button>
  <div *ngIf="buttonClicked"><app-redirect-window  [childUrl]="parentUrl"></app-redirect-window></div>`,
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  parentUrl:string;
  buttonClicked : boolean;
  constructor(){
      this.buttonClicked = false;  
      this.parentUrl='empty url'
   }
  ToggleRedirectWindow(){
      this.buttonClicked = !this.buttonClicked;
  }

  ngOnInit() {
    let accessToken = "M09TiRC9emeAdBYAdbhV";
    let merchantNumber = "T064742601";
    let secretToken = "yfxJkjkGexrWbmYBrb8hVrsAVWjHm58hWjIGdOJY";
    let unencodedApiKey = accessToken + "@" + merchantNumber + ":" + secretToken;

    let encodedApiKey = btoa(unencodedApiKey);

    let checkoutEndpoint = "https://api.v1.checkout.bambora.com/sessions";

    let header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + encodedApiKey
    }

    let data = JSON.stringify({
        "order": {
            "id": "Order123",
            "amount": 375,
            "currency": "SEK"
        },
        "url": {
            "accept": "https://example.org/accept",
            "cancel": "http://localhost:4200/redirect"
        }
    });

    let request = new Request(checkoutEndpoint, {
        method: 'POST',
        body: data,
        headers: new Headers(header)
    })


    fetch(request)
        .then((response) => response.json())
        .then((responseJSON) => {
            this.initWithToken(responseJSON.token);
            console.log('token: ' + responseJSON.token);
        });
  }

  initWithToken = async (token: string) => {
    const checkout = new RedirectCheckout(null);
    this.parentUrl = await checkout.initialize(token);
    console.log('Checkout URL: ' + this.parentUrl);
    // The Checkout URL is logged to the console.
}


}

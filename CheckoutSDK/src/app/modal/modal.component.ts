import { Component, OnInit } from '@angular/core';
import { ModalCheckout, Event} from "@bambora/checkout-sdk-web";

@Component({
  selector: 'app-modal',
  template: `<button (click)="buttonClicked()">Betala modal</button>`,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(){
   }

  ngOnInit(){
  }

  buttonClicked() {
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
            "cancel": "http://localhost:4200/modal"
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
    const checkout = new ModalCheckout(token);
    checkout.on(
        Event.Authorize,
        function (payload) {
            console.log(payload.data.txnid);
            // The transaction ID is logged to the console upon authorize.
        }
    );

    checkout.show();
}


}

import { Component, OnInit, Input } from '@angular/core';
import { RedirectComponent } from '../redirect/redirect.component';
@Component({
  selector: 'app-redirect-window',
  template: ``,
  styleUrls: ['./redirect-window.component.css']
})
export class RedirectWindowComponent implements OnInit {
  @Input() childUrl: string;

  constructor() {
  }

ngOnInit() {
    window.location.href=this.childUrl;
  }
}

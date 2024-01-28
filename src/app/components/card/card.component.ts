import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() ticketNumber: string="www.tazkty.com/473847";

  copyToClipboard() {
    navigator.clipboard.writeText(this.ticketNumber)
      .then(() => {
        console.log('Ticket number copied successfully'+this.ticketNumber);
      })
      .catch(err => {
        console.error('Unable to copy the ticket number:', err);
      });
  }

}

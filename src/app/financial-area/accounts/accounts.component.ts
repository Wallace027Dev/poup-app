import { Component, input } from '@angular/core';
import { ContaComponent } from './account/account.component';
import { Conta } from '../shared/account.model';
import { CardComponent } from '../shared/card/card.component';
import { AddAccountsButtonComponent } from './add-accounts-button/add-accounts-button.component';

@Component({
  selector: 'app-accounts',
  imports: [
    ContaComponent,
    CardComponent,
    AddAccountsButtonComponent,
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class ContasComponent {
  accounts = input.required<Conta[]>();
}

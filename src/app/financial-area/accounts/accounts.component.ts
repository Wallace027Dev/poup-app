import { Component, input, output } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { Account } from '../shared/account.model';
import { CardComponent } from '../shared/card/card.component';
import { AddAccountsButtonComponent } from './add-accounts-button/add-accounts-button.component';

@Component({
  selector: 'app-accounts',
  imports: [
    AccountComponent,
    CardComponent,
    AddAccountsButtonComponent,
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent {
  accounts = input.required<Account[]>();

  createdAccount = output<Account>();
}

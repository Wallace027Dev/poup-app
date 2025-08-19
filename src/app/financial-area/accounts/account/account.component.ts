import { Component, input } from '@angular/core';
import { Account } from '../../shared/account.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [CurrencyPipe],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  account = input.required<Account>();
}

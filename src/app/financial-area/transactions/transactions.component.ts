import { Component, input, output } from '@angular/core';
import { Transaction } from '../shared/transaction.model';
import { TransactionComponent } from './transaction/transaction.component';
import { CardComponent } from '../shared/card/card.component';
import { AddTransactionButtonComponent } from './add-transaction-button/add-transaction-button.component';
import { Account } from '../shared/account.model';

@Component({
  selector: 'app-transactions',
  imports: [
    TransactionComponent,
    CardComponent,
    AddTransactionButtonComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  transactions = input.required<Transaction[]>();

  accounts = input.required<Account[]>();

  createdTransaction = output<Transaction>();
}

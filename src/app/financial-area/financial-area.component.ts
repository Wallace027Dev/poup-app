import { Component, signal } from '@angular/core';
import { BalanceComponent } from './balance/balance.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountsComponent } from './accounts/accounts.component';
import { Account } from './shared/account.model';
import { Transaction, TransactionType } from './shared/transaction.model';

@Component({
  selector: 'app-financial-area',
  imports: [BalanceComponent, TransactionsComponent, AccountsComponent],
  templateUrl: './financial-area.component.html',
  styleUrl: './financial-area.component.css',
})
export class FinancialAreaComponent {
  balance = -30;

  accounts = signal<Account[]>([
    {
      name: 'Anybank',
      balance: 1000,
    },
    {
      name: 'Bytebank',
      balance: 0,
    },
    {
      name: 'Switch Bank',
      balance: 0,
    },
  ]);

  transactions = signal<Transaction[]>([
    {
      id: '5',
      name: '',
      tipo: TransactionType.SAQUE,
      value: 200,
      date: new Date('2025-02-20T00:00'),
      account: 'Switch Bank',
    },
    {
      id: '4',
      name: 'Almoço',
      tipo: TransactionType.SAQUE,
      value: 40,
      date: new Date('2025-01-15T00:00'),
      account: 'Bytebank',
    },
    {
      id: '3',
      name: '',
      tipo: TransactionType.DEPOSITO,
      value: 400,
      date: new Date('2025-01-10T00:00'),
      account: 'Bytebank',
    },
    {
      id: '2',
      name: 'Freela (2ª parte)',
      tipo: TransactionType.DEPOSITO,
      value: 200,
      date: new Date('2024-10-01T00:00'),
      account: 'Anybank',
    },
    {
      id: '1',
      name: 'Freela (1ª parte)',
      tipo: TransactionType.DEPOSITO,
      value: 100,
      date: new Date('2024-10-01T00:00'),
      account: 'Anybank',
    },
  ]);

  processTransaction(transaction: Transaction) {
    this.transactions.update((transactions) => [transaction, ...transactions]);
  }

  addAccount(account: Account) {
    this.accounts.update((accounts) => [...accounts, account]);
  }
}

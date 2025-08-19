import { Component, computed, signal } from '@angular/core';
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
  balance = 0;

  transactions = signal<Transaction[]>([]);
  accountsWithInitialBalance = signal<Account[]>([]);

  accounts = computed(() => {
    return this.accountsWithInitialBalance().map((account) => {
      const updatedBalance = this.calculateBalanceUpdated(account);

      return { ...account, balance: updatedBalance };
    });
  });

  calculateBalanceUpdated(initialAccount: Account) {
    const accountTransactions = this.transactions().filter(
      (transaction) => transaction.account === initialAccount.name
    );

    const newBalance = accountTransactions.reduce((total, transaction) => {
      switch (transaction.type) {
        case TransactionType.DEPOSITO:
          return total + transaction.value;
        case TransactionType.SAQUE:
          return total - transaction.value;
        default:
          transaction.type satisfies never;
          alert('Tipo de transação inválido');
          throw new Error('Invalid transaction type');
      }
    }, initialAccount.balance);

    return newBalance;
  }

  processTransaction(transaction: Transaction) {
    this.transactions.update((transactions) => [transaction, ...transactions]);
  }

  addAccount(account: Account) {
    this.accountsWithInitialBalance.update((accounts) => [
      ...accounts,
      account,
    ]);
  }
}

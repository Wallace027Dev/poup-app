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
  transactions = signal<Transaction[]>([]);
  accountsWithInitialBalance = signal<Account[]>([]);

  accounts = computed(() => {
    return this.accountsWithInitialBalance().map((account) => {
      const updatedBalance = this.calculateBalanceUpdated(account);

      return { ...account, balance: updatedBalance };
    });
  });

  balance = computed(() => {
    return this.accounts().reduce((total, account) => {
      return total + account.balance;
    }, 0);
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
    const account = this.accounts().find(
      (total) => total.name === transaction.account
    );

    if (!account) {
      alert('Conta não encontrada!');
      return;
    }

    if (
      transaction.type === TransactionType.SAQUE &&
      account.balance < transaction.value
    ) {
      alert('Saldo insuficiente para realizar essa transação!');
      return;
    }
    this.transactions.update((transactions) => [transaction, ...transactions]);
  }

  addAccount(account: Account) {
    const exists = this.accountsWithInitialBalance().some((total) => {
      return (
        total.name.toLocaleLowerCase() === account.name.toLocaleLowerCase()
      );
    });

    if (exists) {
      alert('Já existe uma conta com este nome!');
      return;
    }

    this.accountsWithInitialBalance.update((accounts) => [
      ...accounts,
      account,
    ]);
  }
}

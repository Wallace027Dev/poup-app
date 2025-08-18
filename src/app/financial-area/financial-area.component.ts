import { Component } from '@angular/core';
import { BalanceComponent } from "./balance/balance.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { ContasComponent } from "./accounts/accounts.component";
import { Conta } from './shared/account.model';
import { Transacao, TipoTransacao } from './shared/transaction.model';

@Component({
  selector: 'app-financial-area',
  imports: [BalanceComponent, TransactionsComponent, ContasComponent],
  templateUrl: './financial-area.component.html',
  styleUrl: './financial-area.component.css'
})
export class FinancialAreaComponent {
  balance = 0;

  transactions: Transacao[] = [
    {
      id: '5',
      name: '',
      tipo: TipoTransacao.SAQUE,
      valor: 200,
      data: new Date('2025-02-20T00:00'),
      account: 'Switch Bank'
    },
    {
      id: '4',
      name: 'Almoço',
      tipo: TipoTransacao.SAQUE,
      valor: 40,
      data: new Date('2025-01-15T00:00'),
      account: 'Bytebank'
    },
    {
      id: '3',
      name: '',
      tipo: TipoTransacao.DEPOSITO,
      valor: 400,
      data: new Date('2025-01-10T00:00'),
      account: 'Bytebank'
    },
    {
      id: '2',
      name: 'Freela (2ª parte)',
      tipo: TipoTransacao.DEPOSITO,
      valor: 200,
      data: new Date('2024-10-01T00:00'),
      account: 'Anybank'
    },
    {
      id: '1',
      name: 'Freela (1ª parte)',
      tipo: TipoTransacao.DEPOSITO,
      valor: 100,
      data: new Date('2024-10-01T00:00'),
      account: 'Anybank'
    },
  ];

  accounts: Conta[] = [
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
  ];
}

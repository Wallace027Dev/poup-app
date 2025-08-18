import { Component, input } from '@angular/core';
import { Transacao } from '../shared/transaction.model';
import { TransacaoComponent } from './transaction/transaction.component';
import { CardComponent } from '../shared/card/card.component';
import { AddTransactionButtonComponent } from './add-transaction-button/add-transaction-button.component';

@Component({
  selector: 'app-transactions',
  imports: [
    TransacaoComponent,
    CardComponent,
    AddTransactionButtonComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  transactions = input.required<Transacao[]>();
}

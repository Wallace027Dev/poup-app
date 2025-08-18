import { Component, input } from '@angular/core';
import { Transacao } from '../shared/transaction.model';
import { TransacaoComponent } from './transaction/transaction.component';
import { ButtonComponent } from '../../shared/button/button.component';


@Component({
  selector: 'app-transactions',
  imports: [TransacaoComponent, ButtonComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  transactions = input.required<Transacao[]>();
}

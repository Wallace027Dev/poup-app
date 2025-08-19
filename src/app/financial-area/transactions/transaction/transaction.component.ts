import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { TransactionType, Transaction } from '../../shared/transaction.model';
import { HighlightNumericValueDirective } from '../../../shared/highlight-numeric-value.directive';

@Component({
  selector: 'app-transaction',
  imports: [CurrencyPipe, DatePipe, HighlightNumericValueDirective],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
  transaction = input.required<Transaction>();

  value = computed(() => {
    if (this.transaction().type === TransactionType.SAQUE) {
      return -this.transaction().value;
    }

    return this.transaction().value;
  });
}

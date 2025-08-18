import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { TipoTransacao, Transacao } from '../../shared/transaction.model';
import { HighlightNumericValueDirective } from '../../../shared/highlight-numeric-value.directive';

@Component({
  selector: 'app-transaction',
  imports: [CurrencyPipe, DatePipe, HighlightNumericValueDirective],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransacaoComponent {
  transaction = input.required<Transacao>();

  value = computed(() => {
    if (this.transaction().tipo === TipoTransacao.SAQUE) {
      return -this.transaction().value;
    }

    return this.transaction().value;
  });
}

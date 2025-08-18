import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { TipoTransacao, Transacao } from '../../shared/transaction.model';

@Component({
  selector: 'app-transaction',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransacaoComponent {
  transaction = input.required<Transacao>();

  valor = computed(() => {
    if (this.transaction().tipo === TipoTransacao.SAQUE) {
      return -this.transaction().valor;
    }

    return this.transaction().valor;
  });
}

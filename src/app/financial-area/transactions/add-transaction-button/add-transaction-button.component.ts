import { Component, input, output, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';
import { Transaction, TransactionType } from '../../shared/transaction.model';
import { Account } from '../../shared/account.model';

@Component({
  selector: 'app-add-transaction-button',
  imports: [ButtonComponent, ModalComponent, FormsModule, KeyValuePipe],
  templateUrl: './add-transaction-button.component.html',
  styleUrl: './add-transaction-button.component.css',
})
export class AddTransactionButtonComponent {
  openedModal = signal(false);

  newTransactionForm = {
    name: '',
    type: '',
    value: '',
    date: '',
    account: '',
  };

  transactionTypes = TransactionType;

  accounts = input.required<Account[]>();
  createdTransaction = output<Transaction>();

  openModal() {
    this.openedModal.set(true);
  }

  onSubmit() {
    const newTransaction = new Transaction(
      this.newTransactionForm.name,
      this.newTransactionForm.type as TransactionType,
      Number(this.newTransactionForm.value),
      this.newTransactionForm.date,
      this.newTransactionForm.account
    );

    this.createdTransaction.emit(newTransaction)

    this.openedModal.set(false);
  }
}

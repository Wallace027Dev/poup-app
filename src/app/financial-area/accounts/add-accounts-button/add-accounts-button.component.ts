import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-accounts-button',
  imports: [ButtonComponent, ModalComponent, FormsModule],
  templateUrl: './add-accounts-button.component.html',
  styleUrl: './add-accounts-button.component.css',
})
export class AddAccountsButtonComponent {
  openedModal = signal(false);

  newAccountForm = {
    name: '',
    initialBalance: '',
  };

  // transactionTypes = TransactionType;

  // createdTransaction = output<Transaction>();

  openModal() {
    this.openedModal.set(true);
  }

  onSubmit() {
    //   const newTransaction = new Transaction(
    //     this.newAccountForm.name,
    //     Number(this.newAccountForm.initialBalance),
    //   );

    //   console.log(newTransaction);
    //   this.createdTransaction.emit(newTransaction)

    //   this.openedModal.set(false);

    console.log(this.newAccountForm);
  }
}

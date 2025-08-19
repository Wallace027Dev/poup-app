import { Component, input, output, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { Account } from '../../shared/account.model';

@Component({
  selector: 'app-add-accounts-button',
  imports: [ButtonComponent, ModalComponent, FormsModule],
  templateUrl: './add-accounts-button.component.html',
  styleUrl: './add-accounts-button.component.css',
})
export class AddAccountsButtonComponent {
  openedModal = signal(false);

  openModal() {
    this.openedModal.set(true);
  }

  newAccountForm = {
    name: '',
    initialBalance: '',
  };

  createdAccount = output<Account>();
  accountsWithInitialBalance = input.required<Account[]>();

  onSubmit() {
    const newAccount = new Account(
      this.newAccountForm.name,
      Number(this.newAccountForm.initialBalance)
    );

    const exists = this.accountsWithInitialBalance().some((total) => {
      return (
        total.name.toLocaleLowerCase() === newAccount.name.toLocaleLowerCase()
      );
    });

    if (exists) {
      alert('Já existe uma conta com este nome!');
      return;
    }

    this.createdAccount.emit(newAccount);
    this.openedModal.set(false);

    this.newAccountForm = {
      name: '',
      initialBalance: '',
    };
  }
}

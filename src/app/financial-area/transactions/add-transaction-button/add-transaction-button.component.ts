import { Component, effect, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'app-add-transaction-button',
  imports: [ButtonComponent, ModalComponent],
  templateUrl: './add-transaction-button.component.html',
  styleUrl: './add-transaction-button.component.css',
})
export class AddTransactionButtonComponent {
  openedModal = signal(false);

  openModal() {
    this.openedModal.set(true)
  }
}

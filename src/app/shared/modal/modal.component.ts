import { afterRender, Component, ElementRef, model, viewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');

  open = model(false);

  constructor() {
    afterRender(() => {
      if (this.open()) {
        this.modal().nativeElement.showModal();
      } else if (!this.open()) {
        this.modal().nativeElement.close();
      }
    })
  }

  closeModal() {
    this.open.set(false)
  }
}

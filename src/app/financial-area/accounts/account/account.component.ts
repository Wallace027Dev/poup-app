import { Component, input } from '@angular/core';
import { Conta } from '../../shared/account.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [CurrencyPipe],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class ContaComponent {
  account = input.required<Conta>();
}

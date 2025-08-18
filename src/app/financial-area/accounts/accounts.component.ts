import { Component, input } from '@angular/core';
import { ContaComponent } from "./account/account.component";
import { Conta } from '../shared/account.model';
import { ButtonComponent } from '../../shared/button/button.component';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-accounts',
  imports: [ButtonComponent, ContaComponent, CardComponent],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class ContasComponent {
  accounts = input.required<Conta[]>();
}

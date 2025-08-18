import { Component } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { PresentationComponent } from "./presentation/presentation.component";
import { FinancialAreaComponent } from "./financial-area/financial-area.component";

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, PresentationComponent, FinancialAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

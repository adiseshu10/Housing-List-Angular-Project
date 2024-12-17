import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
  <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/16304.png" alt="logo" aria-hidden="true" style="height:100px;width:100px;"/>
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}

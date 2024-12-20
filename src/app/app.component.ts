import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, FormsModule],
  template: `
  <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/16304.png" alt="logo" aria-hidden="true" style="height:50px;width:50px;"/>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}

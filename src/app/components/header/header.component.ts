import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';

import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NavComponent, RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  openLanguageSelector() {
    // Dummy function to open language selector
  }

  openSearch() {
    // Dummy function to open search
  }
}

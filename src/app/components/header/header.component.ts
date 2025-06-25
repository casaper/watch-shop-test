import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, NavComponent, RouterModule, RouterLink],
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

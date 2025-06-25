import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  /**
   * Only affects viewports smaller than sm
   */
  closed = signal<boolean>(true);

  toggleMenu(override?: boolean) {
    this.closed.update((closed) => (typeof override === 'boolean' ? override : !closed));
  }
}

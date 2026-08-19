import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ScrollDirection = 'down' | 'up' | 'left' | 'right';

@Component({
  selector: 'app-scroll-component',
  templateUrl: './scrollComponent.component.html',
  styleUrl: './scrollComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollComponent {
  readonly direction = input<ScrollDirection>('down');
  readonly email = input('michelkorfmacher@yahoo.de');
}

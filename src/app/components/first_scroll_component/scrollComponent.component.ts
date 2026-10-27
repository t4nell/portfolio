import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { LanguageService } from '../../core/language/language.service';

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
  readonly lang = inject(LanguageService);
}

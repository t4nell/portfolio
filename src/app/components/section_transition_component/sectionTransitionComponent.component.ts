import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ArrowDirection = 'down-left' | 'down-right';

@Component({
  selector: 'app-section-transition-component',
  templateUrl: './sectionTransitionComponent.component.html',
  styleUrl: './sectionTransitionComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionTransitionComponent {
  readonly direction = input<ArrowDirection>('down-left');
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ArrowDirection = 'down-left' | 'down-right';

@Component({
  selector: 'app-second-scroll-component',
  templateUrl: './secondScrollComponent.component.html',
  styleUrl: './secondScrollComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondScrollComponent {
  readonly direction = input<ArrowDirection>('down-left');
}

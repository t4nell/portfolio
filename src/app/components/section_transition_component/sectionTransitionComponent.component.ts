import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  input,
  signal,
  viewChild
} from '@angular/core';

export type ArrowDirection = 'down-left' | 'down-right';

@Component({
  selector: 'app-section-transition-component',
  templateUrl: './sectionTransitionComponent.component.html',
  styleUrl: './sectionTransitionComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionTransitionComponent {
  readonly direction = input<ArrowDirection>('down-left');
  readonly nudged = signal(false);

  private readonly arrow = viewChild<ElementRef<HTMLImageElement>>('arrow');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const element = this.arrow()?.nativeElement;
      if (!element) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio >= 1) {
            this.nudged.set(true);
          } else if (entry.intersectionRatio === 0) {
            this.nudged.set(false);
          }
        },
        { threshold: [0, 1] }
      );

      observer.observe(element);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}

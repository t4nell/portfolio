import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  readonly showArrow = input(true);
  readonly legalClick = output<void>();

  onLegalClick(event: Event): void {
    event.preventDefault();
    this.legalClick.emit();
  }
}

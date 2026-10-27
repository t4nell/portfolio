import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { LanguageService } from '../../core/language/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  readonly showArrow = input(true);
  readonly legalClick = output<void>();
  readonly lang = inject(LanguageService);

  onLegalClick(event: Event): void {
    event.preventDefault();
    this.legalClick.emit();
  }
}

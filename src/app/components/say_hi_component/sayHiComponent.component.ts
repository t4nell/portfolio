import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { Footer } from '../../layout/footer/footer';
import { LanguageService } from '../../core/language/language.service';

@Component({
  selector: 'app-say-hi-component',
  imports: [Footer],
  templateUrl: './sayHiComponent.component.html',
  styleUrl: './sayHiComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SayHiComponent {
  readonly legalClick = output<void>();
  readonly privacyClick = output<void>();
  readonly lang = inject(LanguageService);

  onPrivacyClick(event: Event): void {
    event.preventDefault();
    this.privacyClick.emit();
  }
}

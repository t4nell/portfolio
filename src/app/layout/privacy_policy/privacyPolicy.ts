import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { Footer } from '../footer/footer';
import { LanguageService } from '../../core/language/language.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [Footer],
  templateUrl: './privacyPolicy.html',
  styleUrl: './privacyPolicy.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicy {
  readonly backClick = output<void>();
  readonly legalClick = output<void>();
  readonly lang = inject(LanguageService);
}

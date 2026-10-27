import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { Footer } from '../footer/footer';
import { LanguageService } from '../../core/language/language.service';

@Component({
  selector: 'app-legal-notice',
  imports: [Footer],
  templateUrl: './legalNotice.html',
  styleUrl: './legalNotice.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegalNotice {
  readonly backClick = output<void>();
  readonly lang = inject(LanguageService);
}

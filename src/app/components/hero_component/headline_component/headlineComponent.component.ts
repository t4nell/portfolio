import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/language/language.service';

@Component({
  selector: 'app-headline-component',
  templateUrl: './headlineComponent.component.html',
  styleUrl: './headlineComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadlineComponent {
  readonly lang = inject(LanguageService);
}

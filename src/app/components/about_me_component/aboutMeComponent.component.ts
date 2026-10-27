import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language/language.service';

@Component({
  selector: 'app-about-me-component',
  templateUrl: './aboutMeComponent.component.html',
  styleUrl: './aboutMeComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { id: 'about' }
})
export class AboutMeComponent {
  readonly lang = inject(LanguageService);
}

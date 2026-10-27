import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language/language.service';

@Component({
  selector: 'app-skills-component',
  templateUrl: './skillsComponent.component.html',
  styleUrl: './skillsComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { id: 'skills' }
})
export class SkillsComponent {
  readonly lang = inject(LanguageService);
}

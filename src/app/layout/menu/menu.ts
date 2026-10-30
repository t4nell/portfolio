import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { LanguageService } from '../../core/language/language.service';
import { socials } from '../../core/socials';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Menu {
  readonly navigate = output<string>();
  readonly lang = inject(LanguageService);
  readonly socials = socials;

  onNavigate(event: Event, sectionId: string): void {
    event.preventDefault();
    this.navigate.emit(sectionId);
  }
}

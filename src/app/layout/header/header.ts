import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../core/language/language.service';
import { Lang } from '../../core/language/translations';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  readonly menuOpen = input(false);
  readonly menuToggle = output<void>();
  readonly logoClick = output<void>();

  readonly lang = inject(LanguageService);

  onLogoClick(event: Event): void {
    event.preventDefault();
    this.logoClick.emit();
  }

  setLang(language: Lang): void {
    this.lang.setLang(language);
  }
}

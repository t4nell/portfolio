import { computed, Injectable, signal } from '@angular/core';
import { Lang, translations, Translations } from './translations';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.readStoredLang());
  readonly t = computed<Translations>(() => translations[this.lang()]);

  setLang(lang: Lang): void {
    this.lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }

  private readStoredLang(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY);
    const lang: Lang = stored === 'de' ? 'de' : 'en';
    document.documentElement.lang = lang;
    return lang;
  }
}

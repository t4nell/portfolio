import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/language/language.service';
import { Lang } from '../../core/language/translations';

interface Reference {
  name: string;
  role: Record<Lang, string>;
  text: Record<Lang, string>;
}

@Component({
  selector: 'app-references-component',
  templateUrl: './referencesComponent.component.html',
  styleUrl: './referencesComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesComponent {
  readonly lang = inject(LanguageService);

  private readonly referenceData: Reference[] = [
    {
      name: 'Ngoc-Khang Duong',
      role: {
        en: 'Team Partner',
        de: 'Team-Partner'
      },
      text: {
        en: 'Working with Michel went really well. He took responsibility, didn\'t shy away from harder tasks, and his structural thinking in complex HTML helped a lot. I\'d work with him again anytime.',
        de: 'Die Zusammenarbeit mit Michel lief wirklich gut. Er hat Verantwortung übernommen, sich vor schwierigeren Aufgaben nicht gescheut, und sein strukturelles Denken bei komplexem HTML hat sehr geholfen. Ich würde jederzeit wieder mit ihm arbeiten.'
      }
    },
    {
      name: 'N. siewert',
      role: {
        en: 'Team Partner',
        de: 'Team-Partner'
      },
      text: {
        en: 'Michel is an very important part of our project. Thanks to him, we overcame many problems. He is always reliable and has smart ideas to challenge every difficulty.',
        de: 'Michel ist ein sehr wichtiger Teil unseres Projekts. Dank ihm haben wir viele Probleme gelöst. Er ist immer zuverlässig und hat kluge Ideen, um jede Schwierigkeit anzugehen.'
      }
    },
    {
      name: '',
      role: { en: '', de: '' },
      text: { en: '', de: '' }
    }
  ];

  readonly references = computed(() => {
    const current = this.lang.lang();
    return this.referenceData.map((reference) => ({
      name: reference.name,
      role: reference.role[current],
      text: reference.text[current]
    }));
  });
}

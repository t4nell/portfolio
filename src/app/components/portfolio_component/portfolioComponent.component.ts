import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/language/language.service';
import { Lang } from '../../core/language/translations';

interface Project {
  name: string;
  skills: string;
  description: Record<Lang, string>;
  image: string;
  link: string;
  github: string;
}

@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolioComponent.component.html',
  styleUrl: './portfolioComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { id: 'portfolio' }
})
export class PortfolioComponent {
  readonly lang = inject(LanguageService);

  private readonly projectData: Project[] = [
    {
      name: 'Poll-App',
      skills: 'Figma | Angular | TypeScript | HTML | CSS | Supabase',
      description: {
        en: 'Survey app for creating and taking polls. Browse surveys, \nadd questions with answer options and store responses \nin a Supabase database.',
        de: 'Umfrage-App zum Erstellen und Ausfüllen von Polls. Umfragen durchstöbern, \nFragen mit Antwortoptionen hinzufügen und Antworten \nin einer Supabase-Datenbank speichern.'
      },
      image: '/assets/images/pollApp.png',
      link: '#',
      github: 'https://github.com/t4nell/pollapp'
    },
    {
      name: 'Sucublood',
      skills: 'Figma | JavaScript | HTML | CSS | OOP | Canvas',
      description: {
        en: 'Jump-and-run browser game built with the Canvas API. \nFight demons, collect items and defeat the end boss \nusing melee and ranged attacks.',
        de: 'Jump-and-Run-Browserspiel mit der Canvas API. \nBekämpfe Dämonen, sammle Items und besiege den Endboss \nmit Nah- und Fernkampf.'
      },
      image: '/assets/images/succblood.png',
      link: '#',
      github: 'https://github.com/t4nell/Succublood'
    },
    {
      name: 'Join',
      skills: 'Figma | TypeScript | HTML | CSS | Firebase',
      description: {
        en: 'Task manager inspired by the Kanban System. \nCreate and organize tasks using drag and drop functions, \nassign users and categories.',
        de: 'Task-Manager inspiriert vom Kanban-System. \nErstelle und organisiere Aufgaben per Drag and Drop, \nweise Nutzer und Kategorien zu.'
      },
      image: '/assets/images/join.png',
      link: '#',
      github: 'https://github.com/t4nell/Join-455'
    },
    {
      name: 'Pokedex',
      skills: 'Figma | Rest-API | JavaScript | HTML | CSS',
      description: {
        en: 'Pokémon encyclopedia powered by the PokeAPI. \nBrowse the catalog, inspect types and stats and \nopen detailed profiles for each Pokémon.',
        de: 'Pokémon-Enzyklopädie auf Basis der PokeAPI. \nDurchsuche den Katalog, sieh Typen und Stats an und \nöffne detaillierte Profile für jedes Pokémon.'
      },
      image: '/assets/images/pokemox.png',
      link: '#',
      github: 'https://github.com/t4nell/Pokedex'
    }
  ];

  readonly projects = computed(() => {
    const current = this.lang.lang();
    return this.projectData.map((project) => ({
      ...project,
      description: project.description[current]
    }));
  });
}

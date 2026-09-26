import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Project {
  name: string;
  skills: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolioComponent.component.html',
  styleUrl: './portfolioComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { id: 'portfolio' }
})

export class PortfolioComponent {
  readonly projects: Project[] = [
    { name: 'Poll-App', skills: 'Figma | Angular | TypeScript | HTML | CSS | Supabase', description: 'Survey app for creating and taking polls. Browse surveys, \nadd questions with answer options and store responses \nin a Supabase database.', image: '', link: '#' },
    { name: 'Sucublood', skills: 'Figma | JavaScript | HTML | CSS | OOP | Canvas', description: 'Jump-and-run browser game built with the Canvas API. \nFight demons, collect items and defeat the end boss \nusing melee and ranged attacks.', image: '', link: '#' },
    { name: 'Join', skills: 'Figma | TypeScript | HTML | CSS | Firebase', description: 'Task manager inspired by the Kanban System. \nCreate and organize tasks using drag and drop functions, \nassign users and categories.', image: '', link: '#' },
    { name: 'Pokedex', skills: 'Figma | Rest-API | JavaScript | HTML | CSS', description: 'Pokémon encyclopedia powered by the PokeAPI. \nBrowse the catalog, inspect types and stats and \nopen detailed profiles for each Pokémon.', image: '', link: '#' }
  ];
}

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
    { name: 'Poll-App', skills: '', description: 'Chat-App im Slack-Stil.', image: '', link: '#' },
    { name: 'Sucublood', skills: '', description: 'Jump-and-Run-Browsergame.', image: '', link: '#' },
    { name: 'Join', skills: 'Angular | TypeScript | HTML | CSS | Firebase', description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', image: '', link: '#' },
    { name: 'Pokedex', skills: '', description: 'Pokémon-Lexikon mit PokeAPI.', image: '', link: '#' }
  ];
}

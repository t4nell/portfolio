import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolioComponent.component.html',
  styleUrl: './portfolioComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
  readonly projects: Project[] = [
    { name: 'Join', description: 'Task-Manager im Kanban-Stil.', image: '', link: '#' },
    { name: 'Sucublood', description: 'Jump-and-Run-Browsergame.', image: '', link: '#' },
    { name: 'Poll-App', description: 'Chat-App im Slack-Stil.', image: '', link: '#' },
    { name: 'Pokedex', description: 'Pokémon-Lexikon mit PokeAPI.', image: '', link: '#' }
  ];
}

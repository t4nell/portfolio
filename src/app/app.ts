import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './components/about_me_component/aboutMeComponent.component';
import { HeroComponent } from './components/hero_component/heroComponent.component';
import { PortfolioComponent } from './components/portfolio_component/portfolioComponent.component';
import { ReferencesComponent } from './components/references_component/referencesComponent.component';
import { SayHiComponent } from './components/say_hi_component/sayHiComponent.component';
import { SectionTransitionComponent } from './components/section_transition_component/sectionTransitionComponent.component';
import { SkillsComponent } from './components/skills_component/skillsComponent.component';
import { Header } from './layout/header/header';
import { Menu } from './layout/menu/menu';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Menu,
    HeroComponent,
    AboutMeComponent,
    SectionTransitionComponent,
    SkillsComponent,
    PortfolioComponent,
    ReferencesComponent,
    SayHiComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }
}

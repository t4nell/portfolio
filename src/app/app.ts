import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './components/about_me_component/aboutMeComponent.component';
import { HeroComponent } from './components/hero_component/heroComponent.component';
import { PortfolioComponent } from './components/portfolio_component/portfolioComponent.component';
import { ReferencesComponent } from './components/references_component/referencesComponent.component';
import { SectionTransitionComponent } from './components/section_transition_component/sectionTransitionComponent.component';
import { SkillsComponent } from './components/skills_component/skillsComponent.component';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, HeroComponent, AboutMeComponent, SectionTransitionComponent, SkillsComponent, PortfolioComponent, ReferencesComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {}

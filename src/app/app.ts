import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './components/about_me_component/aboutMeComponent.component';
import { HeroComponent } from './components/hero_component/heroComponent.component';
import { SecondScrollComponent } from './components/second_scroll_component/secondScrollComponent.component';
import { SkillsComponent } from './components/skills_component/skillsComponent.component';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, HeroComponent, AboutMeComponent, SecondScrollComponent, SkillsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {}

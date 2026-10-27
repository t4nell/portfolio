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
import { LegalNotice } from './layout/legal_notice/legalNotice';
import { Menu } from './layout/menu/menu';
import { PrivacyPolicy } from './layout/privacy_policy/privacyPolicy';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Menu,
    LegalNotice,
    PrivacyPolicy,
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
  readonly legalOpen = signal(false);
  readonly privacyOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
    this.syncBodyScroll();
  }

  openLegal(): void {
    this.menuOpen.set(false);
    this.privacyOpen.set(false);
    this.legalOpen.set(true);
    this.syncBodyScroll();
    window.scrollTo({ top: 0 });
  }

  openPrivacy(): void {
    this.menuOpen.set(false);
    this.legalOpen.set(false);
    this.privacyOpen.set(true);
    this.syncBodyScroll();
    window.scrollTo({ top: 0 });
  }

  goToHero(): void {
    this.menuOpen.set(false);
    this.legalOpen.set(false);
    this.privacyOpen.set(false);
    this.syncBodyScroll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToSection(sectionId: string): void {
    this.menuOpen.set(false);
    this.legalOpen.set(false);
    this.privacyOpen.set(false);
    this.syncBodyScroll();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  private syncBodyScroll(): void {
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }
}

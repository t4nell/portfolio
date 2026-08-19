import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollComponent } from '../scroll_component/scrollComponent.component';
import { Header } from '../../layout/header/header';
import { HeadlineComponent } from './headline_component/headlineComponent.component';

@Component({
  selector: 'app-hero-component',
  imports: [Header, HeadlineComponent, ScrollComponent],
  templateUrl: './heroComponent.component.html',
  styleUrl: './heroComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {}

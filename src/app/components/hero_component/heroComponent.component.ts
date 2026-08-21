import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollComponent } from '../scroll_component/scrollComponent.component';
import { HeadlineComponent } from './headline_component/headlineComponent.component';

@Component({
  selector: 'app-hero-component',
  imports: [HeadlineComponent, ScrollComponent],
  templateUrl: './heroComponent.component.html',
  styleUrl: './heroComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {}

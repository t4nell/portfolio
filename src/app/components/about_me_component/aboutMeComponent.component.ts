import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-me-component',
  templateUrl: './aboutMeComponent.component.html',
  styleUrl: './aboutMeComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent {}

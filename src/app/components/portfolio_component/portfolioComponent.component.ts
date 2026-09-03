import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolioComponent.component.html',
  styleUrl: './portfolioComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {}

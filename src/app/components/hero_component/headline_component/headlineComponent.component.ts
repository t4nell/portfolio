import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-headline-component',
  templateUrl: './headlineComponent.component.html',
  styleUrl: './headlineComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadlineComponent {}

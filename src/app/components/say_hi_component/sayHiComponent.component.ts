import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-say-hi-component',
  templateUrl: './sayHiComponent.component.html',
  styleUrl: './sayHiComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SayHiComponent {}

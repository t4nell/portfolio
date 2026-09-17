import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-say-hi-component',
  imports: [Footer],
  templateUrl: './sayHiComponent.component.html',
  styleUrl: './sayHiComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SayHiComponent {}

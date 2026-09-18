import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Reference {
  name: string;
  role: string;
  text: string;
}

@Component({
  selector: 'app-references-component',
  templateUrl: './referencesComponent.component.html',
  styleUrl: './referencesComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesComponent {
  readonly references: Reference[] = [
    {
      name: 'Ngoc-Khang Duong',
      role: 'Team Partner',
      text: 'Working with Michel went really well. He took responsibility, didn\'t shy away from harder tasks, and his structural thinking in complex HTML helped a lot. I\'d work with him again anytime.'
    },
    {
      name: 'N. siewert',
      role: 'Team Partner',
      text: 'Michel is an very important part of our project. Thanks to him, we overcame many problems. He is always reliable and has smart ideas to challenge every difficulty.'
    },
    {
      name: '',
      role: '',
      text: ''
    }
  ];
}

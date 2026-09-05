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
      name: 'V. Schuster',
      role: 'Team Partner',
      text: 'Michel really kept the team together with his great organization and clear communication.'
    },
    {
      name: 'E. Eichinger',
      role: 'Team Partner',
      text: 'Michel was a top team colleague. His positive commitment made a significant contribution to achieving our goals.'
    },
    {
      name: 'I. Nuber',
      role: 'Frontend Engineer',
      text: 'It was a great pleasure to work with Michel. He knows how to push and encourage team members.'
    }
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills-component',
  templateUrl: './skillsComponent.component.html',
  styleUrl: './skillsComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {}

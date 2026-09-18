import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Menu {
  readonly navigate = output<string>();

  onNavigate(event: Event, sectionId: string): void {
    event.preventDefault();
    this.navigate.emit(sectionId);
  }
}

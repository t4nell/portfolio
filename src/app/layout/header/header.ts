import {
  ChangeDetectionStrategy,
  Component,
  input,
  output
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  readonly menuOpen = input(false);
  readonly menuToggle = output<void>();
  readonly logoClick = output<void>();

  onLogoClick(event: Event): void {
    event.preventDefault();
    this.logoClick.emit();
  }
}

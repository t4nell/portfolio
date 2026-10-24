import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-legal-notice',
  imports: [Footer],
  templateUrl: './legalNotice.html',
  styleUrl: './legalNotice.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegalNotice {}

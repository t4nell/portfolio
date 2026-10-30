import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  output,
  signal
} from '@angular/core';
import { Footer } from '../../layout/footer/footer';
import { LanguageService } from '../../core/language/language.service';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  selector: 'app-say-hi-component',
  imports: [Footer],
  templateUrl: './sayHiComponent.component.html',
  styleUrl: './sayHiComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SayHiComponent {
  readonly legalClick = output<void>();
  readonly privacyClick = output<void>();
  readonly lang = inject(LanguageService);

  readonly name = signal('');
  readonly email = signal('');
  readonly message = signal('');
  readonly privacyAccepted = signal(false);

  readonly nameTouched = signal(false);
  readonly emailTouched = signal(false);
  readonly messageTouched = signal(false);
  readonly privacyTouched = signal(false);

  readonly nameValid = computed(() => this.name().trim().length > 0);
  readonly emailValid = computed(() => EMAIL_PATTERN.test(this.email().trim()));
  readonly messageValid = computed(() => this.message().trim().length > 0);
  readonly privacyValid = computed(() => this.privacyAccepted());

  readonly showNameError = computed(() => this.nameTouched() && !this.nameValid());
  readonly showEmailError = computed(() => this.emailTouched() && !this.emailValid());
  readonly showMessageError = computed(() => this.messageTouched() && !this.messageValid());
  readonly showPrivacyError = computed(() => this.privacyTouched() && !this.privacyValid());

  readonly canSubmit = computed(
    () =>
      this.nameValid() &&
      this.emailValid() &&
      this.messageValid() &&
      this.privacyValid()
  );

  onNameInput(event: Event): void {
    this.name.set((event.target as HTMLInputElement).value);
  }

  onEmailInput(event: Event): void {
    this.email.set((event.target as HTMLInputElement).value);
  }

  onMessageInput(event: Event): void {
    this.message.set((event.target as HTMLTextAreaElement).value);
  }

  onPrivacyChange(event: Event): void {
    this.privacyAccepted.set((event.target as HTMLInputElement).checked);
    this.touchAll();
  }

  onNameBlur(): void {
    this.touchAll();
  }

  onEmailBlur(): void {
    this.touchAll();
  }

  onMessageBlur(): void {
    this.touchAll();
  }

  onPrivacyBlur(): void {
    this.touchAll();
  }

  onPrivacyClick(event: Event): void {
    event.preventDefault();
    this.privacyClick.emit();
  }

  private touchAll(): void {
    this.nameTouched.set(true);
    this.emailTouched.set(true);
    this.messageTouched.set(true);
    this.privacyTouched.set(true);
  }
}

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
const SEND_MAIL_URL = '/sendMail.php';

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

  readonly isSending = signal(false);
  readonly sendSuccess = signal(false);
  readonly sendError = signal(false);

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
      this.privacyValid() &&
      !this.isSending()
  );

  onNameInput(event: Event): void {
    this.name.set((event.target as HTMLInputElement).value);
    this.clearSendFeedback();
  }

  onEmailInput(event: Event): void {
    this.email.set((event.target as HTMLInputElement).value);
    this.clearSendFeedback();
  }

  onMessageInput(event: Event): void {
    this.message.set((event.target as HTMLTextAreaElement).value);
    this.clearSendFeedback();
  }

  onPrivacyChange(event: Event): void {
    this.privacyAccepted.set((event.target as HTMLInputElement).checked);
    this.touchAll();
    this.clearSendFeedback();
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

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    this.touchAll();
    this.clearSendFeedback();

    if (!this.canSubmit()) {
      return;
    }

    this.isSending.set(true);

    try {
      const response = await fetch(SEND_MAIL_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.name().trim(),
          email: this.email().trim(),
          message: this.message().trim()
        })
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
      } | null;

      if (!response.ok || !result?.success) {
        this.sendError.set(true);
        return;
      }

      this.sendSuccess.set(true);
      this.resetForm();
    } catch {
      this.sendError.set(true);
    } finally {
      this.isSending.set(false);
    }
  }

  private resetForm(): void {
    this.name.set('');
    this.email.set('');
    this.message.set('');
    this.privacyAccepted.set(false);
    this.nameTouched.set(false);
    this.emailTouched.set(false);
    this.messageTouched.set(false);
    this.privacyTouched.set(false);
  }

  private clearSendFeedback(): void {
    this.sendSuccess.set(false);
    this.sendError.set(false);
  }

  private touchAll(): void {
    this.nameTouched.set(true);
    this.emailTouched.set(true);
    this.messageTouched.set(true);
    this.privacyTouched.set(true);
  }
}

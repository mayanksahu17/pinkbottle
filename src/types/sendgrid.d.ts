// src/types/sendgrid.d.ts
import '@sendgrid/mail';

declare module '@sendgrid/mail' {
  interface MailDataRequired {
    dynamic_template_data?: { [key: string]: any };
  }
}

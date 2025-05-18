export interface RegisterDto {
    name: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    recaptchaToken: string;
  }
import 'express-session';

declare module 'express-session' {
  interface SessionData {
    value: string;
    isAuthenticated: boolean;
  }
}

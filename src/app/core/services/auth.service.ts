import { Injectable, signal } from '@angular/core';
import { supabase } from '../supabase.client';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private sessionSignal = signal<any>(null);

  constructor() {
    this.loadSession();
    supabase.auth.onAuthStateChange((_event, session) => {
      this.sessionSignal.set(session);
    });
  }

  async register(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data;
  }

  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    this.sessionSignal.set(data.session);
  }

  async logout() {
    await supabase.auth.signOut();
    this.sessionSignal.set(null);
  }

  get session() {
    return this.sessionSignal();
  }

  get currentUser() {
    return this.sessionSignal()?.user ?? null;
  }

  private async loadSession() {
    const { data } = await supabase.auth.getSession();
    this.sessionSignal.set(data.session);
  }

  isAuthenticated(): boolean {
    return !!this.sessionSignal();
  }
}

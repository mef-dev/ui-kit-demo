import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  standalone: false,
})
export class ThemeToggleComponent {
  private readonly storeKey = 'pref-theme';
  isDark = false;

  constructor() {
    // 1) читаємо saved state
    const saved = localStorage.getItem(this.storeKey);
    
    this.isDark = saved ? saved === 'dark' : false;
    this.applyTheme();
  }

  toggle(): void {
    this.isDark = !this.isDark;
    localStorage.setItem(this.storeKey, this.isDark ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    const root = document.documentElement;
    root.classList.toggle('theme-dark', this.isDark);
  }
}

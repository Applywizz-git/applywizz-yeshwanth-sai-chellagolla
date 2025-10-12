import { create } from 'zustand';

type Theme = 'dark' | 'light';
type Accent = 'default' | 'cyan' | 'indigo' | 'ruby';

interface ThemeState {
  theme: Theme;
  accent: Accent;
  setTheme: (theme: Theme) => void;
  setAccent: (accent: Accent) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: (typeof window !== 'undefined' && localStorage.getItem('skillverse-theme')) 
    ? JSON.parse(localStorage.getItem('skillverse-theme')!).state.theme 
    : 'dark',
  accent: (typeof window !== 'undefined' && localStorage.getItem('skillverse-theme')) 
    ? JSON.parse(localStorage.getItem('skillverse-theme')!).state.accent 
    : 'default',
  setTheme: (theme) => {
    set({ theme });
    applyTheme(theme, get().accent);
    if (typeof window !== 'undefined') {
      localStorage.setItem('skillverse-theme', JSON.stringify({ state: { theme, accent: get().accent } }));
    }
  },
  setAccent: (accent) => {
    set({ accent });
    applyTheme(get().theme, accent);
    if (typeof window !== 'undefined') {
      localStorage.setItem('skillverse-theme', JSON.stringify({ state: { theme: get().theme, accent } }));
    }
  },
  toggleTheme: () => {
    const newTheme = get().theme === 'dark' ? 'light' : 'dark';
    set({ theme: newTheme });
    applyTheme(newTheme, get().accent);
    if (typeof window !== 'undefined') {
      localStorage.setItem('skillverse-theme', JSON.stringify({ state: { theme: newTheme, accent: get().accent } }));
    }
  },
}));

function applyTheme(theme: Theme, accent: Accent) {
  const root = document.documentElement;
  
  // Apply theme
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
  } else {
    root.removeAttribute('data-theme');
  }
  
  // Apply accent
  if (accent !== 'default') {
    root.setAttribute('data-accent', accent);
  } else {
    root.removeAttribute('data-accent');
  }
}

// Initialize theme on load
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('skillverse-theme');
  if (stored) {
    try {
      const { state } = JSON.parse(stored);
      applyTheme(state.theme, state.accent);
    } catch (e) {
      // Invalid storage, use default
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      useThemeStore.getState().setTheme(prefersDark ? 'dark' : 'light');
    }
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    useThemeStore.getState().setTheme(prefersDark ? 'dark' : 'light');
  }
}

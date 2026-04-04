import { ref, watch } from 'vue';

const THEME_KEY = 'portfolio_theme';

// Available themes
export const THEMES = {
  GRAPHITE_TEAL: 'graphite-teal',
  SLATE_CYAN: 'slate-cyan',
  CVD_SAFE: 'cvd-safe'
};

// Global state
const currentTheme = ref(THEMES.GRAPHITE_TEAL);
const isInitialized = ref(false);

export function useTheme() {
  const initTheme = () => {
    if (isInitialized.value) return;
    
    // Check local storage
    const savedTheme = localStorage.getItem(THEME_KEY);
    
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      currentTheme.value = savedTheme;
    } else {
      // Default to graphite-teal (light base)
      currentTheme.value = THEMES.GRAPHITE_TEAL;
    }
    
    applyTheme(currentTheme.value);
    isInitialized.value = true;
  };

  const setTheme = (themeName) => {
    if (Object.values(THEMES).includes(themeName)) {
      currentTheme.value = themeName;
      localStorage.setItem(THEME_KEY, themeName);
      applyTheme(themeName);
    }
  };

  const applyTheme = (themeName) => {
    // Apply theme variable to documentElement
    document.documentElement.setAttribute('data-theme', themeName);
    
    // For backwards compatibility and some existing global styles, 
    // keep dark-mode class toggling based on theme nature
    if (themeName === THEMES.SLATE_CYAN) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return {
    currentTheme,
    THEMES,
    setTheme,
    initTheme
  };
}

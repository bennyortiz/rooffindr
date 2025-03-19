/**
 * Theme configuration
 */
export const themeConfig = {
  defaultTheme: 'light',
  themes: ['light', 'dark'] as const,
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  colors: {
    primary: {
      light: '#2563eb',
      dark: '#3b82f6',
    },
    text: {
      light: '#0f172a',
      dark: '#f8fafc',
    },
  },
  fonts: {
    sans: ['var(--font-jakarta-sans)', 'system-ui', 'sans-serif'],
    mono: ['var(--font-geist-mono)', 'monospace'],
  },
  animations: {
    fastFade: 'fade 150ms ease-in-out',
    fade: 'fade 300ms ease-in-out',
    slowFade: 'fade 500ms ease-in-out',
  },
}; 
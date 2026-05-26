import { dictionary, STORAGE_KEY, type Locale } from '../i18n/dictionary';

let currentLocale: Locale = 'en';

function detectDefaultLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'es') return stored;
  return 'en';
}

export function t(key: string): string {
  const row = dictionary[currentLocale] ?? dictionary.en;
  return row[key] ?? dictionary.en[key] ?? key;
}

export function getLocale(): Locale {
  return currentLocale;
}

export function applyDictionary(locale: Locale): void {
  currentLocale = locale;
  if (typeof document === 'undefined') return;

  document.documentElement.lang = locale === 'es' ? 'es' : 'en';
  localStorage.setItem(STORAGE_KEY, locale);

  const dict = dictionary[locale] ?? dictionary.en;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    const val = dict[key] ?? dictionary.en[key];
    if (val != null) el.textContent = val;
  });

  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (!key) return;
    const val = dict[key] ?? dictionary.en[key];
    if (val != null) el.placeholder = val;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (!key) return;
    const val = dict[key] ?? dictionary.en[key];
    if (val != null) el.setAttribute('aria-label', val);
  });

  const sel = document.getElementById('lang-select') as HTMLSelectElement | null;
  if (sel) sel.value = locale;

  if (typeof window !== 'undefined') {
    (window as unknown as { portfolioI18n: { t: typeof t; getLocale: typeof getLocale; apply: typeof applyDictionary } }).portfolioI18n = {
      t,
      getLocale,
      apply: applyDictionary,
    };
    window.dispatchEvent(new CustomEvent('portfolio-locale-changed', { detail: { locale } }));
  }
}

export function initI18n(): void {
  const run = () => {
    const locale = detectDefaultLocale();
    applyDictionary(locale);
    const sel = document.getElementById('lang-select') as HTMLSelectElement | null;
    if (sel && !sel.dataset.i18nWired) {
      sel.dataset.i18nWired = '1';
      sel.addEventListener('change', () => {
        const v = sel.value as Locale;
        if (v !== 'en' && v !== 'es') return;
        applyDictionary(v);
      });
    }
  };

  if (typeof document === 'undefined') return;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
}

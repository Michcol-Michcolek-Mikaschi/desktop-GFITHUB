import { normalizeAppLanguage, translate } from './i18n/locales'
import type { AppLanguage, TranslationKey } from './i18n/locales'

const appLanguageKey = 'app-language'

export function getPreferredAppLanguage(): AppLanguage {
  const stored = localStorage.getItem(appLanguageKey)
  if (stored === 'en' || stored === 'pl') {
    return stored
  }

  return normalizeAppLanguage(navigator.language)
}

export function setPreferredAppLanguage(language: AppLanguage): void {
  localStorage.setItem(appLanguageKey, language)
}

export function t(key: TranslationKey): string {
  return translate(key, getPreferredAppLanguage())
}

export { normalizeAppLanguage, translate }
export type { AppLanguage, TranslationKey }

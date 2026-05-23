export type AppLanguage = 'en' | 'pl'

export type TranslationKey =
  | 'preferences.title.macos'
  | 'preferences.title.other'
  | 'preferences.tab.accounts'
  | 'preferences.tab.integrations'
  | 'preferences.tab.copilot'
  | 'preferences.tab.git'
  | 'preferences.tab.appearance'
  | 'preferences.tab.notifications'
  | 'preferences.tab.prompts'
  | 'preferences.tab.advanced'
  | 'preferences.tab.accessibility'
  | 'preferences.save'
  | 'appearance.language.heading'
  | 'appearance.language.label'
  | 'appearance.language.option.english'
  | 'appearance.language.option.polish'
  | 'appearance.theme.heading'
  | 'appearance.theme.light'
  | 'appearance.theme.dark'
  | 'appearance.theme.system'
  | 'appearance.theme.loading'
  | 'appearance.formatting.heading'
  | 'appearance.formatting.date.macos'
  | 'appearance.formatting.date.other'
  | 'appearance.formatting.time.macos'
  | 'appearance.formatting.time.other'
  | 'appearance.formatting.number.macos'
  | 'appearance.formatting.number.other'
  | 'appearance.formatting.preferAbsoluteDates'
  | 'appearance.diff.heading'
  | 'appearance.diff.tabSize.macos'
  | 'appearance.diff.tabSize.other'
  | 'menu.help.label'
  | 'menu.help.userGuides'
  | 'menu.help.userGuidesPolish'
  | 'menu.help.keyboardShortcuts.macos'
  | 'menu.help.keyboardShortcuts.other'
  | 'menu.help.polishGuideRepo'

type TranslationMap = Readonly<Record<TranslationKey, string>>

const english: TranslationMap = {
  'preferences.title.macos': 'Settings',
  'preferences.title.other': 'Options',
  'preferences.tab.accounts': 'Accounts',
  'preferences.tab.integrations': 'Integrations',
  'preferences.tab.copilot': 'Copilot',
  'preferences.tab.git': 'Git',
  'preferences.tab.appearance': 'Appearance',
  'preferences.tab.notifications': 'Notifications',
  'preferences.tab.prompts': 'Prompts',
  'preferences.tab.advanced': 'Advanced',
  'preferences.tab.accessibility': 'Accessibility',
  'preferences.save': 'Save',
  'appearance.language.heading': 'Language',
  'appearance.language.label': 'Display language',
  'appearance.language.option.english': 'English',
  'appearance.language.option.polish': 'Polski',
  'appearance.theme.heading': 'Theme',
  'appearance.theme.light': 'Light',
  'appearance.theme.dark': 'Dark',
  'appearance.theme.system': 'System',
  'appearance.theme.loading': 'Loading system theme',
  'appearance.formatting.heading': 'Formatting',
  'appearance.formatting.date.macos': 'Date Format',
  'appearance.formatting.date.other': 'Date format',
  'appearance.formatting.time.macos': 'Time Format',
  'appearance.formatting.time.other': 'Time format',
  'appearance.formatting.number.macos': 'Number Format',
  'appearance.formatting.number.other': 'Number format',
  'appearance.formatting.preferAbsoluteDates':
    'Prefer absolute dates over relative',
  'appearance.diff.heading': 'Diff',
  'appearance.diff.tabSize.macos': 'Tab Size',
  'appearance.diff.tabSize.other': 'Tab size',
  'menu.help.label': '&Help',
  'menu.help.userGuides': 'Show User Guides',
  'menu.help.userGuidesPolish': 'Show User Guides (Polish)',
  'menu.help.keyboardShortcuts.macos': 'Show Keyboard Shortcuts',
  'menu.help.keyboardShortcuts.other': 'Show keyboard shortcuts',
  'menu.help.polishGuideRepo': 'Show Polish guide in repository',
}

const polish: TranslationMap = {
  'preferences.title.macos': 'Ustawienia',
  'preferences.title.other': 'Opcje',
  'preferences.tab.accounts': 'Konta',
  'preferences.tab.integrations': 'Integracje',
  'preferences.tab.copilot': 'Copilot',
  'preferences.tab.git': 'Git',
  'preferences.tab.appearance': 'Wygląd',
  'preferences.tab.notifications': 'Powiadomienia',
  'preferences.tab.prompts': 'Monity',
  'preferences.tab.advanced': 'Zaawansowane',
  'preferences.tab.accessibility': 'Dostępność',
  'preferences.save': 'Zapisz',
  'appearance.language.heading': 'Język',
  'appearance.language.label': 'Język interfejsu',
  'appearance.language.option.english': 'Angielski',
  'appearance.language.option.polish': 'Polski',
  'appearance.theme.heading': 'Motyw',
  'appearance.theme.light': 'Jasny',
  'appearance.theme.dark': 'Ciemny',
  'appearance.theme.system': 'Systemowy',
  'appearance.theme.loading': 'Wczytywanie motywu systemowego',
  'appearance.formatting.heading': 'Formatowanie',
  'appearance.formatting.date.macos': 'Format daty',
  'appearance.formatting.date.other': 'Format daty',
  'appearance.formatting.time.macos': 'Format czasu',
  'appearance.formatting.time.other': 'Format czasu',
  'appearance.formatting.number.macos': 'Format liczb',
  'appearance.formatting.number.other': 'Format liczb',
  'appearance.formatting.preferAbsoluteDates':
    'Preferuj daty bezwzględne zamiast względnych',
  'appearance.diff.heading': 'Diff',
  'appearance.diff.tabSize.macos': 'Rozmiar tabulatora',
  'appearance.diff.tabSize.other': 'Rozmiar tabulatora',
  'menu.help.label': '&Pomoc',
  'menu.help.userGuides': 'Pokaż przewodniki użytkownika',
  'menu.help.userGuidesPolish': 'Pokaż przewodniki użytkownika (po polsku)',
  'menu.help.keyboardShortcuts.macos': 'Pokaż skróty klawiaturowe',
  'menu.help.keyboardShortcuts.other': 'Pokaż skróty klawiaturowe',
  'menu.help.polishGuideRepo': 'Pokaż polski poradnik w repozytorium',
}

const translations: Readonly<Record<AppLanguage, TranslationMap>> = {
  en: english,
  pl: polish,
}

export function normalizeAppLanguage(
  language: string | null | undefined
): AppLanguage {
  if (language?.toLowerCase().startsWith('pl')) {
    return 'pl'
  }

  return 'en'
}

export function translate(key: TranslationKey, language: AppLanguage): string {
  const lang = translations[language]
  return lang[key] ?? english[key]
}

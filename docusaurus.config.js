// docusaurus.config.js
import {themes as githubThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Italy Guide',
  tagline: 'Гайд по переезду и жизни в Италии',

  // Укажите ваш домен или адрес github pages
  url: 'https://iioblomov.github.io', 
  baseUrl: '/italy-guide/', // Если репозиторий называется YOUR_GITHUB_USERNAME.github.io, то '/', иначе '/имя-репозитория/'

  organizationName: 'iioblomov', // Ваш логин на GitHub
  projectName: 'italy-guide', // Имя вашего репозитория
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Настройка мультиязычности (RU по умолчанию, EN как опция)
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    localeConfigs: {
      ru: { label: 'RU' },
      en: { label: 'EN' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebar.js',
          routeBasePath: 'guide', // Изменяем /docs/ на /guide/ для красоты
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Все посты',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    // Плагин локального поиска (работает мгновенно без внешних серверов)
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        language: ["ru", "en"],
        docsRouteBasePath: "guide",
      }),
    ],
    // Плагин PWA (загрузка на телефон и офлайн режим)
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'mobile'],
        pwaHead: [
          { tagName: 'meta', name: 'theme-color', content: '#009351' }, // Итальянский зеленый
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Italy Guide',
        items: [
          { type: 'docSidebar', sidebarId: 'guideSidebar', position: 'left', label: 'Гайд' },
          { to: '/ai-chat', label: 'ИИ Чат', position: 'left' },
          { to: '/rent', label: 'Жилье в аренду', position: 'left' },
          { to: '/blog', label: 'Блог', position: 'left' },
          { to: '/about', label: 'О нас', position: 'left' },
          { type: 'localeDropdown', position: 'right' }, // Переключатель языков
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Italy Guide.`,
      },
      prism: {
        theme: githubThemes.github,
        darkTheme: githubThemes.dracula,
      },
    }),
};

export default config;

# Проектирование современных информационных систем (СПбПУ)

[Slidev](https://sli.dev)-курс из 11 презентаций для Санкт-Петербургского Политехнического
Университета Петра Великого. Покрывает архитектуру и проектирование информационных
систем: BPMN, C4-модель, Camunda, микросервисы, распределённые системы,
требования и др.
Развернут на Netlify: https://warm-fox-8c8aae.netlify.app/

## Содержание

- `slides.md` — точка входа Slidev, импортирует слайды из `pages/`
- `pages/title.md` — титульный слайд
- `pages/introduction.md` — введение в курс
- `pages/lesson1.md` … `pages/lesson11.md` — слайды занятий (11 шт.)
- `public/` — статические ассеты (BPMN, C4, Camunda, микросервисы и т.п.)
- `netlify.toml` — конфиг деплоя в Netlify (build, SPA-fallback, Node 20)
- `package.json` — Slidev CLI и npm-скрипты
- `slides.md` — точка входа Slidev
- `style.css` — стили CSS
- `vite.config.ts` — конфигурационный файл Vite

## Структура проекта

```
.
├── netlify.toml                 # Netlify build/publish/redirects config
├── pages/
│   ├── title.md                 # титульный слайд
│   ├── introduction.md          # введение в курс
│   └── lesson1.md … lesson11.md # слайды занятий (11 шт.)
├── public/                      # статические ассеты, отдаваемые Vite
├── package.json                 # Slidev CLI & npm-скрипты
├── README.md                    # этот файл
├── slides.md                    # точка входа Slidev
├── style.css                    # стили CSS
└── vite.config.ts               # конфигурационный файл Vite
```

## Требования

- **Node.js** ≥ 18.0
- **npm** ≥ 9 (bundled with Node.js 18+) or any compatible package manager (`pnpm`, `yarn`, `bun`)
- Optional, only for PDF export: a Chromium-based browser (`playwright`/`puppeteer`)

## Установка

From the project root:

```bash
npm install
```

## Запуск на локальной машине

```bash
npm run dev
```
Запустит Vite на **http://localhost:3030** и откроет презентацию в вашем браузере по умолчанию.  
Изменения в файле `slides.md` (и во всех импортированных ресурсах) отображаются в режиме реального времени.

Если вы не хотите, чтобы вкладка браузера открывалась автоматически, используйте:

```bash
npm run start
```

## Деплой в продашкен

```bash
npm run build
```

Результат полностью автономен — это каталог с файлами `HTML`, `JS`, `CSS` и связанными ресурсами.
Его можно разместить на любом хостинге статических файлов. 

> **Пользовательский базовый путь** (требуется при размещении на вложенном пути, например на GitHub Pages):
> ```bash
> npm run build -- --base /<repo-name>/
> ```

### Экспорт в PDF

```bash
npm run export
```

Создает файл `slides-export.pdf` в корне проекта. Требуется наличие Playwright/Chromium 
(при первом использовании Slidev выведет инструкции по установке).

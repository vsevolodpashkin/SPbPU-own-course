---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Проектирование современных информационных систем
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
# duration of the presentation
duration: 35min
---

# Проектирование современных информационных систем

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Санкт-Петербургский Политехнический Университет Петра Великого</div>
<div class="mt-5 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: two-cols
---

# Краткая информация о себе

- 📝 - Техлид в компании Газпромбанк
- 🎨 - 5 лет профессиональной деятельности в ИТ
- 🛠 - R&D инженер в области механики жидкости и газа
<br>
Проекты:
- интегрированное моделирование в нефтегазе
- розничные банковские продуты
- госсистемы 

::right::

<img border="rounded" src="/public/image_001.jpg" alt="">

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: default
layoutClass: gap-8
---

# Структура курса

Цель: инженер-проектировщик ПО на минималках

<div grid="~ cols-3 gap-2" m="t-2">

```yaml
---
Бизнес-анализ
- ИТ-отрасль и продуктовый цикл
- Работа с требованиями
- Моделирование бизнес-процессов
---
```

```yaml
---
Инженерия ПО
- Компьютерные сети
- Распределнные системы и вычисления
- Базы данных
---
```

```yaml
Проектирование 
- Архитектура 
- Стили и тактики
- Документирование
---
```

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-default/01.png?raw=true" alt="">

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-seriph/01.png?raw=true" alt="">

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-seriph/01.png?raw=true" alt="">

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: default
---

# Ожидания по отчетности

|                                                     |                             |                       |
| --------------------------------------------------- | --------------------------- | --------------------- |
| Групповая практическая работа | <kbd>API спецификация</kbd> <kbd>Схема БД</kbd> /  |                       |
| Финальный проект |     <kbd>System design приложения </kbd>  / <kbd>Обоснование использованных тактик</kbd><kbd>Расчет стоимости проекта</kbd> |


<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>


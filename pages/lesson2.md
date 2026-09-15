---
hide: false
layout: center
---

# Бизнес-анализ

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 2. Контексты. Функциональные требования</div>
<div class="mt-5 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>

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

---
hide: false
layout: default
---

# 4 уровня моделирования системы

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Модель <strong class="text-gray-700">C4</strong> (Simon Brown) — иерархия представлений архитектуры от общего к частному:
  <strong class="text-gray-700">Контекст → Контейнеры → Компоненты → Код</strong>.
</p>

<!-- 4 уровня — карточки -->
<div class="grid grid-cols-4 gap-2.5 mt-3">

  <!-- L1: Контекст -->
  <div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-2.5">
    <div class="flex items-center gap-1.5 mb-1.5">
      <span class="bg-blue-600 text-white rounded px-1.5 py-0.5 font-mono font-bold text-[10px]">L1</span>
      <strong class="text-blue-900 text-xs">Контекст</strong>
    </div>
    <p class="text-[10.5px] text-gray-700 leading-snug mb-1">
      Система в окружении: пользователи, внешние системы и потоки данных между ними.
    </p>
    <p class="text-[10px] text-gray-500 italic">→ все стейкхолдеры</p>
  </div>

  <!-- L2: Контейнеры -->
  <div class="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-2.5">
    <div class="flex items-center gap-1.5 mb-1.5">
      <span class="bg-indigo-600 text-white rounded px-1.5 py-0.5 font-mono font-bold text-[10px]">L2</span>
      <strong class="text-indigo-900 text-xs">Контейнеры</strong>
    </div>
    <p class="text-[10.5px] text-gray-700 leading-snug mb-1">
      Приложения, БД, очереди — отдельные запускаемые процессы и выбранный стек технологий.
    </p>
    <p class="text-[10px] text-gray-500 italic">→ разработчики, DevOps</p>
  </div>

  <!-- L3: Компоненты -->
  <div class="bg-violet-50 border-2 border-violet-300 rounded-xl p-2.5">
    <div class="flex items-center gap-1.5 mb-1.5">
      <span class="bg-violet-600 text-white rounded px-1.5 py-0.5 font-mono font-bold text-[10px]">L3</span>
      <strong class="text-violet-900 text-xs">Компоненты</strong>
    </div>
    <p class="text-[10.5px] text-gray-700 leading-snug mb-1">
      Структурные блоки внутри контейнера: контроллеры, сервисы, репозитории.
    </p>
    <p class="text-[10px] text-gray-500 italic">→ архитекторы, разработчики</p>
  </div>

  <!-- L4: Код -->
  <div class="bg-fuchsia-50 border-2 border-fuchsia-300 rounded-xl p-2.5">
    <div class="flex items-center gap-1.5 mb-1.5">
      <span class="bg-fuchsia-600 text-white rounded px-1.5 py-0.5 font-mono font-bold text-[10px]">L4</span>
      <strong class="text-fuchsia-900 text-xs">Код</strong>
    </div>
    <p class="text-[10.5px] text-gray-700 leading-snug mb-1">
      Диаграммы классов, ER-схемы. Часто избыточен — код самодокументируем.
    </p>
    <p class="text-[10px] text-gray-500 italic">→ разработчики</p>
  </div>

</div>

<!-- Принцип zoom-in -->
<div class="mt-2.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-[11px] text-gray-700 leading-snug text-center">
  <strong class="text-gray-900">Принцип zoom-in:</strong>
  каждый следующий уровень детализирует <em>один</em> блок предыдущего.
  Начинайте с <strong class="text-blue-700">L1</strong> и углубляйтесь только там, где это добавляет ценность для аудитории.
</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-2">
  Источник: Simon Brown. <em>The C4 Model: Visualizing Software Architecture</em> —
  <a href="https://c4model.com" class="underline hover:text-gray-600">c4model.com</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/13">← Ценность контекстных диаграмм</a>
  <a href="/15">Контекстная диаграмма (C4 Level 1) →</a>
</div>

---
hide: false
layout: default
---

# Контекстная диаграмма (C4 Level 1)

<!-- Легенда нотации -->
<div class="mt-2 grid grid-cols-3 gap-2 text-[10px]">
  <div class="flex items-center gap-1.5 px-2 py-1 bg-blue-900 text-white rounded">
    <span class="w-2 h-2 rounded-sm bg-white"></span>
    <span class="font-medium">Person</span><span class="opacity-70">— пользователь системы</span>
  </div>
  <div class="flex items-center gap-1.5 px-2 py-1 bg-blue-600 text-white rounded">
    <span class="w-2 h-2 rounded-sm bg-white"></span>
    <span class="font-medium">Software System</span><span class="opacity-70">— в скоупе проекта</span>
  </div>
  <div class="flex items-center gap-1.5 px-2 py-1 bg-gray-500 text-white rounded">
    <span class="w-2 h-2 rounded-sm bg-white"></span>
    <span class="font-medium">External System</span><span class="opacity-70">— вне скоупа</span>
  </div>
</div>

<!-- Диаграмма -->
<div class="flex items-center justify-center mt-2">
  <img src="/c4-context.webp" alt="C4 Level 1 — контекстная диаграмма ИТ-системы предприятия" class="max-h-[380px] max-w-[860px] object-contain rounded shadow-md border border-gray-200 bg-white" />
</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-1.5">
  Нотация: C4 Model (Simon Brown, <a href="https://c4model.com" class="underline hover:text-gray-600">c4model.com</a>). Диаграмма построена в PlantUML.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/14">← 4 уровня моделирования системы</a>
  <a href="/lesson3">Занятие 3 →</a>
</div>

---
hide: false
layout: default
---

# Доменные контексты (DDD)

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Стратегическая классификация поддоменов по <strong class="text-gray-700">Эрику Эвансу</strong>:
  <strong class="text-gray-700">где создавать инновации, а что покупать</strong>.
</p>
<!-- 2 колонки: матрица слева, описания справа -->
<div class="grid grid-cols-2 gap-4 mt-3">

  <!-- ЛЕВАЯ КОЛОНКА: матрица -->
  <div>
    <div class="text-[10px] text-gray-500 mb-1 flex items-center gap-2">
      <span class="font-mono text-gray-700">Strategic Domain Chart</span>
      <span class="text-gray-300">·</span>
      <span>Важность × Сложность</span>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-2">
      <img src="/DDD.png" alt="DDD Strategic Domain Chart — Ядро, Поддерживающая, Общее" class="w-full max-h-[220px] object-contain" />
    </div>
    <!-- Источник -->
    <div class="text-[9px] text-gray-400 leading-tight italic text-center mt-2">
      Источник: Eric Evans. <em>Domain-Driven Design: Tackling Complexity in the Heart of Software</em> — Addison-Wesley, 2003.
    </div>
  </div>

  <!-- ПРАВАЯ КОЛОНКА: 3 карточки -->
  <div class="space-y-2 flex flex-col">
    <!-- 1. Ядро (Core) — зелёный (top-right на матрице) -->
    <div class="bg-green-50 border-2 border-green-300 rounded-xl p-2.5">
      <div class="flex items-center gap-1.5 mb-1.5">
        <span class="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-[10px]">1</span>
        <strong class="text-green-900 text-xs">Ядро (Core)</strong>
      </div>
      <p class="text-[10.5px] text-gray-700 leading-snug">
        <strong class="text-gray-900">Главное конкурентное преимущество</strong> (УТП). Здесь создаётся основная ценность, сюда инвестируется <strong class="text-gray-900">максимум ресурсов</strong> и талантов.
      </p>
    </div>
    <!-- 2. Поддерживающий (Supporting) — жёлтый (top-left на матрице) -->
    <div class="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-2.5">
      <div class="flex items-center gap-1.5 mb-1.5">
        <span class="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-[10px]">2</span>
        <strong class="text-yellow-900 text-xs">Поддерживающий (Supporting)</strong>
      </div>
      <p class="text-[10.5px] text-gray-700 leading-snug">
        <strong class="text-gray-900">Специфичен для нашего бизнеса</strong>, нужен для работы Ядра, но не является главным УТП. Может быть кастомным, но не требует инноваций мирового уровня.
      </p>
    </div>
    <!-- 3. Общий (Generic) — синий (bottom-right на матрице) -->
    <div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-2.5">
      <div class="flex items-center gap-1.5 mb-1.5">
        <span class="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-[10px]">3</span>
        <strong class="text-blue-900 text-xs">Общий (Generic)</strong>
      </div>
      <p class="text-[10.5px] text-gray-700 leading-snug">
        <strong class="text-gray-900">Стандартная функция</strong> без уникальной бизнес-ценности. Лучше <strong class="text-gray-900">купить (SaaS)</strong> или взять open-source, чтобы не отвлекать разработчиков.
      </p>
    </div>
  </div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/15">← Контекстная диаграмма (C4 Level 1)</a>
  <a href="/17">Бизнес по доставке еды →</a>
</div>

---
layout: default
hide: false
---

# Ценность контекстных диаграмм

<p class="text-sm opacity-70 italic -mt-2">Четыре причины, почему контекстная диаграмма — первый артефакт системного анализа</p>

<v-clicks>

<div class="bg-white border border-slate-200 rounded-lg p-1 mb-2 flex items-start gap-1 mt-2">
<span class="shrink-0 w-7 h-7 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-bold text-sm">1</span>
<div>
<strong class="text-sm text-slate-900">Предотвращение «разрастания границ» (Scope Creep)</strong>
<p class="text-xs text-slate-600 mt-1 leading-snug">Чёткое понимание контекста позволяет аргументированно отказывать стейкхолдерам в добавлении функционала, который выходит за рамки изначальных границ системы.</p>
</div>
</div>

<div class="bg-white border border-slate-200 rounded-lg p-1 mb-2 flex items-start gap-1">
<span class="shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">2</span>
<div>
<strong class="text-sm text-slate-900">Выявление точек интеграции</strong>
<p class="text-xs text-slate-600 mt-1 leading-snug">Позволяет заранее понять, сколько внешних систем нужно «стыковать», какие потребуются адаптеры и кто владеет данными на других концах.</p>
</div>
</div>

<div class="bg-white border border-slate-200 rounded-lg p-1 mb-2 flex items-start gap-1">
<span class="shrink-0 w-7 h-7 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold text-sm">3</span>
<div>
<strong class="text-sm text-slate-900">Управление рисками</strong>
<p class="text-xs text-slate-600 mt-1 leading-snug">Помогает увидеть «слепые зоны» - неучтенные системы или взаимодействия, без которых бизнес-процесс на сможет работать</p>
</div>
</div>

<div class="bg-white border border-slate-200 rounded-lg p-1 flex items-start gap-1">
<span class="shrink-0 w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">4</span>
<div>
<strong class="text-sm text-slate-900">Понимание ценности</strong>
<p class="text-xs text-slate-600 mt-1 leading-snug">Показывает, какую именно бизнес-проблему решает система во взаимодействии с внешним миром, не уходя в технические дебри.</p>
</div>
</div>

</v-clicks>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/12">← Занятие 1</a>
  <a href="/18">Занятие 3 →</a>
</div>


---
hide: false
layout: default
---

# Бизнес по доставке еды

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Конкретный пример разбивки продукта на домены по <strong class="text-gray-700">DDD-классификации</strong> —
  кейс food delivery (Яндекс Еда, Delivery Club, Uber Eats и подобные сервисы).
</p>

<!-- 3 колонки: Ядро / Поддерживающие / Общие -->
<div class="grid grid-cols-3 gap-3 mt-5">

  <!-- =============== ЯДРО (Core) =============== -->
  <div class="bg-red-50 border-2 border-red-300 rounded-xl p-3">
    <div class="flex items-center justify-between mb-3">
      <span class="bg-red-600 text-white rounded-md px-2 py-1 font-bold text-[10px] uppercase tracking-wider">Ядро</span>
      <span class="text-[10px] text-red-700 font-semibold">2 домена · УТП</span>
    </div>
    <div class="space-y-2">
      <div class="bg-white border border-red-200 rounded-lg p-2.5 flex items-center gap-3">
        <span class="shrink-0 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</span>
        <strong class="text-sm text-red-900 leading-snug">Исполнение заказа</strong>
      </div>
      <div class="bg-white border border-red-200 rounded-lg p-2.5 flex items-center gap-3">
        <span class="shrink-0 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</span>
        <strong class="text-sm text-red-900 leading-snug">Логистика</strong>
      </div>
    </div>
  </div>

  <!-- =============== ПОДДЕРЖИВАЮЩИЕ (Supporting) =============== -->
  <div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-3">
    <div class="flex items-center justify-between mb-3">
      <span class="bg-blue-600 text-white rounded-md px-2 py-1 font-bold text-[10px] uppercase tracking-wider">Поддерживающие</span>
      <span class="text-[10px] text-blue-700 font-semibold">3 домена · кастом</span>
    </div>
    <div class="space-y-2">
      <div class="bg-white border border-blue-200 rounded-lg p-2.5 flex items-center gap-3">
        <span class="shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</span>
        <strong class="text-sm text-blue-900 leading-snug">Каталог и меню</strong>
      </div>
      <div class="bg-white border border-blue-200 rounded-lg p-2.5 flex items-center gap-3">
        <span class="shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</span>
        <strong class="text-sm text-blue-900 leading-snug">Управление партнёрами</strong>
      </div>
      <div class="bg-white border border-blue-200 rounded-lg p-2.5 flex items-center gap-3">
        <span class="shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">5</span>
        <strong class="text-sm text-blue-900 leading-snug">Лояльность и маркетинг</strong>
      </div>
    </div>
  </div>

  <!-- =============== ОБЩИЕ (Generic) =============== -->
  <div class="bg-slate-50 border-2 border-slate-300 rounded-xl p-3">
    <div class="flex items-center justify-between mb-3">
      <span class="bg-slate-600 text-white rounded-md px-2 py-1 font-bold text-[10px] uppercase tracking-wider">Общие</span>
      <span class="text-[10px] text-slate-700 font-semibold">3 домена · купить / SaaS</span>
    </div>
    <div class="space-y-2">
      <div class="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center gap-3">
        <span class="shrink-0 bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">6</span>
        <strong class="text-sm text-slate-900 leading-snug">Коммуникации и уведомления</strong>
      </div>
      <div class="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center gap-3">
        <span class="shrink-0 bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">7</span>
        <strong class="text-sm text-slate-900 leading-snug">Служба поддержки</strong>
      </div>
      <div class="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center gap-3">
        <span class="shrink-0 bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">8</span>
        <strong class="text-sm text-slate-900 leading-snug">Биллинг и финансы</strong>
      </div>
    </div>
  </div>

</div>

<!-- Принцип распределения -->
<div class="mt-4 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-[11px] text-gray-700 leading-snug text-center">
  <strong class="text-gray-900">Принцип:</strong>
  ресурсы разработки концентрируются на <strong class="text-red-700">2 доменах Ядра</strong> —
  именно они создают конкурентное преимущество и отличают продукт от конкурентов.
</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-2">
  Пример разобран по стратегической классификации Eric Evans. <em>Domain-Driven Design</em>, 2003.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/16">← Доменные контексты (DDD)</a>
  <a href="/23">От контекста к функциональным требованиям →</a>
</div>

---
hide: false
layout: default
---

# От контекста к функциональным требованиям

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Как из <strong class="text-gray-700">доменной модели</strong> и потоков данных рождаются функциональные требования —
  на примере <strong class="text-gray-700">фудтех-приложения</strong> (домен «Исполнение заказа»).
</p>

<!-- Pipeline (вертикальный) -->
<div class="mt-3 space-y-1.5">

  <!-- 1. Домен -->
  <div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-2.5 flex items-start gap-2.5">
    <span class="shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
    <div class="flex-1 min-w-0">
      <div class="flex items-baseline gap-2 mb-0.5">
        <strong class="text-blue-900 text-sm font-semibold">Домен</strong>
        <span class="text-[10px] text-blue-700 font-mono uppercase tracking-wider">Bounded Context</span>
      </div>
      <div class="text-[12.5px] text-gray-800">
        <strong>Исполнение заказа</strong> — <span class="text-gray-700">ядро бизнеса (Core Domain)</span>
      </div>
      <div class="text-[10px] text-gray-500 mt-0.5">
        Агрегаты: <code class="bg-white px-1 rounded font-mono">Order</code>,
        <code class="bg-white px-1 rounded font-mono">OrderItem</code>,
        <code class="bg-white px-1 rounded font-mono">Payment</code>
      </div>
    </div>
  </div>

  <div class="flex justify-center text-gray-400 text-sm leading-none">↓</div>

  <!-- 2. Use Case -->
  <div class="bg-green-50 border-2 border-green-300 rounded-xl p-2.5 flex items-start gap-2.5">
    <span class="shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
    <div class="flex-1 min-w-0">
      <div class="flex items-baseline gap-2 mb-0.5">
        <strong class="text-green-900 text-sm font-semibold">Сценарий использования</strong>
        <span class="text-[10px] text-green-700 font-mono uppercase tracking-wider">Use Case</span>
      </div>
      <div class="text-[12.5px] text-gray-800">
        <strong>«Оформить заказ»</strong> — <span class="text-gray-700">покупатель оформляет и оплачивает заказ в системе</span>
      </div>
      <div class="text-[10px] text-gray-500 mt-0.5">
        Актёр: <strong>Покупатель</strong> · Предусловие: авторизован, в корзине ≥ 1 товар
      </div>
    </div>
  </div>

  <div class="flex justify-center text-gray-400 text-sm leading-none">↓</div>

  <!-- 3. User Story -->
  <div class="bg-amber-50 border-2 border-amber-300 rounded-xl p-2.5 flex items-start gap-2.5">
    <span class="shrink-0 w-7 h-7 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
    <div class="flex-1 min-w-0">
      <div class="flex items-baseline gap-2 mb-0.5">
        <strong class="text-amber-900 text-sm font-semibold">Пользовательская история</strong>
        <span class="text-[10px] text-amber-700 font-mono uppercase tracking-wider">User Story</span>
      </div>
      <div class="text-[12px] text-gray-800 italic">
        «Как <strong>покупатель</strong>, я хочу <strong>оформить заказ с оплатой онлайн</strong>, чтобы получить еду без звонка в ресторан.»
      </div>
    </div>
  </div>

  <div class="flex justify-center text-gray-400 text-sm leading-none">↓</div>

  <!-- 4. Критерии приёмки -->
  <div class="bg-purple-50 border-2 border-purple-300 rounded-xl p-2.5 flex items-start gap-2.5">
    <span class="shrink-0 w-7 h-7 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
    <div class="flex-1 min-w-0">
      <div class="flex items-baseline gap-2 mb-1">
        <strong class="text-purple-900 text-sm font-semibold">Критерии приёмки</strong>
        <span class="text-[10px] text-purple-700 font-mono uppercase tracking-wider">Acceptance Criteria</span>
      </div>
      <div class="text-[11px] text-gray-800 grid grid-cols-2 gap-x-3 gap-y-0.5">
        <div><span class="text-emerald-600">✓</span> Заказ создан в БД</div>
        <div><span class="text-emerald-600">✓</span> Уведомление ресторану</div>
        <div><span class="text-emerald-600">✓</span> Оплата прошла</div>
        <div><span class="text-emerald-600">✓</span> Email-подтверждение</div>
      </div>
    </div>
  </div>

</div>

<!-- Принцип трансформации -->
<div class="mt-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-[11px] text-gray-700 leading-snug text-center">
  <strong class="text-gray-900">Принцип:</strong>
  на каждом шаге мы <em class="text-blue-700">сужаем</em> фокус —
  от <em class="text-blue-700">общего контекста</em> к <em class="text-purple-700">проверяемым критериям готовности</em>.
</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-1.5">
  Основано на практиках Domain-Driven Design (Eric Evans) и Use Case 2.0. Пример — фудтех-приложение из слайда «Бизнес по доставке еды».
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/21">← Бизнес по доставке еды</a>
  <a href="/24">Ценность контекстных диаграмм →</a>
</div>

---
hide: false
layout: default
---

# Шаблоны требований

<p class="text-sm opacity-70 italic -mt-2">Два базовых шаблона для спецификации функциональных требований с количественными показателями</p>

<div class="grid grid-cols-2 gap-4 mt-3">

<!-- =============== ШАБЛОН 1 =============== -->
<div class="bg-white border border-slate-200 rounded-lg p-3">
<div class="flex items-center gap-2 mb-2">
<span class="bg-blue-100 text-blue-700 rounded px-2 py-0.5 font-bold text-xs">№1</span>
<strong class="text-sm text-slate-900">С условиями эксплуатации</strong>
</div>

<div class="bg-slate-50 border border-slate-200 rounded p-2 mb-2 font-mono text-[11px] leading-relaxed text-slate-800">
<span class="text-blue-700 font-semibold">&lt;Система&gt;</span> должна <span class="text-emerald-700 font-semibold">&lt;выполняемая функция&gt;</span> не менее чем <span class="text-amber-700 font-semibold">&lt;количество&gt;</span> <span class="text-purple-700 font-semibold">&lt;объект&gt;</span> функционируя в <span class="text-rose-700 font-semibold">&lt;условия эксплуатации&gt;</span>.
</div>

<div class="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Пример</div>
<div class="text-[12px] text-slate-800 bg-emerald-50 border-l-4 border-emerald-500 px-2 py-1.5 rounded leading-snug">
Система должна <span class="font-bold">обрабатывать</span> не менее чем <span class="font-bold">1 000</span> <span class="font-bold">заявок</span> в час функционируя в <span class="font-bold">режиме промышленной эксплуатации</span>.
</div>
</div>

<!-- =============== ШАБЛОН 2 =============== -->
<div class="bg-white border border-slate-200 rounded-lg p-3">
<div class="flex items-center gap-2 mb-2">
<span class="bg-emerald-100 text-emerald-700 rounded px-2 py-0.5 font-bold text-xs">№2</span>
<strong class="text-sm text-slate-900">С регулярной частотой</strong>
</div>

<div class="bg-slate-50 border border-slate-200 rounded p-2 mb-2 font-mono text-[11px] leading-relaxed text-slate-800">
<span class="text-blue-700 font-semibold">&lt;Система&gt;</span> должна <span class="text-emerald-700 font-semibold">&lt;выполняемая функция&gt;</span> <span class="text-purple-700 font-semibold">&lt;объект&gt;</span> каждые <span class="text-amber-700 font-semibold">&lt;показатель производительности&gt;</span> <span class="text-orange-700 font-semibold">&lt;единица измерения&gt;</span>.
</div>

<div class="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Пример</div>
<div class="text-[12px] text-slate-800 bg-emerald-50 border-l-4 border-emerald-500 px-2 py-1.5 rounded leading-snug">
Система должна <span class="font-bold">сохранять</span> <span class="font-bold">резервную копию</span> каждые <span class="font-bold">6</span> <span class="font-bold">часов</span>.
</div>
</div>

</div>

<table class="w-full text-[10px] text-slate-500 mt-3 border-collapse">
  <thead>
    <tr class="border-b border-slate-300">
      <th class="text-left py-1 px-2 font-semibold text-slate-700">Параметр</th>
      <th class="text-left py-1 px-2 font-semibold text-blue-700">№1</th>
      <th class="text-left py-1 px-2 font-semibold text-emerald-700">№2</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-slate-100">
      <td class="py-1 px-2">Когда применять</td>
      <td class="py-1 px-2">Нужно задать производительность <em>в условиях</em></td>
      <td class="py-1 px-2">Нужно задать <em>регулярный</em> интервал операции</td>
    </tr>
    <tr class="border-b border-slate-100">
      <td class="py-1 px-2">Измеримая величина</td>
      <td class="py-1 px-2">Throughput / ёмкость за период</td>
      <td class="py-1 px-2">Период / частота операции</td>
    </tr>
    <tr>
      <td class="py-1 px-2">Ключевое ограничение</td>
      <td class="py-1 px-2">Условия эксплуатации обязательны</td>
      <td class="py-1 px-2">Единица измерения времени обязательна</td>
    </tr>
  </tbody>
</table>

<p class="text-[10px] text-slate-500 italic mt-2 text-center">
  Источник: Халл Э., Джексон К., Дик Дж. Разработка и управление требованиями / пер. с англ. — М. : ООО «И. Д. Вильямс», 2009. — 230 с.
</p>

---
hide: false
layout: default
---

# Пользовательская история

<p class="text-sm leading-snug -mt-3 text-gray-500">
Краткое описание требования от лица пользователя в трёх частях: <strong class="text-gray-700">роль → действие → выгода</strong>.
</p>

<!-- Шаблон User Story -->
<div class="mt-3 bg-indigo-50 border-2 border-indigo-300 rounded-xl p-4">
  <div class="text-center text-base leading-relaxed">
    <span class="text-indigo-700 font-medium">Как</span>
    <span class="inline-block mx-1.5 px-2.5 py-0.5 bg-white border border-indigo-300 rounded text-indigo-900 font-semibold text-sm">пользователь</span>
    <span class="text-indigo-700 font-medium">я хочу</span>
    <span class="inline-block mx-1.5 px-2.5 py-0.5 bg-white border border-indigo-300 rounded text-indigo-900 font-semibold text-sm">действие</span>
    <span class="text-indigo-700 font-medium">чтобы</span>
    <span class="inline-block mx-1.5 px-2.5 py-0.5 bg-white border border-indigo-300 rounded text-indigo-900 font-semibold text-sm">выгода / цель</span>
  </div>

  <!-- Конкретный пример -->
  <div class="mt-3 pt-2.5 border-t border-indigo-200">
    <div class="text-center text-[10px] uppercase tracking-wider text-indigo-500 font-semibold mb-1">пример</div>
    <div class="text-center text-sm leading-relaxed">
      <span class="text-indigo-700 font-medium">Как</span>
      <span class="inline-block mx-1 px-2 py-0.5 bg-cyan-100 border border-cyan-300 rounded text-cyan-900 font-medium">покупатель</span><span class="text-indigo-700 font-medium">,</span>
      <span class="text-indigo-700 font-medium">я хочу</span>
      <span class="inline-block mx-1 px-2 py-0.5 bg-amber-100 border border-amber-300 rounded text-amber-900 font-medium">добавить товар в корзину</span>
      <span class="text-indigo-700 font-medium">чтобы</span>
      <span class="inline-block mx-1 px-2 py-0.5 bg-emerald-100 border border-emerald-300 rounded text-emerald-900 font-medium">оформить заказ позже</span><span class="text-indigo-700 font-medium">.</span>
    </div>
  </div>
</div>

<!-- 3 компонента -->
<div class="grid grid-cols-3 gap-3 mt-3">

  <!-- 1. Пользователь -->
  <div class="bg-cyan-50 border-2 border-cyan-300 rounded-xl p-2.5">
    <div class="flex items-center gap-2 mb-1.5">
      <span class="flex-shrink-0 bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </span>
      <strong class="text-cyan-900 text-sm">Пользователь</strong>
    </div>
    <p class="text-xs text-gray-700 leading-snug">
      Каждая user story составляется на основе мнений и пожеланий <strong class="text-gray-900">целевой аудитории</strong>, поэтому важно отметить, <strong class="text-gray-900">кто именно</strong> этот пользователь.
    </p>
  </div>

  <!-- 2. Действие -->
  <div class="bg-amber-50 border-2 border-amber-300 rounded-xl p-2.5">
    <div class="flex items-center gap-2 mb-1.5">
      <span class="flex-shrink-0 bg-amber-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      </span>
      <strong class="text-amber-900 text-sm">Действие</strong>
    </div>
    <p class="text-xs text-gray-700 leading-snug">
      Что хочет сделать пользователь с помощью продукта или его функции.
    </p>
  </div>

  <!-- 3. Выгода / Цель -->
  <div class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-2.5">
    <div class="flex items-center gap-2 mb-1.5">
      <span class="flex-shrink-0 bg-emerald-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      </span>
      <strong class="text-emerald-900 text-sm">Выгода / Цель</strong>
    </div>
    <p class="text-xs text-gray-700 leading-snug">
      <strong class="text-gray-900">Конечная цель</strong> у пользователя — зачем ему совершать это действие.
    </p>
  </div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson1">← Занятие 1</a>
  <a href="/lesson3">Занятие 3 →</a>
</div>

---
hide: false
layout: default
---

# Сценарий использования (Use Case)

<p class="text-sm leading-snug -mt-3 text-gray-500">
Описание поведения системы при взаимодействии с <strong class="text-gray-700">актёром</strong> для достижения конкретной цели. Содержит предусловия, основной сценарий и постусловия.
</p>

<div class="grid grid-cols-2 gap-5 mt-3">

<!-- ЛЕВАЯ КОЛОНКА: UML-диаграмма -->
<div>
  <div class="text-xs text-gray-500 mb-1 flex items-center gap-2">
    <span class="font-mono text-gray-700">UML Use Case</span>
    <span class="text-gray-300">·</span>
    <span>диаграмма</span>
  </div>
  <div class="bg-blue-50/40 border border-blue-200 rounded-xl p-2">
    <svg viewBox="0 0 420 280" class="w-full" text-rendering="optimizeLegibility">
      <!-- Системная граница -->
      <rect x="105" y="22" width="305" height="240" fill="white" fill-opacity="0.6" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3" rx="6"/>
      <text x="257" y="16" text-anchor="middle" fill="#475569" style="font:600 11px sans-serif">Интернет-магазин</text>
      <!-- Актёр (человечек) -->
      <g stroke="#475569" stroke-width="1.5" fill="none" stroke-linecap="round">
        <circle cx="45" cy="118" r="10" fill="white"/>
        <line x1="45" y1="128" x2="45" y2="168"/>
        <line x1="30" y1="143" x2="60" y2="143"/>
        <line x1="45" y1="168" x2="33" y2="193"/>
        <line x1="45" y1="168" x2="57" y2="193"/>
      </g>
      <text x="45" y="216" text-anchor="middle" fill="#1e293b" style="font:600 11px sans-serif">Покупатель</text>
      <!-- Use case овалы -->
      <ellipse cx="180" cy="80" rx="60" ry="22" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="180" y="80" text-anchor="middle" dominant-baseline="central" fill="#1e40af" style="font:500 11px sans-serif">Зарегистрироваться</text>
      <ellipse cx="335" cy="80" rx="55" ry="22" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="335" y="80" text-anchor="middle" dominant-baseline="central" fill="#1e40af" style="font:500 11px sans-serif">Найти товар</text>
      <ellipse cx="180" cy="180" rx="62" ry="22" fill="#dbeafe" stroke="#2563eb" stroke-width="2.2"/>
      <text x="180" y="180" text-anchor="middle" dominant-baseline="central" fill="#1e3a8a" style="font:600 11px sans-serif">Оформить заказ</text>
      <ellipse cx="335" cy="180" rx="55" ry="22" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="335" y="180" text-anchor="middle" dominant-baseline="central" fill="#1e40af" style="font:500 11px sans-serif">Оставить отзыв</text>
      <!-- Связи актер → use cases -->
      <line x1="55" y1="133" x2="125" y2="80" stroke="#64748b" stroke-width="1.2"/>
      <line x1="58" y1="143" x2="282" y2="80" stroke="#64748b" stroke-width="1.2"/>
      <line x1="58" y1="158" x2="123" y2="180" stroke="#2563eb" stroke-width="1.8"/>
      <line x1="60" y1="170" x2="282" y2="180" stroke="#64748b" stroke-width="1.2"/>
    </svg>
  </div>
</div>

<!-- ПРАВАЯ КОЛОНКА: пример с разметкой структуры -->
<div>
  <div class="text-xs text-gray-500 mb-1 flex items-center gap-2">
    <span class="font-mono text-gray-700">«Оформить заказ»</span>
    <span class="text-gray-300">·</span>
    <span>структура Use Case</span>
  </div>
  <div class="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs leading-snug space-y-1.5">
    <div class="flex gap-1.5"><span class="text-blue-600 font-semibold shrink-0 w-24">Актёр:</span><span class="text-gray-700">Покупатель (авторизован)</span></div>
    <div class="flex gap-1.5"><span class="text-blue-600 font-semibold shrink-0 w-24">Предусловие:</span><span class="text-gray-700">в корзине ≥ 1 товар</span></div>
    <div class="flex gap-1.5"><span class="text-blue-600 font-semibold shrink-0 w-24">Триггер:</span><span class="text-gray-700">покупатель жмёт «Оформить заказ»</span></div>
    <div class="flex gap-1.5"><span class="text-blue-600 font-semibold shrink-0 w-24">Сценарий:</span>
      <ol class="list-decimal ml-3 text-gray-700 space-y-0.5 marker:text-gray-400">
        <li>Система показывает форму адреса доставки</li>
        <li>Покупатель вводит адрес и подтверждает</li>
        <li>Система отображает способы оплаты</li>
        <li>Покупатель выбирает способ</li>
        <li>Система проводит оплату, создаёт заказ, шлёт email</li>
      </ol>
    </div>
    <div class="flex gap-1.5"><span class="text-blue-600 font-semibold shrink-0 w-24">Постусловие:</span><span class="text-gray-700">заказ в БД, оплата списана, email отправлен</span></div>
    <div class="flex gap-1.5"><span class="text-blue-600 font-semibold shrink-0 w-24">Альтернатива:</span><span class="text-gray-700">оплата отклонена → заказ не создаётся</span></div>
  </div>
</div>

</div>

<!-- Структурная формула -->
<div class="mt-2 text-center text-[10px] text-gray-500">
  <strong class="text-gray-700">Use Case =</strong>
  <span class="text-blue-600 font-medium">Актёр</span> +
  <span class="text-blue-600 font-medium">Предусловие</span> +
  <span class="text-blue-600 font-medium">Триггер</span> +
  <span class="text-blue-600 font-medium">Сценарий</span> +
  <span class="text-blue-600 font-medium">Постусловие</span> +
  <span class="text-blue-600 font-medium">Альтернативы</span>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/12">← Занятие 1</a>
  <a href="/18">Занятие 3 →</a>
</div>

---
hide: false
layout: default
---

# Чек-лист качества требований

<!-- 7 критериев -->
<div class="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-3 text-xs">
  <div class="flex gap-2 items-start">
    <svg class="flex-shrink-0 text-emerald-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
    <div><strong class="text-gray-900">Полнота</strong> — <span class="text-gray-700">все требования зафиксированы</span></div>
  </div>
  <div class="flex gap-2 items-start">
    <svg class="flex-shrink-0 text-emerald-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
    <div><strong class="text-gray-900">Структурированность</strong> — <span class="text-gray-700">ясная структура документа</span></div>
  </div>
  <div class="flex gap-2 items-start">
    <svg class="flex-shrink-0 text-emerald-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
    <div><strong class="text-gray-900">Непротиворечивость</strong> — <span class="text-gray-700">нет противоречий</span></div>
  </div>
  <div class="flex gap-2 items-start">
    <svg class="flex-shrink-0 text-emerald-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
    <div><strong class="text-gray-900">Удовлетворённость</strong> — <span class="text-gray-700">связи «удовлетворяется посредством» покрывают всё</span></div>
  </div>
  <div class="flex gap-2 items-start">
    <svg class="flex-shrink-0 text-emerald-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
    <div><strong class="text-gray-900">Отсутствие избыточности</strong> — <span class="text-gray-700">нет дублирования требований</span></div>
  </div>
  <div class="flex gap-2 items-start">
    <svg class="flex-shrink-0 text-emerald-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
    <div><strong class="text-gray-900">Модульность</strong> — <span class="text-gray-700">связанные требования в одном разделе</span></div>
  </div>
  <div></div>
  <div class="flex gap-2 items-start">
    <svg class="flex-shrink-0 text-emerald-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
    <div><strong class="text-gray-900">Тестируемость</strong> — <span class="text-gray-700">требования покрыты тестами</span></div>
  </div>
</div>

<!-- Хороший и плохой пример — компактнее -->
<div class="grid grid-cols-2 gap-4 mt-3">
  <div class="bg-red-50 border-l-4 border-red-500 rounded p-2">
    <div class="flex items-baseline gap-1.5">
      <span class="text-red-600 font-bold text-base leading-none">✗</span>
      <strong class="text-red-800 text-xs">«Система должна работать быстро»</strong>
    </div>
    <p class="text-[10px] text-gray-500 italic mt-0.5">расплывчато · не тестируемо · субъективно</p>
  </div>
  <div class="bg-emerald-50 border-l-4 border-emerald-500 rounded p-2">
    <div class="flex items-baseline gap-1.5">
      <span class="text-emerald-600 font-bold text-base leading-none">✓</span>
      <strong class="text-emerald-800 text-xs">«Система сохраняет результаты теста за ≤ 30 секунд»</strong>
    </div>
    <p class="text-[10px] text-gray-500 italic mt-0.5">конкретно · тестируемо · однозначно</p>
  </div>
</div>

<!-- Источник — в подвале -->
<div class="text-[8px] text-gray-400 leading-tight italic text-center mt-2">
  Источник: Халл Э., Джексон К., Дик Дж. <em>Инженерия требований: практ. руководство</em> / пер. с англ. А.&nbsp;Снастина — М.&nbsp;: ДМК Пресс, 2017. — 225&nbsp;с.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/23">← От контекста к функциональным требованиям</a>
  <a href="/lesson3">Занятие 3 →</a>
</div>

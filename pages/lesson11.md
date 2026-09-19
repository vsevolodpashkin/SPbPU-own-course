---
hide: true
layout: center
---

# Проектная сессия

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 1. Архитектурная ката</div>
<div class="mt-5 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/48">← C4 Level 2</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

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
hide: true
layout: default
---

# Архитектурные каты

<p class="text-sm opacity-70 italic -mt-2">Формализованное упражнение для тренировки архитектурного мышления вне проектной рутины</p>

<blockquote class="border-l-4 border-blue-500 bg-blue-50 pl-4 pr-3 py-2.5 my-2 italic text-sm text-slate-700">
  Архитектурная ката — это способ целенаправленно практиковать навыки архитектурного проектирования: берётся вымышленная задача с конкретными нефункциональными требованиями, и за ограниченное время нужно предложить архитектуру, которая им удовлетворяет; затем решение сравнивается с эталонным.
</blockquote>

<div class="grid grid-cols-2 gap-4 mt-3">

<!-- Production column -->
<div class="bg-white border border-slate-200 rounded-lg p-3">
<div class="flex items-center gap-2 mb-2">
<span class="bg-orange-100 text-orange-700 rounded px-2 py-0.5 font-bold text-xs">Production</span>
<strong class="text-sm text-slate-900">Работа на боевом проекте</strong>
</div>
<ul class="text-xs text-slate-700 leading-relaxed space-y-1">
<li>— Реальные сроки, бюджеты, согласования</li>
<li>— Легаси-код и технический долг</li>
<li>— Политики, устаревшие решения, риски</li>
<li>— Гетерогенная команда по уровню</li>
<li>— Ошибки дорого стоят (деньги/репутация)</li>
<li>— Решение привязано к конкретному контексту</li>
</ul>
</div>

<!-- Kata column -->
<div class="bg-white border border-slate-200 rounded-lg p-3">
<div class="flex items-center gap-2 mb-2">
<span class="bg-emerald-100 text-emerald-700 rounded px-2 py-0.5 font-bold text-xs">Kata</span>
<strong class="text-sm text-slate-900">Тренировка</strong>
</div>
<ul class="text-xs text-slate-700 leading-relaxed space-y-1">
<li>— Фиктивная задача с заданными NFR</li>
<li>— Жёсткий time-box (30 мин — 2 часа)</li>
<li>— Только текст требований и вы</li>
<li>— Чистый лист, нет легаси</li>
<li>— Ошибки ничего не стоят (throwaway)</li>
<li>— Сравнение с эталонным решением</li>
</ul>
</div>

</div>

<p class="text-xs text-slate-500 italic mt-3 text-center">
  Source: Richards M., Ford N. <em>Fundamentals of Software Architecture</em>. — Sebastopol, CA: O'Reilly Media, 2020. — 432 p. — ISBN 978-0-596-55555-1.
</p>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson12">Занятие 12 →</a>
</div>

---
hide: true
layout: default
---

# 1 шаг. Понять что требуется

<p class="text-sm opacity-70 italic -mt-2">Какие входные данные собираем и какие артефакты получаем на выходе первого шага</p>

<div class="grid grid-cols-2 gap-4 mt-2">

<!-- =============== ВХОД =============== -->
<div class="bg-blue-50 border-2 border-blue-200 rounded-lg p-2.5">
<h3 class="text-sm font-bold text-blue-900 mb-2 flex items-center gap-1">
<span class="bg-blue-500 text-white rounded px-2 py-0.5 font-bold text-xs">ВХОД</span>
Что анализируем
</h3>

<v-clicks>

<div class="bg-white border border-blue-200 rounded p-2 mb-1.5">
<strong class="text-xs text-blue-800">Контекст</strong>
<p class="text-xs text-slate-700 leading-snug mt-0.5">Краткое описание ИТ-решения, мотивация к его появлению. Пользователи и бизнес-цели.</p>
</div>

<div class="bg-white border border-blue-200 rounded p-2 mb-1.5">
<strong class="text-xs text-blue-800">Функциональные требования</strong>
<p class="text-xs text-slate-700 leading-snug mt-0.5">Функции, которые будут реализованы в компонентах системы.</p>
</div>

<div class="bg-white border border-blue-200 rounded p-2">
<strong class="text-xs text-blue-800">Нефункциональные требования</strong>
<p class="text-xs text-slate-700 leading-snug mt-0.5">Архитектурные характеристики, которые необходимо учесть при проектировании системы (с обоснованием их применения).</p>
</div>

</v-clicks>
</div>

<!-- =============== ВЫХОД =============== -->
<div class="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-2.5">
<h3 class="text-sm font-bold text-emerald-900 mb-2 flex items-center gap-2">
<span class="bg-emerald-500 text-white rounded px-2 py-0.5 font-bold text-xs">ВЫХОД</span>
Что получаем
</h3>

<v-clicks>

<div class="bg-white border border-emerald-200 rounded p-2 mb-1.5 flex items-start gap-2">
<span class="shrink-0 w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
<div>
<strong class="text-xs text-emerald-800">Мета-модель Системы</strong>
<p class="text-xs text-slate-600 leading-snug mt-0.5">Список доменов: ядро, вспомогтельные, внешние</p>
</div>
</div>

<div class="bg-white border border-emerald-200 rounded p-2 mb-1.5 flex items-start gap-2">
<span class="shrink-0 w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">2</span>
<div>
<strong class="text-xs text-emerald-800">Описание основных компонентов</strong>
<p class="text-xs text-slate-600 leading-snug mt-0.5">диаграмма компонентов</p>
</div>
</div>

<div class="bg-white border border-emerald-200 rounded p-2 mb-1.5 flex items-start gap-2">
<span class="shrink-0 w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">3</span>
<div>
<strong class="text-xs text-emerald-800">Спецификации основных интерфейсов</strong>
<p class="text-xs text-slate-600 leading-snug mt-0.5">API Системы</p>
</div>
</div>

<div class="bg-white border border-emerald-200 rounded p-2 flex items-start gap-2">
<span class="shrink-0 w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">4</span>
<div>
<strong class="text-xs text-emerald-800">Модель данных компонентов</strong>
<p class="text-xs text-slate-600 leading-snug mt-0.5">ER-диаграммы / схемы БД</p>
</div>
</div>

</v-clicks>
</div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson12">Занятие 12 →</a>
</div>

---
hide: true
layout: default
---

# Формализация задачи

<p class="text-sm opacity-70 italic -mt-2">Шаг 1 архитектурного проектирования: разложить задачу на четыре оси анализа</p>

<v-clicks>

<div class="bg-white border border-blue-200 rounded-lg p-2 mb-1.5 flex items-start gap-2.5">
<span class="shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
<div>
<strong class="text-sm text-blue-900">Scope</strong>
<p class="text-xs text-slate-700 leading-snug mt-0.5">Определить границы задачи (что делаем / что не делаем).</p>
</div>
</div>

<div class="bg-white border border-emerald-200 rounded-lg p-2 mb-1.5 flex items-start gap-2.5">
<span class="shrink-0 w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
<div>
<strong class="text-sm text-emerald-900">Функционал</strong>
<p class="text-xs text-slate-700 leading-snug mt-0.5">Сформировать список сценариев работы системы.</p>
</div>
</div>

<div class="bg-white border border-amber-200 rounded-lg p-2 mb-1.5 flex items-start gap-2.5">
<span class="shrink-0 w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
<div>
<strong class="text-sm text-amber-900">Качество (-ilities)</strong>
<p class="text-xs text-slate-700 leading-snug mt-0.5">Выявить критичные нефункциональные требования.</p>
</div>
</div>

<div class="bg-white border border-purple-200 rounded-lg p-2 flex items-start gap-2.5">
<span class="shrink-0 w-7 h-7 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
<div>
<strong class="text-sm text-purple-900">Trade-offs</strong>
<p class="text-xs text-slate-700 leading-snug mt-0.5">Расставить приоритеты и найти баланс между конкурирующими требованиями.</p>
</div>
</div>

</v-clicks>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson13">Занятие 13 →</a>
</div>

---
hide: true
layout: default
---

# Управление границами и интеграциями

<p class="text-sm opacity-70 italic -mt-2">Шаг 2 архитектурного проектирования: выбрать как именно компоненты будут общаться</p>

<v-clicks>

<div class="bg-white border border-blue-200 rounded-lg p-2 mb-1.5 flex items-start gap-2.5">
<span class="shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
<div>
<strong class="text-sm text-blue-900">Паттерны</strong>
<p class="text-xs text-slate-700 leading-snug mt-0.5">Выбрать стиль интеграции: Файлы · Shared DB · Sync RPC · Async Messaging.</p>
</div>
</div>

<div class="bg-white border border-emerald-200 rounded-lg p-2 mb-1.5 flex items-start gap-2.5">
<span class="shrink-0 w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
<div>
<strong class="text-sm text-emerald-900">Сценарии</strong>
<p class="text-xs text-slate-700 leading-snug mt-0.5">Спроектировать точки интеграции под конкретные Use Cases.</p>
</div>
</div>

<div class="bg-white border border-amber-200 rounded-lg p-2 mb-1.5 flex items-start gap-2.5">
<span class="shrink-0 w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
<div>
<strong class="text-sm text-amber-900">Протоколы</strong>
<p class="text-xs text-slate-700 leading-snug mt-0.5">Определить стиль API: REST · GraphQL · gRPC · AsyncAPI.</p>
</div>
</div>

<div class="bg-white border border-purple-200 rounded-lg p-2 flex items-start gap-2.5">
<span class="shrink-0 w-7 h-7 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
<div>
<strong class="text-sm text-purple-900">Контракты</strong>
<p class="text-xs text-slate-700 leading-snug mt-0.5">Зафиксировать спецификации и схемы данных.</p>
</div>
</div>

</v-clicks>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson13">Занятие 13 →</a>
</div>

---
hide: true
layout: default
---

# Ката: Сервис доставки еды

<p class="text-sm opacity-70 italic -mt-2">Учебный пример: спроектируйте систему с нуля за 30 минут, используя 4 актора и 2 архитектурных ограничения</p>

<!-- 1. Контекст -->
<div class="bg-blue-50 border-l-4 border-blue-500 rounded-r p-2 mb-2 flex items-start gap-2">
<span class="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs shrink-0">1</span>
<div>
<strong class="text-xs text-blue-900 uppercase tracking-wider">Контекст</strong>
<p class="text-xs text-slate-700 leading-snug mt-0.5">Компания хочет выйти на рынок с приложением по доставке еды из произвольного ресторана.</p>
</div>
</div>

<!-- 2. Функциональные требования -->
<div class="mb-2">
<div class="flex items-center gap-2 mb-1.5">
<span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs shrink-0">2</span>
<strong class="text-xs text-emerald-900 uppercase tracking-wider">Функциональные требования</strong>
</div>

<div class="grid grid-cols-3 gap-2">

<div class="bg-white border border-emerald-200 rounded p-2">
<div class="text-xs font-bold text-emerald-800 mb-1">👤 Пользователь</div>
<ul class="text-[11px] text-slate-700 leading-snug space-y-0.5">
<li>— Создать заказ</li>
<li>— Посмотреть статус заказа</li>
<li>— Отменить заказ</li>
</ul>
</div>

<div class="bg-white border border-emerald-200 rounded p-2">
<div class="text-xs font-bold text-emerald-800 mb-1">🍳 Кухня</div>
<ul class="text-[11px] text-slate-700 leading-snug space-y-0.5">
<li>— Уведомить курьера о старте готовности</li>
<li>— Уведомить клиента о передаче курьеру</li>
</ul>
</div>

<div class="bg-white border border-emerald-200 rounded p-2">
<div class="text-xs font-bold text-emerald-800 mb-1">🛵 Курьер</div>
<ul class="text-[11px] text-slate-700 leading-snug space-y-0.5">
<li>— Забрать готовый заказ</li>
<li>— Доставить заказ до клиента</li>
</ul>
</div>

</div>
</div>

<!-- 3. Нефункциональные требования -->
<div>
<div class="flex items-center gap-2 mb-1.5">
<span class="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs shrink-0">3</span>
<strong class="text-xs text-amber-900 uppercase tracking-wider">Нефункциональные требования</strong>
</div>

<div class="grid grid-cols-2 gap-2">

<div class="bg-amber-50 border border-amber-200 rounded p-2">
<div class="text-[11px] font-bold text-amber-800 mb-0.5">Согласованность данных</div>
<p class="text-[11px] text-slate-700 leading-snug">Согласованность данных во всех системах.</p>
</div>

<div class="bg-amber-50 border border-amber-200 rounded p-2">
<div class="text-[11px] font-bold text-amber-800 mb-0.5">Доступность</div>
<p class="text-[11px] text-slate-700 leading-snug">SLA 99.99% (four nines) — допускается простой не более ~53 мин/год.</p>
</div>

</div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson13">Занятие 13 →</a>
</div>

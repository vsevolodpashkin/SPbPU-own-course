---
hide: false
layout: center
---

# Практика

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Групповое занятие по бизнес-анализу</div>
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

# Разработка образовательной системы

<p class="text-xs opacity-70 italic -mt-2">
<em>Tales Of A Fourth Grade</em> — ката из каталога Neal Ford. Групповая работа 30–40 мин.
</p>

<!-- СЦЕНАРИЙ -->
<div class="bg-indigo-50 border-l-4 border-indigo-500 p-2 -mt-1">
  <span class="text-[11px] uppercase tracking-wider font-semibold text-indigo-900">📖 Сценарий</span>
  <p class="text-xs text-gray-800 leading-snug mt-0.5">
    Компания выводит на рынок SaaS-систему управления учащимися (SIS) для школьных округов. Принципы продукта:
    <strong>гибкость</strong>, <strong>конфигурируемость</strong>, <strong>безопасность</strong>. Стратегия продаж —
    <strong>агрессивная национальная кампания</strong>. Один конкурент на рынке недавно
    <span class="text-red-700 font-semibold">пострадал от крупной утечки данных</span> —
    безопасность PII теперь является обязательным маркетинговым аргументом.
  </p>
</div>

<div class="text-xs mt-2">
  <strong>👥 Пользователи:</strong>&nbsp;преподаватели&nbsp;·&nbsp;сотрудники округов&nbsp;·&nbsp;родители учащихся
</div>

<!-- Функциональные требования -->
<h3 class="text-[11px] font-semibold text-slate-600 uppercase tracking-wider mt-3 mb-1 flex items-center gap-2">
<span class="inline-block w-2 h-2 bg-slate-500 rounded-full"></span>
Функциональные требования · 8
</h3>

<div class="grid grid-cols-2 gap-x-5 gap-y-0.5 text-[11px] text-gray-800 leading-snug">

  <div>1.&nbsp; <strong>Учёт посещаемости:</strong> пропуски, опоздания, отговорки — вводят родители, преподаватели или персонал</div>
  <div>2.&nbsp; <strong>Масштаб:</strong> от 1&nbsp;000 до 1&nbsp;000&nbsp;000 учащихся (3 порядка)</div>
  <div>3.&nbsp; <strong>Отчёты</strong> о деятельности учащихся</div>
  <div>4.&nbsp; <strong>Частичный доступ без авторизации</strong> для обучающего контента (например, со школьной площадки)</div>
  <div>5.&nbsp; <strong>Оценки и задания:</strong> выполненные и подлежащие выполнению (due)</div>
  <div>6.&nbsp; <strong>Форумы</strong> родителей и преподавателей</div>
  <div>7.&nbsp; <strong>Развёртывание:</strong> SaaS из хостинг-центра</div>
  <div>8.&nbsp; <strong>Compliance:</strong> ФЗ-152 (персданные несовершеннолетних), FERPA, GDPR</div>

</div>

<!-- Цитата -->
<div class="text-[10px] text-gray-500 leading-tight italic text-center mt-2">
Источник каты:&nbsp;<em>Tales Of A Fourth Grade</em> /&nbsp;
<a href="https://nealford.com/katas/" class="underline" target="_blank" rel="noopener">Neal Ford — Architectural Katas</a>.
Адаптировано для курса.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson3">← Занятие 3</a>
  <a href="/lesson5">Занятие 5 →</a>
</div>

---
hide: false
layout: default
---

# Ранжированные бизнес-цели

<p class="text-sm opacity-70 italic -mt-2">
Три SMART-цели, которые должна поддерживать архитектура в кате <em>Tales Of A Fourth Grade</em>. Нумерация = приоритет заказчика.
</p>

<style scoped>
.rank-badge { flex-shrink: 0; width: 38px; height: 38px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 700; color: white; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.15); }
.rank-1 { background: linear-gradient(135deg, #10b981, #047857); }
.rank-2 { background: linear-gradient(135deg, #4f46e5, #3730a3); }
.rank-3 { background: linear-gradient(135deg, #0891b2, #0e7490); }
.metric-badge { background-color: #eff6ff; color: #1e3a8a; font-weight: 700; padding: 1px 9px; border-radius: 9999px; font-size: 11px; white-space: nowrap; border: 1.5px solid #93c5fd; }
</style>

<!-- Цель 1 -->
<div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-2 mt-2">
  <div class="flex gap-2.5 items-start">
    <div class="rank-badge rank-1">1</div>
    <div class="flex-1 min-w-0">
      <div class="flex items-baseline justify-between gap-2">
        <h3 class="text-sm font-semibold text-blue-900 leading-tight">Улучшение процессов отчётности</h3>
        <span class="metric-badge">×2 быстрее</span>
      </div>
      <p class="text-[11px] text-gray-800 leading-snug mt-0.5">
        Снижение <strong>среднего времени формирования отчётности</strong> в 2 раза vs прошлый кал. период.
      </p>
    </div>
  </div>
</div>

<!-- Цель 2 -->
<div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-2 mt-1.5">
  <div class="flex gap-2.5 items-start">
    <div class="rank-badge rank-2">2</div>
    <div class="flex-1 min-w-0">
      <div class="flex items-baseline justify-between gap-2">
        <h3 class="text-sm font-semibold text-blue-900 leading-tight">Рост лояльности родителей и заявлений</h3>
        <span class="metric-badge">+10%</span>
      </div>
      <p class="text-[11px] text-gray-800 leading-snug mt-0.5">
        Увеличение <strong>количества заявлений на поступление</strong> на 10% vs прошлый кал. период.
      </p>
    </div>
  </div>
</div>

<!-- Цель 3 -->
<div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-2 mt-1.5">
  <div class="flex gap-2.5 items-start">
    <div class="rank-badge rank-3">3</div>
    <div class="flex-1 min-w-0">
      <div class="flex items-baseline justify-between gap-2">
        <h3 class="text-sm font-semibold text-blue-900 leading-tight">Ускорение управленческих решений</h3>
        <span class="metric-badge">−30% времени</span>
      </div>
      <p class="text-[11px] text-gray-800 leading-snug mt-0.5">
        Сокращение на <strong>30% (от текущего) времени</strong> на принятие решений за счёт автоотчётности в гос. органы.
      </p>
    </div>
  </div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson3">← Занятие 3</a>
  <a href="/lesson5">Занятие 5 →</a>
</div>

---
hide: false
layout: default
---

# Заинтересованные лица

<div class="mt-3 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
<table class="w-full text-xs leading-snug border-collapse">
  <thead>
    <tr class="bg-gradient-to-r from-indigo-100 to-blue-50 border-b-2 border-indigo-200">
      <th class="text-left py-2 px-2.5 font-semibold text-indigo-900 align-top" style="width: 28%">Стейкхолдер</th>
      <th class="text-left py-2 px-2.5 font-semibold text-indigo-900 align-top">Интерес</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-white border-b border-gray-100">
      <td class="py-1.5 px-2.5 align-top"><span class="text-base mr-1">💰</span><strong class="text-gray-900">Спонсоры (инвесторы)</strong></td>
      <td class="py-1.5 px-2.5 text-gray-800 align-top">Получить прибыль за счёт продажи системы</td>
    </tr>
    <tr class="bg-slate-50 border-b border-gray-100">
      <td class="py-1.5 px-2.5 align-top"><span class="text-base mr-1">🛡</span><strong class="text-gray-900">Службы контроля (ИБ)</strong></td>
      <td class="py-1.5 px-2.5 text-gray-800 align-top">Не допустить утечку данных; соответствовать принципам безопасности FERPA</td>
    </tr>
    <tr class="bg-white border-b border-gray-100">
      <td class="py-1.5 px-2.5 align-top"><span class="text-base mr-1">🏫</span><strong class="text-gray-900">Образовательное учреждение</strong></td>
      <td class="py-1.5 px-2.5 text-gray-800 align-top">Повышение эффективности внутренних процессов, повышение рейтинга учреждения</td>
    </tr>
    <tr class="bg-slate-50 border-b border-gray-100">
      <td class="py-1.5 px-2.5 align-top"><span class="text-base mr-1">👨‍🏫</span><strong class="text-gray-900">Преподаватели</strong></td>
      <td class="py-1.5 px-2.5 text-gray-800 align-top">Повышение эффективности формирования отчётов для родителей и работы с документацией</td>
    </tr>
    <tr class="bg-white border-b border-gray-100">
      <td class="py-1.5 px-2.5 align-top"><span class="text-base mr-1">🧑‍💼</span><strong class="text-gray-900">Сотрудники</strong></td>
      <td class="py-1.5 px-2.5 text-gray-800 align-top">Получение информации о посещаемости учащихся</td>
    </tr>
    <tr class="bg-slate-50 border-b border-gray-100">
      <td class="py-1.5 px-2.5 align-top"><span class="text-base mr-1">👪</span><strong class="text-gray-900">Родители студентов</strong></td>
      <td class="py-1.5 px-2.5 text-gray-800 align-top">Контроль посещения и успеваемости</td>
    </tr>
    <tr class="bg-white border-b border-gray-100">
      <td class="py-1.5 px-2.5 align-top"><span class="text-base mr-1">🎓</span><strong class="text-gray-900">Студенты</strong></td>
      <td class="py-1.5 px-2.5 text-gray-800 align-top">Отказ от бумажного дневника; наблюдение за успеваемостью в удобном виде</td>
    </tr>
    <tr class="bg-white border-b border-gray-100">
      <td class="py-1.5 px-2.5 align-top"><span class="text-base mr-1">🏛</span><strong class="text-gray-900">Гос. органы</strong></td>
      <td class="py-1.5 px-2.5 text-gray-800 align-top">Получение точной информации о деятельности школ</td>
    </tr>

  </tbody>
</table>
</div>

<!-- Источник — в подвале -->
<div class="text-[9px] text-gray-500 leading-tight italic text-center mt-2">
  Источник: материалы каты&nbsp;<em>Tales Of A Fourth Grade</em>&nbsp;/&nbsp;
  <a href="https://nealford.com/katas/" class="underline hover:text-gray-700" target="_blank" rel="noopener">Neal Ford — Architectural Katas</a>.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson3">← Занятие 3</a>
  <a href="/lesson5">Занятие 5 →</a>
</div>

---
hide: false
layout: default
---

# Контекстная диаграмма образовательной системы

<p class="text-sm leading-snug -mt-3 text-gray-500">
Системный контекст (C4 Level 1): <strong class="text-gray-700">кто</strong> взаимодействует с образовательной системой и <strong class="text-gray-700">какие потоки данных</strong> проходят между акторами и её компонентами.
</p>

<!-- Легенда нотации -->
<div class="mt-2 grid grid-cols-3 gap-2 text-[10px]">
  <div class="flex items-center gap-1.5 px-2 py-1.5 bg-gray-100 border border-gray-300 rounded">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700">
      <circle cx="12" cy="6" r="3"/>
      <line x1="12" y1="9" x2="12" y2="16"/>
      <line x1="9" y1="13" x2="15" y2="13"/>
      <line x1="12" y1="16" x2="9" y2="22"/>
      <line x1="12" y1="16" x2="15" y2="22"/>
    </svg>
    <span class="font-medium text-gray-900">Actor</span><span class="opacity-70">— пользователь системы</span>
  </div>
  <div class="flex items-center gap-1.5 px-2 py-1.5 bg-blue-50 border border-blue-300 rounded">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-700">
      <rect x="3" y="6" width="18" height="14" rx="1"/>
    </svg>
    <span class="font-medium text-blue-900">Component</span><span class="opacity-70">— внутри скоупа проекта</span>
  </div>
  <div class="flex items-center gap-1.5 px-2 py-1.5 bg-amber-50 border border-amber-300 rounded">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-amber-700">
      <circle cx="12" cy="6" r="3"/>
      <line x1="12" y1="9" x2="12" y2="16"/>
      <line x1="9" y1="13" x2="15" y2="13"/>
      <line x1="12" y1="16" x2="9" y2="22"/>
      <line x1="12" y1="16" x2="15" y2="22"/>
    </svg>
    <span class="font-medium text-amber-900">External System</span><span class="opacity-70">— вне скоупа</span>
  </div>
</div>

<!-- Диаграмма -->
<div class="flex items-center justify-center mt-2">
  <img src="/edu-context-diagram.webp" alt="Контекстная диаграмма образовательной системы — учитель, студент, родитель и Внешняя ИС госотчётности взаимодействуют с компонентами образовательной системы" class="max-h-[58vh] max-w-[90vw] object-contain rounded shadow-md border border-gray-200 bg-white" />
</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-1.5">
  Диаграмма построена в PlantUML.&nbsp;Исходник:&nbsp;<code class="font-mono">pages/edu-context-diagram.puml</code>.&nbsp;
  Нотация: <a href="https://c4model.com" class="underline hover:text-gray-600">C4 Model</a> (Simon Brown).
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson3">← Занятие 3</a>
  <a href="/lesson5">Занятие 5 →</a>
</div>


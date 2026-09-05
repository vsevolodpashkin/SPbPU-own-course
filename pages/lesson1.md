---
layout: center
---

# Бизнес-анализ

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 1. Обзор ИТ индустрии. Требования к ПО, немного про бизнес</div>
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
layout: default
---

# Основные тренды мировой ИТ-отрасли

<p class="text-sm leading-snug -mt-3 text-gray-500">
ИТ-индустрия находится в фазе структурной перестройки — одни технологии становятся Commodity, другие задают новую операционную модель.
</p>

<!-- 3 ГЛАВНЫХ ТРЕНДА — большие карточки -->
<div class="grid grid-cols-3 gap-3 mt-3">

  <!-- 1. ИИ -->
  <div class="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-3">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex-shrink-0 bg-indigo-600 text-white rounded-lg w-9 h-9 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-3 6.5V14a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-.5a4 4 0 0 0-3-6.5V6a4 4 0 0 0-4-4z"/>
          <line x1="9" y1="20" x2="15" y2="20"/>
          <line x1="12" y1="18" x2="12" y2="22"/>
        </svg>
      </span>
      <strong class="text-indigo-900 text-base">Искусственный интеллект</strong>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1">
      <li><strong class="text-indigo-900">Генеративный AI</strong> — LLM, мультимодальные модели в продукты</li>
      <li><strong class="text-indigo-900">AI-агенты</strong> — автономные оркестраторы задач</li>
      <li><strong class="text-indigo-900">Регулирование</strong> — AI Act ЕС, эксперименты РФ</li>
    </ul>
  </div>

  <!-- 2. Кибербезопасность -->
  <div class="bg-red-50 border-2 border-red-300 rounded-xl p-3">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex-shrink-0 bg-red-600 text-white rounded-lg w-9 h-9 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      </span>
      <strong class="text-red-900 text-base">Кибербезопасность</strong>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1">
      <li><strong class="text-red-900">Zero Trust</strong> как индустриальный стандарт</li>
      <li><strong class="text-red-900">Supply-chain атаки</strong> — SolarWinds, Log4j, 3CX</li>
      <li><strong class="text-red-900">Постквантовая криптография</strong> — миграция NIST PQC</li>
    </ul>
  </div>

  <!-- 3. Импортозамещение / Тех. суверенитет -->
  <div class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-3">
    <div class="flex items-center gap-2 mb-2">
      <span class="flex-shrink-0 bg-emerald-600 text-white rounded-lg w-9 h-9 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 21h18"/>
          <path d="M5 21V7l7-4 7 4v14"/>
          <path d="M9 9h2v6H9zM13 9h2v6h-2z"/>
          <path d="M9 13h6"/>
        </svg>
      </span>
      <strong class="text-emerald-900 text-base">Импортозамещение и<br>технологический суверенитет</strong>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1">
      <li><strong class="text-emerald-900">Реестры отеч. ПО и ПАК</strong> — обязательные закупки в госсекторе</li>
      <li><strong class="text-emerald-900">Суверенный стек</strong> — ОС (Astra, ALT, РЕД), СУБД, офис</li>
      <li><strong class="text-emerald-900">Open Source</strong> как стратегия суверенитета</li>
    </ul>
  </div>

</div>

<!-- ЗАГОЛОВОК СЕКЦИИ ДРУГИХ ТРЕНДОВ -->
<div class="text-[10px] uppercase tracking-wider font-semibold text-gray-500 mt-3 mb-1">Другие заметные тренды</div>

<!-- 7 мини-карточек -->
<div class="grid grid-cols-7 gap-1.5">

  <div class="bg-slate-50 border border-slate-200 rounded p-1.5 text-center">
    <div class="text-base">☁️</div>
    <div class="text-[10px] font-semibold text-slate-800 leading-tight">Cloud & Edge</div>
  </div>

  <div class="bg-slate-50 border border-slate-200 rounded p-1.5 text-center">
    <div class="text-base">⚛️</div>
    <div class="text-[10px] font-semibold text-slate-800 leading-tight">Quantum</div>
  </div>

  <div class="bg-slate-50 border border-slate-200 rounded p-1.5 text-center">
    <div class="text-base">🔗</div>
    <div class="text-[10px] font-semibold text-slate-800 leading-tight">Blockchain & Web3</div>
  </div>

  <div class="bg-slate-50 border border-slate-200 rounded p-1.5 text-center">
    <div class="text-base">📡</div>
    <div class="text-[10px] font-semibold text-slate-800 leading-tight">IoT / IIoT</div>
  </div>

  <div class="bg-slate-50 border border-slate-200 rounded p-1.5 text-center">
    <div class="text-base">🧩</div>
    <div class="text-[10px] font-semibold text-slate-800 leading-tight">Low-code</div>
  </div>

  <div class="bg-slate-50 border border-slate-200 rounded p-1.5 text-center">
    <div class="text-base">📶</div>
    <div class="text-[10px] font-semibold text-slate-800 leading-tight">5G / 6G</div>
  </div>

  <div class="bg-slate-50 border border-slate-200 rounded p-1.5 text-center">
    <div class="text-base">🌱</div>
    <div class="text-[10px] font-semibold text-slate-800 leading-tight">Green IT</div>
  </div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/15">← BRD</a>
  <a href="/13">Занятие 2 →</a>
</div>

---
layout: default
---

# 2-я половина XX века - время каскадных моделей (Waterfall)

<div class="flex justify-center mt-2">
<img src="/GANT_DIAGRAM.png" alt="Календарный план проекта — диаграмма Ганта" class="max-h-[40vh] max-w-[100%] object-contain rounded shadow-lg" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: default
---

# Провалы каскадных (Waterfall) проектов в мировой IT-практике

<div class="grid grid-cols-2 gap-3 mt-4">

<!-- Case 1: NHS NPfIT -->
<div class="bg-red-50 border-2 border-red-200 rounded-lg p-1">
  <div class="flex items-baseline justify-between mb-1">
    <strong class="text-sm text-red-900">🇬🇧 NHS National Programme for IT</strong>
    <span class="text-xs opacity-70">2002–2011</span>
  </div>
  <div class="text-xs space-y-0.5">
    <div><strong>Бюджет:</strong> £10+ млрд (из них £2,6 млрд — потери по расторгнутым контрактам с BT и CSC)</div>
    <div><strong>Цель:</strong> централизованная электронная медкарта для всех пациентов NHS England</div>
    <div><strong>Итог:</strong> программа свёрнута в 2011, ключевые компоненты не сданы</div>
  </div>
  <div class="text-xs font-semibold text-red-800 mt-2 pt-2 border-t border-red-200">
    ⚠ Угроза жизни пациентов из-за рассогласованных данных между системами; £10 млрд налогоплательщиков; подрыв доверия к госцифре в Великобритании
  </div>
</div>

<!-- Case 2: FBI VCF -->
<div class="bg-red-50 border-2 border-red-200 rounded-lg p-1">
  <div class="flex items-baseline justify-between mb-1">
    <strong class="text-sm text-red-900">🇺🇸 FBI Virtual Case File</strong>
    <span class="text-xs opacity-70">2000–2005</span>
  </div>
  <div class="text-xs space-y-0.5">
    <div><strong>Бюджет:</strong> $170 млн (полностью потрачены)</div>
    <div><strong>Цель:</strong> заменить устаревшую систему управления делами ФБР</div>
    <div><strong>Итог:</strong> проект закрыт, начат с нуля в 2005 (Sentinel)</div>
  </div>
  <div class="text-xs font-semibold text-red-800 mt-2 pt-2 border-t border-red-200">
    ⚠ Разрыв аналитических возможностей ФБР сразу после 11 сентября 2001; контртеррористические расследования парализованы; повторный запуск Sentinel обошёлся ещё в $300+ млн
  </div>
</div>

<!-- Case 3: Healthcare.gov -->
<div class="bg-red-50 border-2 border-red-200 rounded-lg p-1">
  <div class="flex items-baseline justify-between mb-1">
    <strong class="text-sm text-red-900">🇺🇸 Healthcare.gov</strong>
    <span class="text-xs opacity-70">2013</span>
  </div>
  <div class="text-xs space-y-0.5">
    <div><strong>Бюджет:</strong> $1,7+ млрд на старте, дополнительно сотни миллионов на «скорую помощь»</div>
    <div><strong>Цель:</strong> биржа медицинских страховок по Affordable Care Act (Obamacare)</div>
    <div><strong>Итог:</strong> катастрофический запуск 1 октября 2013 — за первые сутки зарегистрировались 6 человек из миллионов</div>
  </div>
  <div class="text-xs font-semibold text-red-800 mt-2 pt-2 border-t border-red-200">
    ⚠ Миллионы американцев не смогли записаться на страхование в критический период; политический кризис доверия к администрации; экстренная «пересборка» заняла месяцы и стоила сотни миллионов
  </div>
</div>

<!-- Case 4: IRS Modernization / CADE -->
<div class="bg-red-50 border-2 border-red-200 rounded-lg p-1">
  <div class="flex items-baseline justify-between mb-1">
    <strong class="text-sm text-red-900">🇺🇸 IRS Modernization (CADE)</strong>
    <span class="text-xs opacity-70">кон. 1990-х — 2010</span>
  </div>
  <div class="text-xs space-y-0.5">
    <div><strong>Бюджет:</strong> $4+ млрд (с учётом расторгнутых контрактов)</div>
    <div><strong>Цель:</strong> модернизация налоговой обработки — Customer Account Data Engine</div>
    <div><strong>Итог:</strong> ключевые компоненты (в т.ч. CADE 2) свёрнуты в 2010, IRS работает на гибриде старого и нового</div>
  </div>
  <div class="text-xs font-semibold text-red-800 mt-2 pt-2 border-t border-red-200">
    ⚠ Задержки возвратов налогов для миллионов граждан; хроническая уязвимость легаси-систем; подрыв способности IRS администрировать налоговую систему страны
  </div>
</div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: default
---

# Роли в продуктовой ИТ-команде

<p class="text-sm opacity-70 italic -mt-2">Кто делает продукт: от идеи до продакшена</p>

<!-- =============== ОСНОВНАЯ КОМАНДА =============== -->
<h3 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-3 mb-2 flex items-center gap-2">
<span class="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
Основная команда · 5 ролей
</h3>

<div class="grid grid-cols-5 gap-2">

<!-- 1. Владелец продукта -->
<div class="bg-white border border-blue-200 rounded-lg p-2 text-center">
<div class="w-10 h-10 mx-auto mb-2 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
<rect x="5" y="3" width="14" height="18" rx="2"/>
<path d="M9 3 V2 H15 V3"/>
<line x1="9" y1="10" x2="15" y2="10"/>
<line x1="9" y1="14" x2="15" y2="14"/>
<line x1="9" y1="18" x2="13" y2="18"/>
</svg>
</div>
<strong class="block text-xs text-slate-900 mb-1">Владелец продукта</strong>
<span class="block text-xs text-slate-600 leading-tight">Планирование, взаимодействие с заказчиками.</span>
</div>

<!-- 2. Техлид / тимлид -->
<div class="bg-white border border-blue-200 rounded-lg p-2 text-center">
<div class="w-10 h-10 mx-auto mb-2 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
<circle cx="12" cy="12" r="9"/>
<polygon points="16,8 13,13 8,16 11,11" fill="currentColor" stroke="none"/>
</svg>
</div>
<strong class="block text-xs text-slate-900 mb-1">Техлид / тимлид</strong>
<span class="block text-xs text-slate-600 leading-tight">Техническое руководство, направление команды</span>
</div>

<!-- 3. Аналитик -->
<div class="bg-white border border-blue-200 rounded-lg p-2 text-center">
<div class="w-10 h-10 mx-auto mb-2 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
<circle cx="10" cy="10" r="6"/>
<line x1="14.5" y1="14.5" x2="20" y2="20"/>
<line x1="7" y1="10" x2="13" y2="10"/>
<line x1="10" y1="7" x2="10" y2="13"/>
</svg>
</div>
<strong class="block text-xs text-slate-900 mb-1">Аналитик</strong>
<span class="block text-xs text-slate-600 leading-tight">Сбор требований заказчика, разработка ТЗ/спецификации для разработки.</span>
</div>

<!-- 4. Разработчик -->
<div class="bg-white border border-blue-200 rounded-lg p-2 text-center">
<div class="w-10 h-10 mx-auto mb-2 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
<polyline points="9 6 3 12 9 18"/>
<polyline points="15 6 21 12 15 18"/>
</svg>
</div>
<strong class="block text-xs text-slate-900 mb-1">Разработчик</strong>
<span class="block text-xs text-slate-600 leading-tight">Пишет код продукта: <span class="font-semibold text-blue-700">Front</span> — UI; <span class="font-semibold text-blue-700">Back</span> — серверная логика</span>
</div>

<!-- 5. Тестировщик -->
<div class="bg-white border border-blue-200 rounded-lg p-2 text-center">
<div class="w-10 h-10 mx-auto mb-2 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
<path d="M12 3 L20 6 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V6 Z"/>
<polyline points="9 12 11 14 15 10"/>
</svg>
</div>
<strong class="block text-xs text-slate-900 mb-1">Тестировщик</strong>
<span class="block text-xs text-slate-600 leading-tight">Проектирует тест-кейсы, находит дефекты и обеспечивает качество продукта перед релизом.</span>
</div>

</div>

<!-- =============== ОБЩЕКОМАНДНЫЕ РОЛИ =============== -->
<h3 class="text-xs font-semibold text-amber-700 uppercase tracking-wider mt-4 mb-2 flex items-center gap-2">
<span class="inline-block w-2 h-2 bg-amber-500 rounded-full"></span>
Роли вне команд
</h3>

<div class="grid grid-cols-3 gap-3">

<!-- 6. Архитектор -->
<div class="bg-amber-50 border-2 border-amber-300 rounded-lg p-3 text-center">
<div class="w-10 h-10 mx-auto mb-2 bg-amber-200 text-amber-800 rounded-lg flex items-center justify-center">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
<rect x="3" y="13" width="6" height="8"/>
<rect x="9" y="8" width="6" height="13"/>
<rect x="15" y="11" width="6" height="10"/>
<line x1="3" y1="6" x2="21" y2="6"/>
</svg>
</div>
<strong class="block text-sm text-amber-900 mb-1">Архитектор</strong>
<span class="block text-xs text-amber-800 leading-tight">Задаёт долгосрочную техническую стратегию, выбирает стек технологий</span>
</div>

<!-- 7. Дизайнер -->
<div class="bg-amber-50 border-2 border-amber-300 rounded-lg p-3 text-center">
<div class="w-10 h-10 mx-auto mb-2 bg-amber-200 text-amber-800 rounded-lg flex items-center justify-center">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
<circle cx="12" cy="12" r="9"/>
<circle cx="8" cy="9" r="1.3" fill="currentColor"/>
<circle cx="16" cy="9" r="1.3" fill="currentColor"/>
<circle cx="9" cy="15" r="1.3" fill="currentColor"/>
<circle cx="15" cy="15" r="1.3" fill="currentColor"/>
</svg>
</div>
<strong class="block text-sm text-amber-900 mb-1">Дизайнер</strong>
<span class="block text-xs text-amber-800 leading-tight">Проектирует пользовательский опыт (UX) и визуальный язык продукта (UI), создаёт прототипы и дизайн-систему.</span>
</div>

<!-- 8. DevOps -->
<div class="bg-amber-50 border-2 border-amber-300 rounded-lg p-3 text-center">
<div class="w-10 h-10 mx-auto mb-2 bg-amber-200 text-amber-800 rounded-lg flex items-center justify-center">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
<circle cx="12" cy="12" r="3"/>
<path d="M12 2 V5 M12 19 V22 M4.2 4.2 L6.3 6.3 M17.7 17.7 L19.8 19.8 M2 12 H5 M19 12 H22 M4.2 19.8 L6.3 17.7 M17.7 6.3 L19.8 4.2"/>
</svg>
</div>
<strong class="block text-sm text-amber-900 mb-1">DevOps</strong>
<span class="block text-xs text-amber-800 leading-tight">Автоматизирует поставку и эксплуатацию: CI/CD, мониторинг, инфраструктура как код.</span>
</div>

</div>

<div class="mt-4 text-[9px] text-gray-500 leading-tight italic text-center">
  Источник ролевой модели: Partington, D. ‖Implementing Strategy Through Programmes of Projects‖ // Gower Handbook of Project Management / ed.&nbsp;J.&nbsp;R.&nbsp;Turner, S.&nbsp;J.&nbsp;Simister. — Gower, 2000.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: default
---

# Scrum — фреймворк гибкой разработки

<p class="text-sm leading-snug -mt-3 text-gray-500">
Итеративная поставка ценности фиксированными <strong class="text-gray-700">циклами по 2 недели</strong> с ежедневной синхронизацией команды и ревизией процессов в конце каждого Sprint'а.
</p>

<!-- Timeline-диаграмма Sprint -->
<div class="mt-3 bg-slate-50 border border-slate-200 rounded-lg p-2">
<svg viewBox="0 0 840 220" class="w-full" text-rendering="optimizeLegibility">
<text x="20" y="22" style="font:600 13px sans-serif" fill="#1e293b">Sprint №N · 2 недели · 10 рабочих дней</text>
<text x="820" y="22" text-anchor="end" style="font:400 11px sans-serif" fill="#64748b" font-style="italic">замкнутый цикл →</text>
<defs>
<marker id="arrow-end" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
<path d="M0,0 L0,6 L7,3 z" fill="#475569"/></marker>
</defs>
<line x1="40" y1="120" x2="820" y2="120" stroke="#475569" stroke-width="2" marker-end="url(#arrow-end)"/>
<g style="font:400 10px sans-serif" fill="#64748b">
<line x1="60" y1="115" x2="60" y2="125" stroke="#94a3b8"/>
<text x="60" y="145" text-anchor="middle">Пн 1</text>
<line x1="140" y1="115" x2="140" y2="125" stroke="#94a3b8"/>
<text x="140" y="145" text-anchor="middle">Вт 2</text>
<line x1="220" y1="115" x2="220" y2="125" stroke="#94a3b8"/>
<text x="220" y="145" text-anchor="middle">Ср 3</text>
<line x1="300" y1="115" x2="300" y2="125" stroke="#94a3b8"/>
<text x="300" y="145" text-anchor="middle">Чт 4</text>
<line x1="380" y1="115" x2="380" y2="125" stroke="#94a3b8"/>
<text x="380" y="145" text-anchor="middle">Пт 5</text>
</g>
<line x1="420" y1="65" x2="420" y2="155" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
<text x="230" y="170" text-anchor="middle" style="font:500 10px sans-serif" fill="#94a3b8">Неделя 1</text>
<g style="font:400 10px sans-serif" fill="#64748b">
<line x1="460" y1="115" x2="460" y2="125" stroke="#94a3b8"/>
<text x="460" y="145" text-anchor="middle">Пн 6</text>
<line x1="540" y1="115" x2="540" y2="125" stroke="#94a3b8"/>
<text x="540" y="145" text-anchor="middle">Вт 7</text>
<line x1="620" y1="115" x2="620" y2="125" stroke="#94a3b8"/>
<text x="620" y="145" text-anchor="middle">Ср 8</text>
<line x1="700" y1="115" x2="700" y2="125" stroke="#94a3b8"/>
<text x="700" y="145" text-anchor="middle">Чт 9</text>
<line x1="780" y1="115" x2="780" y2="125" stroke="#94a3b8"/>
<text x="780" y="145" text-anchor="middle">Пт 10</text>
</g>
<text x="600" y="170" text-anchor="middle" style="font:500 10px sans-serif" fill="#94a3b8">Неделя 2</text>
<g style="font:600 9px sans-serif" fill="#1e40af">
<rect x="20" y="60" width="80" height="34" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="4"/>
<text x="60" y="76" text-anchor="middle">Sprint</text>
<text x="60" y="88" text-anchor="middle">Planning</text>
<line x1="100" y1="94" x2="60" y2="115" stroke="#2563eb" stroke-width="1.5"/>
</g>
<text x="180" y="55" text-anchor="middle" style="font:600 9px sans-serif" fill="#7c3aed">⇄</text>
<g style="font:600 9px sans-serif" fill="#6b21a8">
<rect x="180" y="38" width="80" height="30" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5" rx="4" stroke-dasharray="4,3"/>
<text x="220" y="50" text-anchor="middle">Backlog</text>
<text x="220" y="62" text-anchor="middle">Refinement</text>
<line x1="220" y1="68" x2="220" y2="100" stroke="#9333ea" stroke-width="1.5" stroke-dasharray="3,3"/>
<rect x="580" y="38" width="80" height="30" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5" rx="4" stroke-dasharray="4,3"/>
<text x="620" y="50" text-anchor="middle">Backlog</text>
<text x="620" y="62" text-anchor="middle">Refinement</text>
<line x1="620" y1="68" x2="620" y2="100" stroke="#9333ea" stroke-width="1.5" stroke-dasharray="3,3"/>
</g>
<g style="font:600 9px sans-serif" fill="#854d0e">
<circle cx="140" cy="105" r="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<circle cx="300" cy="105" r="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<circle cx="380" cy="105" r="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<circle cx="460" cy="105" r="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<circle cx="540" cy="105" r="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<circle cx="700" cy="105" r="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="430" y="35" text-anchor="middle" style="font:600 10px sans-serif" fill="#b45309">↑ Daily Standup · 15 мин каждое утро</text>
</g>
<g style="font:600 9px sans-serif" fill="#065f46">
<rect x="720" y="60" width="100" height="34" fill="#d1fae5" stroke="#059669" stroke-width="1.5" rx="4"/>
<text x="770" y="76" text-anchor="middle">Sprint Review</text>
<text x="770" y="88" text-anchor="middle">+ Retro</text>
<line x1="770" y1="94" x2="780" y2="115" stroke="#059669" stroke-width="1.5"/>
<text x="770" y="56" text-anchor="middle" style="font:600 10px sans-serif" fill="#047857">финальные</text>
</g>
</svg>
</div>

<!-- Роли и принципы -->
<div class="mt-3 grid grid-cols-3 gap-2 text-[11px]">
  <div class="bg-white border border-slate-200 rounded-lg p-2 text-center">
    <div class="font-semibold text-slate-900">Product Owner</div>
    <div class="text-slate-600 text-[10px] mt-0.5">отвечает за что и зачем</div>
  </div>
  <div class="bg-white border border-slate-200 rounded-lg p-2 text-center">
    <div class="font-semibold text-slate-900">Scrum Master</div>
    <div class="text-slate-600 text-[10px] mt-0.5">убирает препятствия</div>
  </div>
  <div class="bg-white border border-slate-200 rounded-lg p-2 text-center">
    <div class="font-semibold text-slate-900">Developers</div>
    <div class="text-slate-600 text-[10px] mt-0.5">доставляют инкремент</div>
  </div>
</div>

<div class="mt-2 text-center text-[10px] text-gray-500">
  <strong class="text-gray-700">3 столпа эмпиризма:</strong>
  <span class="text-blue-700">прозрачность</span> ·
  <span class="text-emerald-700">инспекция</span> ·
  <span class="text-orange-700">адаптация</span>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/14">← BRD</a>
  <a href="/13">Занятие 2 →</a>
</div>

---
layout: default
---

# Виды требований

<p class="text-sm opacity-70 italic -mt-2">Иерархия требований: от общего видения к деталям реализации</p>

<div class="flex items-center justify-center mt-2">
<img src="/REQUIREMENTS.png" alt="Виды требований — иерархия" class="max-h-[40vh] max-w-[92%] object-contain rounded shadow-lg" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: default
---

# Бизнес-анализ - работа с требованиями

<div class="grid grid-cols-2 gap-8 mt-2">

<div class="flex items-center justify-center">
  <img src="/image_029.png" alt="Бизнес-анализ" class="rounded shadow-lg" />
</div>

<div class="text-center flex flex-col justify-center">
  Это практика обеспечечния изменений на предприятии через определение потребностей и рекомендацию решений, которые приносят пользу заинтересованным сторонам

<div class="text-sm opacity-70 mt-6 italic">
    A Guide to the Business Analysis Body of Knowledge (BABOK Guide v3)
  </div>
</div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: default
---

# Цели по SMART

<div class="flex items-center justify-center h-full">
  <img src="/SMART_01.png" alt="Цели по SMART" class="rounded shadow-lg max-h-[40vh]" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: default
---

# Шаблон фиксации бизнес-требований (BRD)

1. **Основные положения**
2. **Цели проекта**
3. **Объем проекта**
4. **Бизнес-требования**
5. **Ключевые заинтересованные стороны**
6. **Ограничения проекта**
7. **Анализ затрат и выгод**

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/1">← Титульный слайд</a>
  <a href="/13">Занятие 2 →</a>
</div>



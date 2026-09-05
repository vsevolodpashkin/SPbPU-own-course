---
layout: center
---

# Бизнес-анализ

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 3. Моделирование бизнес-процессов</div>
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

# Бизнес-процесс

<p class="text-sm leading-snug -mt-3 text-gray-500">
Структурированная последовательность действий организации, направленная на производство <strong class="text-gray-700">продукта или услуги</strong> для внутреннего или внешнего клиента.
</p>

<div class="grid grid-cols-2 gap-4 mt-3">
<div>
<div class="text-xs text-gray-500 mb-1 flex items-center gap-2">
<span class="font-mono text-gray-700">BABOK v3 · 5.1</span>
<span class="text-gray-300">·</span>
<span>определение</span>
</div>
<div class="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg p-3 mb-2">
<p class="text-[13px] text-gray-800 leading-snug">
<em>«Бизнес-процесс»</em> — это <strong class="text-indigo-900">совокупность взаимосвязанных или взаимодействующих действий</strong>, которая преобразует <strong class="text-indigo-900">входы</strong> в <strong class="text-indigo-900">выходы</strong>. Бизнес-процессы — фундаментальная единица создания ценности в любой организации.
</p>
</div>
<ul class="text-xs text-gray-700 space-y-1.5 leading-snug">
<li class="flex gap-1.5">
<span class="text-indigo-600 font-bold">→</span>
<div><strong class="text-gray-900">Вход → Процесс → Выход</strong> — базовая модель любого процесса</div>
</li>
<li class="flex gap-1.5">
<span class="text-indigo-600 font-bold">→</span>
<div><strong class="text-gray-900">Границы процесса</strong> — где он начинается и заканчивается (триггер → результат)</div>
</li>
<li class="flex gap-1.5">
<span class="text-indigo-600 font-bold">→</span>
<div><strong class="text-gray-900">Участники</strong> — роли, системы, внешние стороны, вовлечённые в процесс</div>
</li>
<li class="flex gap-1.5">
<span class="text-indigo-600 font-bold">→</span>
<div><strong class="text-gray-900">Метрики</strong> — время цикла, пропускная способность, качество, стоимость</div>
</li>
</ul>
</div>
<div>
<div class="text-xs text-gray-500 mb-1 flex items-center gap-2">
<span class="font-mono text-gray-700">BPMN 2.0</span>
<span class="text-gray-300">·</span>
<span>абстрактный пример</span>
</div>
<div class="bg-white border border-gray-200 rounded-lg p-2">
<img src="/bpmn-process.svg" alt="BPMN-диаграмма абстрактного бизнес-процесса" class="w-full h-auto" />
</div>
<div class="text-[10px] text-gray-500 leading-snug mt-1.5 px-1">
<strong class="text-gray-700">Нотация BPMN:</strong> 🟢 start · 📦 task · ◇ gateway (XOR) · ⭕ end — стандарт OMG.
</div>
</div>
</div>
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-3">
Источник: A Guide to the Business Analysis Body of Knowledge (BABOK Guide v3), §5.1 — International Institute of Business Analysis (IIBA), 2015.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
<a href="/17">← Свод по BPMN</a>
<a href="/lesson4">Занятие 4 →</a>
</div>

---
layout: default
---

# Характеристика бизнес-процессов

<p class="text-sm leading-snug -mt-3 text-gray-500">
Бизнес-процессы отличаются от технических вызовов и от обычной автоматизации — у них есть <strong class="text-gray-700">свои законы масштабирования и эволюции</strong>.
</p>

<div class="grid grid-cols-5 gap-4 mt-3">
<div class="col-span-3">
<div class="text-xs text-gray-500 mb-1.5 flex items-center gap-2">
<span class="font-mono text-gray-700">6 ключевых характеристик</span>
</div>
<div class="grid grid-cols-2 gap-1.5">
<div class="bg-slate-50 border border-slate-200 rounded-lg p-2 flex gap-2 items-start">
<span class="flex-shrink-0 bg-slate-600 text-white rounded w-7 h-7 flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
</span>
<div>
<div class="text-xs font-semibold text-slate-900">Распределены во времени</div>
<div class="text-[10px] text-slate-600 leading-snug">от минут до месяцев на один экземпляр</div>
</div>
</div>
<div class="bg-slate-50 border border-slate-200 rounded-lg p-2 flex gap-2 items-start">
<span class="flex-shrink-0 bg-slate-600 text-white rounded w-7 h-7 flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
</span>
<div>
<div class="text-xs font-semibold text-slate-900">Сложное взаимодействие</div>
<div class="text-[10px] text-slate-600 leading-snug">люди · программы · сервисы · системы</div>
</div>
</div>
<div class="bg-slate-50 border border-slate-200 rounded-lg p-2 flex gap-2 items-start">
<span class="flex-shrink-0 bg-slate-600 text-white rounded w-7 h-7 flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
</span>
<div>
<div class="text-xs font-semibold text-slate-900">Таймеры и перевызовы</div>
<div class="text-[10px] text-slate-600 leading-snug">ожидания, эскалации, повторные попытки</div>
</div>
</div>
<div class="bg-slate-50 border border-slate-200 rounded-lg p-2 flex gap-2 items-start">
<span class="flex-shrink-0 bg-slate-600 text-white rounded w-7 h-7 flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
</span>
<div>
<div class="text-xs font-semibold text-slate-900">Нагрузка 10–40M / день</div>
<div class="text-[10px] text-slate-600 leading-snug">сотни процессов в секунду в пике</div>
</div>
</div>
<div class="bg-slate-50 border border-slate-200 rounded-lg p-2 flex gap-2 items-start">
<span class="flex-shrink-0 bg-slate-600 text-white rounded w-7 h-7 flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><line x1="12" y1="14" x2="12" y2="17"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
</span>
<div>
<div class="text-xs font-semibold text-slate-900">Заказчик — бизнес</div>
<div class="text-[10px] text-slate-600 leading-snug">владелец процесса говорит на языке бизнеса</div>
</div>
</div>
<div class="bg-slate-50 border border-slate-200 rounded-lg p-2 flex gap-2 items-start">
<span class="flex-shrink-0 bg-slate-600 text-white rounded w-7 h-7 flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
</span>
<div>
<div class="text-xs font-semibold text-slate-900">Будет сильно развиваться</div>
<div class="text-[10px] text-slate-600 leading-snug">длинный жизненный цикл, частые изменения</div>
</div>
</div>
</div>
</div>
<div class="col-span-2">
<div class="text-xs text-gray-500 mb-1.5 flex items-center gap-2">
<span class="font-mono text-gray-700">примеры процессов</span>
</div>
<div class="space-y-1.5">
<div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-2 flex gap-2.5 items-center">
<span class="flex-shrink-0 bg-emerald-600 text-white rounded-lg w-9 h-9 flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
</span>
<div>
<div class="text-sm font-semibold text-emerald-900">Выдача кредита</div>
<div class="text-[10px] text-emerald-700 leading-snug">скоринг → андеррайтинг → договор → выплата</div>
</div>
</div>
<div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-2 flex gap-2.5 items-center">
<span class="flex-shrink-0 bg-blue-600 text-white rounded-lg w-9 h-9 flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
</span>
<div>
<div class="text-sm font-semibold text-blue-900">Открытие счетов</div>
<div class="text-[10px] text-blue-700 leading-snug">заявка → KYC → открытие → активация</div>
</div>
</div>
<div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-2 flex gap-2.5 items-center">
<span class="flex-shrink-0 bg-amber-600 text-white rounded-lg w-9 h-9 flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 3h5v5"/><path d="M21 3l-7 7"/><path d="M8 21H3v-5"/><path d="M3 21l7-7"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M3 8V3h5"/><path d="M9 9l-6 6"/></svg>
</span>
<div>
<div class="text-sm font-semibold text-amber-900">Обработка заказов</div>
<div class="text-[10px] text-amber-700 leading-snug">заказ → оплата → сборка → доставка</div>
</div>
</div>
<div class="bg-purple-50 border-l-4 border-purple-500 rounded-r-lg p-2 flex gap-2.5 items-center">
<span class="flex-shrink-0 bg-purple-600 text-white rounded-lg w-9 h-9 flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 11l-3 9L7 14l-3-3 9-3"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.68.94 6.36 2.64"/></svg>
</span>
<div>
<div class="text-sm font-semibold text-purple-900">Заключение сделок</div>
<div class="text-[10px] text-purple-700 leading-snug">переговоры → КП · договор → подписание</div>
</div>
</div>
</div>
</div>
</div>
<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
<a href="/19">← Бизнес-процесс</a>
<a href="/lesson4">Занятие 4 →</a>
</div>

---
layout: default
---

# Три основных типа бизнес-процессов

<p class="text-sm leading-snug -mt-3 text-gray-500">
Любой процесс в организации относится к одному из трёх типов — они различаются по <strong class="text-gray-700">роли в бизнесе</strong> и влиянию на выручку.
</p>

<div class="grid grid-cols-3 gap-3 mt-3">

<!-- 1. Операционные -->
<div class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-3 flex flex-col">
<div class="flex items-center justify-between mb-2">
<span class="flex-shrink-0 bg-emerald-600 text-white rounded-lg w-10 h-10 flex items-center justify-center text-base font-bold">1</span>
<span class="flex-shrink-0 bg-white border border-emerald-200 rounded-full px-2 py-0.5 text-[10px] font-semibold text-emerald-700">💰 приносят деньги</span>
</div>
<div class="flex items-center gap-1.5 mb-1.5">
<svg class="text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
<strong class="text-emerald-900 text-sm">Операционные</strong>
</div>
<p class="text-xs text-gray-700 leading-snug flex-1">Связаны с обслуживанием клиентов и непосредственным получением выручки.</p>
<div class="mt-2 pt-2 border-t border-emerald-200 text-[10px] text-emerald-800 leading-snug">
<strong>Примеры:</strong> продажи, оформление заказов, выдача кредитов, обработка заявок
</div>
</div>

<!-- 2. Поддерживающие -->
<div class="bg-amber-50 border-2 border-amber-300 rounded-xl p-3 flex flex-col">
<div class="flex items-center justify-between mb-2">
<span class="flex-shrink-0 bg-amber-600 text-white rounded-lg w-10 h-10 flex items-center justify-center text-base font-bold">2</span>
<span class="flex-shrink-0 bg-white border border-amber-200 rounded-full px-2 py-0.5 text-[10px] font-semibold text-amber-700">💸 съедают деньги</span>
</div>
<div class="flex items-center gap-1.5 mb-1.5">
<svg class="text-amber-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
<strong class="text-amber-900 text-sm">Поддерживающие</strong>
</div>
<p class="text-xs text-gray-700 leading-snug flex-1">Не приносят прибыли, но необходимы для работы операционных процессов.</p>
<div class="mt-2 pt-2 border-t border-amber-200 text-[10px] text-amber-800 leading-snug">
<strong>Примеры:</strong> бухгалтерия, HR, IT-поддержка, юридическое сопровождение
</div>
</div>

<!-- 3. Управленческие -->
<div class="bg-purple-50 border-2 border-purple-300 rounded-xl p-3 flex flex-col">
<div class="flex items-center justify-between mb-2">
<span class="flex-shrink-0 bg-purple-600 text-white rounded-lg w-10 h-10 flex items-center justify-center text-base font-bold">3</span>
<span class="flex-shrink-0 bg-white border border-purple-200 rounded-full px-2 py-0.5 text-[10px] font-semibold text-purple-700">🎯 стратегия</span>
</div>
<div class="flex items-center gap-1.5 mb-1.5">
<svg class="text-purple-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
<strong class="text-purple-900 text-sm">Управленческие</strong>
</div>
<p class="text-xs text-gray-700 leading-snug flex-1">Организационные процессы, связанные с разработкой целей, стратегии и развитием компании.</p>
<div class="mt-2 pt-2 border-t border-purple-200 text-[10px] text-purple-800 leading-snug">
<strong>Примеры:</strong> стратегическое планирование, бюджетирование, управление рисками
</div>
</div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
<a href="/21">← Характеристика бизнес-процессов</a>
<a href="/23">← Свод по BPMN</a>
</div>

---
layout: default
---

# Свод по BPMN

<div class="flex items-center justify-center h-full">
  <img src="/BPMN_03.png" alt="Свод по BPMN" class="rounded shadow-lg max-h-[40vh] max-w-[90vw] object-contain" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson2">← Занятие 2</a>
  <a href="/lesson4">Занятие 4 →</a>
</div>
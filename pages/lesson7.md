---
layout: default
---

# Теорема CAP

<p class="text-sm leading-snug -mt-2">Любая сетевая система, предоставляющая общие данные, может предоставлять только 2 из следующих 3-х свойств:</p>
<ul class="text-xs leading-snug mt-1 mb-2 space-y-0.5 list-none">
  <li><span class="font-bold text-blue-700">C</span>: <em>consistency</em> — согласованность, при которой общий и реплицируемый элемент данных отображается в виде единой актуальной копии</li>
  <li><span class="font-bold text-green-700">A</span>: <em>availability</em> — доступность, с помощью которой всегда будут выполняться обновления</li>
  <li><span class="font-bold text-orange-700">P</span>: <em>partition tolerance</em> — допустимость разделения группы процессов (например, из-за сбоя сети)</li>
</ul>

<div class="flex justify-center my-2">
<svg viewBox="0 0 420 400" class="w-full max-w-md" text-rendering="optimizeLegibility">
<polygon points="210,60 60,310 360,310" fill="#fafafa" stroke="#374151" stroke-width="2.5" stroke-linejoin="round"/>
<circle cx="210" cy="60" r="32" fill="#3b82f6" stroke="#1e40af" stroke-width="2"/>
<circle cx="60" cy="310" r="32" fill="#10b981" stroke="#047857" stroke-width="2"/>
<circle cx="360" cy="310" r="32" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
<text x="210" y="60" text-anchor="middle" dominant-baseline="central" style="fill:white;font:bold 26px sans-serif">C</text>
<text x="60" y="310" text-anchor="middle" dominant-baseline="central" style="fill:white;font:bold 26px sans-serif">A</text>
<text x="360" y="310" text-anchor="middle" dominant-baseline="central" style="fill:white;font:bold 26px sans-serif">P</text>
<text x="210" y="20" text-anchor="middle" dominant-baseline="central" style="fill:#1f2937;font:600 12px sans-serif">Согласованность</text>
<text x="60" y="372" text-anchor="middle" dominant-baseline="central" style="fill:#1f2937;font:600 12px sans-serif">Доступность</text>
<text x="360" y="372" text-anchor="middle" dominant-baseline="central" style="fill:#1f2937;font:600 12px sans-serif">Устойчивость</text>
<text x="128" y="200" text-anchor="middle" dominant-baseline="central" style="fill:#374151;font:bold 18px sans-serif">CA</text>
<text x="292" y="200" text-anchor="middle" dominant-baseline="central" style="fill:#374151;font:bold 18px sans-serif">CP</text>
<text x="210" y="285" text-anchor="middle" dominant-baseline="central" style="fill:#374151;font:bold 18px sans-serif">AP</text>
<text x="210" y="230" text-anchor="middle" dominant-baseline="central" style="fill:#6b7280;font:italic 11px sans-serif">при Partition →</text>
<text x="210" y="248" text-anchor="middle" dominant-baseline="central" style="fill:#6b7280;font:italic 11px sans-serif">выбор: C или A</text>
</svg>
</div>

<div class="grid grid-cols-3 gap-4">

<!-- C card -->
<div class="bg-blue-50 border-2 border-blue-200 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-2">
    <span class="bg-blue-500 text-white font-bold rounded w-7 h-7 flex items-center justify-center text-sm">C</span>
    <strong class="text-blue-900">Consistency</strong>
  </div>
  <p class="text-xs leading-relaxed mb-2">Каждое чтение возвращает результат последней записи или ошибку.</p>
  <div class="text-xs opacity-75 leading-relaxed">
    <span class="font-semibold">CP-системы:</span> HBase, MongoDB, etcd, Consul, ZooKeeper
  </div>
</div>

<!-- A card -->
<div class="bg-green-50 border-2 border-green-200 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-2">
    <span class="bg-green-500 text-white font-bold rounded w-7 h-7 flex items-center justify-center text-sm">A</span>
    <strong class="text-green-900">Availability</strong>
  </div>
  <p class="text-xs leading-relaxed mb-2">Каждый запрос получает ответ, без гарантии свежести данных.</p>
  <div class="text-xs opacity-75 leading-relaxed">
    <span class="font-semibold">AP-системы:</span> Cassandra, DynamoDB, CouchDB, Riak
  </div>
</div>

<!-- P card -->
<div class="bg-orange-50 border-2 border-orange-200 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-2">
    <span class="bg-orange-500 text-white font-bold rounded w-7 h-7 flex items-center justify-center text-sm">P</span>
    <strong class="text-orange-900">Partition tolerance</strong>
  </div>
  <p class="text-xs leading-relaxed mb-2">Система работает при потере/задержке сообщений между узлами.</p>
  <div class="text-xs opacity-75 leading-relaxed">
    ⚠️ <span class="font-semibold">P обязательно</span> в любой распределённой системе → реальный выбор между CP и AP.
  </div>
</div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson6">← Занятие 6</a>
  <a href="/lesson8">Занятие 8 →</a>
</div>

---
layout: default
---

# Хотим безопасную систему. Что хотим…

<div class="grid grid-cols-2 gap-3 mt-3">

<!-- 1. Аутентификация -->
<div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-3">
  <div class="flex items-center gap-2 mb-2">
    <span class="flex-shrink-0 bg-blue-500 text-white rounded-lg w-9 h-9 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <polyline points="16 11 18 13 22 9"/>
      </svg>
    </span>
    <strong class="text-blue-900 text-base">Аутентификация</strong>
  </div>
  <p class="text-xs leading-relaxed">Проверяет подлинность программы или человека, которые пытаются получить доступ к приложению</p>
</div>

<!-- 2. Авторизация -->
<div class="bg-green-50 border-2 border-green-300 rounded-xl p-3">
  <div class="flex items-center gap-2 mb-2">
    <span class="flex-shrink-0 bg-green-500 text-white rounded-lg w-9 h-9 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    </span>
    <strong class="text-green-900 text-base">Авторизация</strong>
  </div>
  <p class="text-xs leading-relaxed">Проверяет, позволено ли субъекту выполнять запрошенную операцию с заданными данными</p>
</div>

<!-- 3. Аудит -->
<div class="bg-orange-50 border-2 border-orange-300 rounded-xl p-3">
  <div class="flex items-center gap-2 mb-2">
    <span class="flex-shrink-0 bg-orange-500 text-white rounded-lg w-9 h-9 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="9" y1="13" x2="15" y2="13"/>
        <line x1="9" y1="17" x2="15" y2="17"/>
        <line x1="9" y1="9" x2="11" y2="9"/>
      </svg>
    </span>
    <strong class="text-orange-900 text-base">Аудит</strong>
  </div>
  <p class="text-xs leading-relaxed">Отслеживает операции, выполняемые субъектом, чтобы обнаруживать проблемы с безопасностью</p>
</div>

<!-- 4. Безопасное межсервисное взаимодействие -->
<div class="bg-purple-50 border-2 border-purple-300 rounded-xl p-3">
  <div class="flex items-center gap-2 mb-2">
    <span class="flex-shrink-0 bg-purple-500 text-white rounded-lg w-9 h-9 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    </span>
    <strong class="text-purple-900 text-base leading-tight">Безопасное межсервисное взаимодействие</strong>
  </div>
  <p class="text-xs leading-relaxed">В идеале любое взаимодействие субъектом внутри сервисов и за их пределами должно производиться поверх TLS</p>
</div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson6">← Занятие 6</a>
  <a href="/lesson8">Занятие 8 →</a>
</div>
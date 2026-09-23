---
hide: true
layout: center
---

# Архитектура ПО

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 1. Архитектура ИС и стили. Документирование</div>
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
hide: true
layout: default
---

# Архитектура ПО по IEEE Std 1471-2000

<p class="text-sm leading-snug -mt-3 text-gray-500">
<em>Recommended Practice for Architectural Description of Software-Intensive Systems</em> — стандарт, определяющий терминологию и практики описания архитектуры программно-нагруженных систем.
</p>

<!-- Главное определение -->
<div class="mt-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg p-3 relative">
  <div class="absolute top-2 right-2 flex items-center gap-1 bg-white border border-indigo-200 rounded px-2 py-1 shadow-sm">
    <span class="font-mono font-bold text-indigo-800 text-sm">IEEE</span>
    <span class="text-[9px] text-gray-500 font-mono leading-none">Std<br>1471<br>2000</span>
  </div>
  <p class="text-[13px] text-gray-800 leading-relaxed pr-24">
    <strong class="text-indigo-900">Архитектура</strong> — <em>фундаментальная организация системы</em>, воплощённая в её компонентах, их взаимосвязях друг с другом и со средой, а также принципах, определяющих её проектирование и эволюцию.
  </p>
  <div class="text-[10px] text-gray-500 italic mt-2">
    Перевод термина 3.5 «architecture» из IEEE Std 1471-2000.
  </div>
</div>

<!-- Ключевые термины -->
<div class="grid grid-cols-3 gap-2 mt-3 text-xs">

  <div class="bg-white border border-gray-200 rounded-lg p-2">
    <div class="font-semibold text-indigo-700 text-[11px] uppercase tracking-wide">Stakeholder</div>
    <div class="text-gray-500 text-[10px] mt-0.5">заинтересованная сторона</div>
    <p class="text-gray-700 text-[11px] leading-snug mt-1">Лицо, группа или организация, имеющие интересы относительно системы.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-2">
    <div class="font-semibold text-indigo-700 text-[11px] uppercase tracking-wide">Concern</div>
    <div class="text-gray-500 text-[10px] mt-0.5">интерес / забота</div>
    <p class="text-gray-700 text-[11px] leading-snug mt-1">То, что важно для удовлетворения заинтересованной стороны в системе.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-2">
    <div class="font-semibold text-indigo-700 text-[11px] uppercase tracking-wide">Mission</div>
    <div class="text-gray-500 text-[10px] mt-0.5">миссия</div>
    <p class="text-gray-700 text-[11px] leading-snug mt-1">Роль или назначение системы в её среде.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-2">
    <div class="font-semibold text-indigo-700 text-[11px] uppercase tracking-wide">Architectural Description</div>
    <div class="text-gray-500 text-[10px] mt-0.5">архитектурное описание (AD)</div>
    <p class="text-gray-700 text-[11px] leading-snug mt-1">Коллекция продуктов, документирующих архитектуру.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-2">
    <div class="font-semibold text-indigo-700 text-[11px] uppercase tracking-wide">Viewpoint</div>
    <div class="text-gray-500 text-[10px] mt-0.5">точка зрения</div>
    <p class="text-gray-700 text-[11px] leading-snug mt-1">Спецификация соглашений для построения и использования представлений.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-2">
    <div class="font-semibold text-indigo-700 text-[11px] uppercase tracking-wide">View</div>
    <div class="text-gray-500 text-[10px] mt-0.5">представление</div>
    <p class="text-gray-700 text-[11px] leading-snug mt-1">Репрезентация всей системы с позиции определённого набора интересов.</p>
  </div>

</div>

<!-- Атрибуция -->
<div class="mt-3 text-[9px] text-gray-400 leading-tight text-center italic">
  IEEE, IEEE Std и название стандарта являются торговыми марками Institute of Electrical and Electronics Engineers, Inc.
  Цитата термина приведена в учебных целях (fair use). Логотип IEEE не воспроизводится во избежание нарушения товарных знаков.
</div>

---
hide: true
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
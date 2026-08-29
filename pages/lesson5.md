---
layout: center
---

# Основы проектирования ПО

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 2</div>
<div class="mt-5 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>

---
layout: default
---

# Нельзя просто взять и создать распределенную систему

<p class="text-sm opacity-70 italic -mt-2">Восемь ложных предположений (по Л. Питеру Дойчу и Дж. Гослингу)</p>

<div class="grid grid-cols-4 gap-3 mt-6">

<!-- 1. Сеть надежна -->
<div class="bg-red-50 border-2 border-red-200 rounded-lg p-3 text-center">
  <div class="flex justify-between items-center mb-1">
    <span class="text-xs font-bold text-red-600">№1</span>
    <span class="text-red-500 font-bold text-lg leading-none">✗</span>
  </div>
  <svg class="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round">
    <path d="M2,10 Q12,3 22,10" />
    <path d="M5,14 Q12,8 19,14" />
    <path d="M8,18 Q12,14 16,18" />
    <circle cx="12" cy="22" r="1" fill="#6b7280" stroke="none" />
  </svg>
  <div class="text-sm mt-2 decoration-red-400 decoration-2">сеть надежна</div>
</div>

<!-- 2. Задержка = 0 -->
<div class="bg-red-50 border-2 border-red-200 rounded-lg p-3 text-center">
  <div class="flex justify-between items-center mb-1">
    <span class="text-xs font-bold text-red-600">№2</span>
    <span class="text-red-500 font-bold text-lg leading-none">✗</span>
  </div>
  <svg class="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round">
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="12" x2="12" y2="6" />
    <line x1="12" y1="12" x2="16" y2="14" />
  </svg>
  <div class="text-sm mt-2 decoration-red-400 decoration-2">задержка = 0</div>
</div>

<!-- 3. Пропускная способность бесконечна -->
<div class="bg-red-50 border-2 border-red-200 rounded-lg p-3 text-center">
  <div class="flex justify-between items-center mb-1">
    <span class="text-xs font-bold text-red-600">№3</span>
    <span class="text-red-500 font-bold text-lg leading-none">✗</span>
  </div>
  <svg class="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4,4 L20,4 L12,12 L12,20 L12,12 Z" fill="#e5e7eb" />
  </svg>
  <div class="text-sm mt-2 decoration-red-400 decoration-2">пропускная способность ∞</div>
</div>

<!-- 4. Сеть безопасна -->
<div class="bg-red-50 border-2 border-red-200 rounded-lg p-3 text-center">
  <div class="flex justify-between items-center mb-1">
    <span class="text-xs font-bold text-red-600">№4</span>
    <span class="text-red-500 font-bold text-lg leading-none">✗</span>
  </div>
  <svg class="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round">
    <rect x="5" y="11" width="14" height="10" rx="1" fill="#e5e7eb" stroke="#6b7280" />
    <path d="M8,11 V8 a4,4 0 0 1 8,0 V11" />
    <circle cx="12" cy="16" r="1.2" fill="#6b7280" stroke="none" />
  </svg>
  <div class="text-sm mt-2 decoration-red-400 decoration-2">сеть безопасна</div>
</div>

<!-- 5. Топология не меняется -->
<div class="bg-red-50 border-2 border-red-200 rounded-lg p-3 text-center">
  <div class="flex justify-between items-center mb-1">
    <span class="text-xs font-bold text-red-600">№5</span>
    <span class="text-red-500 font-bold text-lg leading-none">✗</span>
  </div>
  <svg class="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round">
    <circle cx="4" cy="6" r="2.5" fill="#e5e7eb" />
    <circle cx="20" cy="6" r="2.5" fill="#e5e7eb" />
    <circle cx="12" cy="19" r="2.5" fill="#e5e7eb" />
    <line x1="6" y1="7" x2="18" y2="7" />
    <line x1="5" y1="8" x2="11" y2="17" />
    <line x1="19" y1="8" x2="13" y2="17" />
  </svg>
  <div class="text-sm mt-2 decoration-red-400 decoration-2">топология не меняется</div>
</div>

<!-- 6. Один администратор -->
<div class="bg-red-50 border-2 border-red-200 rounded-lg p-3 text-center">
  <div class="flex justify-between items-center mb-1">
    <span class="text-xs font-bold text-red-600">№6</span>
    <span class="text-red-500 font-bold text-lg leading-none">✗</span>
  </div>
  <svg class="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round">
    <circle cx="12" cy="8" r="3.5" fill="#e5e7eb" />
    <path d="M4,21 a8,8 0 0 1 16,0" />
  </svg>
  <div class="text-sm mt-2 decoration-red-400 decoration-2">один администратор</div>
</div>

<!-- 7. Транспортные расходы = 0 -->
<div class="bg-red-50 border-2 border-red-200 rounded-lg p-3 text-center">
  <div class="flex justify-between items-center mb-1">
    <span class="text-xs font-bold text-red-600">№7</span>
    <span class="text-red-500 font-bold text-lg leading-none">✗</span>
  </div>
  <svg class="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round">
    <circle cx="12" cy="12" r="9" fill="#e5e7eb" />
    <text x="12" y="16" text-anchor="middle" font-size="11" font-weight="bold" fill="#6b7280" stroke="none">$</text>
  </svg>
  <div class="text-sm mt-2 decoration-red-400 decoration-2">транспортные расходы равны нулю</div>
</div>

<!-- 8. Сеть однородна -->
<div class="bg-red-50 border-2 border-red-200 rounded-lg p-3 text-center">
  <div class="flex justify-between items-center mb-1">
    <span class="text-xs font-bold text-red-600">№8</span>
    <span class="text-red-500 font-bold text-lg leading-none">✗</span>
  </div>
  <svg class="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round">
    <circle cx="6" cy="7" r="3" fill="#e5e7eb" />
    <rect x="14" y="4" width="7" height="7" fill="#e5e7eb" stroke="#6b7280" />
    <path d="M3,21 L7,14 L11,21 Z" fill="#e5e7eb" stroke="#6b7280" />
  </svg>
  <div class="text-sm mt-2 decoration-red-400 decoration-2">сеть однородна</div>
</div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson4">← Занятие 4</a>
  <a href="/lesson6">Занятие 6 →</a>
</div>
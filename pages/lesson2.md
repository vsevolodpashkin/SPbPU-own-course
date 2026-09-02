---
layout: center
---

# Бизнес-анализ

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 2. Контексты</div>
<div class="mt-5 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>


---
layout: default
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
layout: default
---

# Контекстная диаграмма (C4 Level 1)

<p class="text-sm leading-snug -mt-3 text-gray-500">
Самый верхний уровень модели <strong class="text-gray-700">C4</strong> (Simon Brown): система в её окружении — кто с ней взаимодействует, какие внешние системы задействованы, какие потоки данных между ними.
</p>

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
  <img src="/c4-context.png" alt="C4 Level 1 — контекстная диаграмма ИТ-системы предприятия" class="max-h-[58vh] max-w-[90vw] object-contain rounded shadow-md border border-gray-200 bg-white" />
</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-1.5">
  Нотация: C4 Model (Simon Brown, <a href="https://c4model.com" class="underline hover:text-gray-600">c4model.com</a>). Диаграмма построена в PlantUML.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/13">← Ценность контекстных диаграмм</a>
  <a href="/lesson3">Занятие 3 →</a>
</div>

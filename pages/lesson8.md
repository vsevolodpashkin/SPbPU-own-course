---
layout: default
---

# Принципы REST

<p class="text-sm leading-snug -mt-3">REST задаётся пятью архитектурными ограничениями.</p>

<div class="grid grid-cols-2 gap-2 mt-2">

<!-- 1. Ресурсы и представления -->
<div class="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-2.5">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="flex-shrink-0 bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
      </svg>
    </span>
    <strong class="text-indigo-900 text-sm">Ресурсы и представления</strong>
  </div>
  <p class="text-xs leading-relaxed">Любая сущность — ресурс с URI; клиент работает лишь с её представлением (JSON, XML, HTML).</p>
</div>

<!-- 2. Отсутствие состояний на сервере -->
<div class="bg-slate-50 border-2 border-slate-300 rounded-xl p-2.5">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="flex-shrink-0 bg-slate-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M7 2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
        <line x1="2" y1="2" x2="22" y2="22"/>
      </svg>
    </span>
    <strong class="text-slate-900 text-sm">Отсутствие состояний на сервере</strong>
  </div>
  <p class="text-xs leading-relaxed">Каждый запрос самодостаточен: сервер не хранит контекст клиента между вызовами.</p>
</div>

<!-- 3. Самоописываемые сообщения -->
<div class="bg-cyan-50 border-2 border-cyan-300 rounded-xl p-2.5">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="flex-shrink-0 bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M8 3H7a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1"/>
        <path d="M16 3h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-1"/>
      </svg>
    </span>
    <strong class="text-cyan-900 text-sm">Самоописываемые сообщения</strong>
  </div>
  <p class="text-xs leading-relaxed">Метаданные (Content-Type, схема) в сообщении говорят получателю, как его обработать.</p>
</div>

<!-- 4. Возможность кэширования -->
<div class="bg-amber-50 border-2 border-amber-300 rounded-xl p-2.5">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="flex-shrink-0 bg-amber-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14a9 3 0 0 0 18 0V5"/>
        <path d="M3 12a9 3 0 0 0 18 0"/>
      </svg>
    </span>
    <strong class="text-amber-900 text-sm">Возможность кэширования</strong>
  </div>
  <p class="text-xs leading-relaxed">Ответы помечаются Cache-Control — клиент может не обращаться к серверу повторно.</p>
</div>

</div>

<!-- HATEOAS: full-width highlighted principle -->
<div class="mt-2 bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300 rounded-xl p-2.5">
  <div class="flex items-start gap-2.5">
    <span class="flex-shrink-0 bg-rose-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M9 17H7a5 5 0 0 1 0-10h2"/>
        <path d="M15 7h2a5 5 0 1 1 0 10h-2"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    </span>
    <div class="min-w-0">
      <div class="flex items-baseline gap-1.5 flex-wrap">
        <strong class="text-rose-900 text-sm">HATEOAS</strong>
        <span class="text-rose-700 text-xs italic">гипермедиа для навигации по API</span>
      </div>
      <p class="text-xs leading-relaxed mt-0.5">Сервер возвращает ссылки на действия и ресурсы — клиент переходит по API как по веб-странице.</p>
    </div>
  </div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson7">← Занятие 7</a>
  <a href="/lesson9">Занятие 9 →</a>
</div>

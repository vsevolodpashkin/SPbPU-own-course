---
layout: center
---

# Основы проектирования ПО

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 1</div>
<div class="mt-5 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
---
layout: default
---

# Модель TCP/IP

<p class="text-sm leading-snug -mt-3 text-gray-500">
Четырёхуровневая сетевая модель Интернета. Каждый уровень решает свою задачу и опирается на сервисы нижнего. Данные при передаче «обрастают» заголовками — это называется <strong class="text-gray-700">инкапсуляцией</strong>.
</p>

<div class="mt-3 space-y-1.5">

  <!-- Уровень 4: Прикладной -->
  <div class="bg-sky-50 border-l-4 border-sky-500 rounded-r-lg p-2 flex items-center gap-3">
    <span class="bg-sky-500 text-white font-bold rounded w-8 h-8 flex items-center justify-center text-sm shrink-0">4</span>
    <div class="shrink-0 w-44">
      <div class="text-sky-900 font-semibold text-sm leading-tight">Прикладной</div>
      <div class="text-sky-700 text-[10px] font-mono uppercase leading-tight">Application</div>
    </div>
    <div class="text-xs text-gray-700 leading-snug flex-1 min-w-0">API для пользовательских приложений. Взаимодействие пользовательских приложений с сетью.</div>
    <div class="flex flex-wrap gap-1 shrink-0 justify-end" style="max-width: 420px;">
      <span class="bg-white border border-sky-200 text-sky-800 px-1.5 py-0.5 rounded font-mono text-[11px]">HTTP</span>
      <span class="bg-white border border-sky-200 text-sky-800 px-1.5 py-0.5 rounded font-mono text-[11px]">HTTPS</span>
      <span class="bg-white border border-sky-200 text-sky-800 px-1.5 py-0.5 rounded font-mono text-[11px]">FTP</span>
      <span class="bg-white border border-sky-200 text-sky-800 px-1.5 py-0.5 rounded font-mono text-[11px]">SMTP</span>
      <span class="bg-white border border-sky-200 text-sky-800 px-1.5 py-0.5 rounded font-mono text-[11px]">DNS</span>
      <span class="bg-white border border-sky-200 text-sky-800 px-1.5 py-0.5 rounded font-mono text-[11px]">SSH</span>
      <span class="bg-white border border-sky-200 text-sky-800 px-1.5 py-0.5 rounded font-mono text-[11px]">SNMP</span>
      <span class="bg-white border border-sky-200 text-sky-800 px-1.5 py-0.5 rounded font-mono text-[11px]">NTP</span>
    </div>
  </div>

  <!-- Уровень 3: Транспортный -->
  <div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-2 flex items-center gap-3">
    <span class="bg-emerald-500 text-white font-bold rounded w-8 h-8 flex items-center justify-center text-sm shrink-0">3</span>
    <div class="shrink-0 w-44">
      <div class="text-emerald-900 font-semibold text-sm leading-tight">Транспортный</div>
      <div class="text-emerald-700 text-[10px] font-mono uppercase leading-tight">Transport</div>
    </div>
    <div class="text-xs text-gray-700 leading-snug flex-1 min-w-0">End-to-end доставка данных между процессами (сокетами).</div>
    <div class="flex flex-wrap gap-1 shrink-0 justify-end" style="max-width: 420px;">
      <span class="bg-white border border-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded font-mono text-[11px]">TCP</span>
      <span class="bg-white border border-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded font-mono text-[11px]">UDP</span>
      <span class="bg-white border border-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded font-mono text-[11px]">DCCP</span>
      <span class="bg-white border border-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded font-mono text-[11px]">SCTP</span>
    </div>
  </div>

  <!-- Уровень 2: Межсетевой -->
  <div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-2 flex items-center gap-3">
    <span class="bg-amber-500 text-white font-bold rounded w-8 h-8 flex items-center justify-center text-sm shrink-0">2</span>
    <div class="shrink-0 w-44">
      <div class="text-amber-900 font-semibold text-sm leading-tight">Межсетевой</div>
      <div class="text-amber-700 text-[10px] font-mono uppercase leading-tight">Internet</div>
    </div>
    <div class="text-xs text-gray-700 leading-snug flex-1 min-w-0">Адресация и маршрутизация пакетов между сетями.</div>
    <div class="flex flex-wrap gap-1 shrink-0 justify-end" style="max-width: 420px;">
      <span class="bg-white border border-amber-200 text-amber-800 px-1.5 py-0.5 rounded font-mono text-[11px]">IP v4/v6</span>
      <span class="bg-white border border-amber-200 text-amber-800 px-1.5 py-0.5 rounded font-mono text-[11px]">ICMP</span>
      <span class="bg-white border border-amber-200 text-amber-800 px-1.5 py-0.5 rounded font-mono text-[11px]">IGMP</span>
      <span class="bg-white border border-amber-200 text-amber-800 px-1.5 py-0.5 rounded font-mono text-[11px]">ARP</span>
      <span class="bg-white border border-amber-200 text-amber-800 px-1.5 py-0.5 rounded font-mono text-[11px]">RARP</span>
      <span class="bg-white border border-amber-200 text-amber-800 px-1.5 py-0.5 rounded font-mono text-[11px]">OSPF</span>
      <span class="bg-white border border-amber-200 text-amber-800 px-1.5 py-0.5 rounded font-mono text-[11px]">BGP</span>
    </div>
  </div>

  <!-- Уровень 1: Канальный -->
  <div class="bg-rose-50 border-l-4 border-rose-500 rounded-r-lg p-2 flex items-center gap-3">
    <span class="bg-rose-500 text-white font-bold rounded w-8 h-8 flex items-center justify-center text-sm shrink-0">1</span>
    <div class="shrink-0 w-44">
      <div class="text-rose-900 font-semibold text-sm leading-tight">Канальный</div>
      <div class="text-rose-700 text-[10px] font-mono uppercase leading-tight">Link · Network Access</div>
    </div>
    <div class="text-xs text-gray-700 leading-snug flex-1 min-w-0">Передача фреймов в одном сегменте сети. Физическая адресация (MAC).</div>
    <div class="flex flex-wrap gap-1 shrink-0 justify-end" style="max-width: 420px;">
      <span class="bg-white border border-rose-200 text-rose-800 px-1.5 py-0.5 rounded font-mono text-[11px]">Ethernet</span>
      <span class="bg-white border border-rose-200 text-rose-800 px-1.5 py-0.5 rounded font-mono text-[11px]">Wi-Fi</span>
      <span class="bg-white border border-rose-200 text-rose-800 px-1.5 py-0.5 rounded font-mono text-[11px]">PPP</span>
      <span class="bg-white border border-rose-200 text-rose-800 px-1.5 py-0.5 rounded font-mono text-[11px]">SLIP</span>
      <span class="bg-white border border-rose-200 text-rose-800 px-1.5 py-0.5 rounded font-mono text-[11px]">802.11</span>
    </div>
  </div>

</div>

<!-- Единицы данных (инкапсуляция) -->
<div class="mt-3 grid grid-cols-4 gap-2 text-[10px] text-center">
  <div class="bg-sky-50 border border-sky-200 rounded px-1.5 py-1"><span class="font-semibold text-sky-700">Data</span><div class="text-sky-600/70 text-[9px]">приложение</div></div>
  <div class="bg-emerald-50 border border-emerald-200 rounded px-1.5 py-1"><span class="font-semibold text-emerald-700">Segment</span><div class="text-emerald-600/70 text-[9px]">транспорт</div></div>
  <div class="bg-amber-50 border border-amber-200 rounded px-1.5 py-1"><span class="font-semibold text-amber-700">Packet</span><div class="text-amber-600/70 text-[9px]">сеть</div></div>
  <div class="bg-rose-50 border border-rose-200 rounded px-1.5 py-1"><span class="font-semibold text-rose-700">Frame</span><div class="text-rose-600/70 text-[9px]">канал</div></div>
</div>
<div class="text-center text-[10px] text-gray-400 italic -mt-1">единицы данных на каждом уровне</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson3">← Занятие 3</a>
  <a href="/lesson5">Занятие 5 →</a>
</div>

---
layout: default
---

# Жизненный цикл TCP-соединения

<p class="text-sm leading-snug -mt-3 text-gray-500">
TCP устанавливает соединение через <strong class="text-gray-700">трёхстороннее рукопожатие</strong> (SYN → SYN-ACK → ACK), передаёт данные и завершает связь <strong class="text-gray-700">четырёхсторонним закрытием</strong> (FIN → ACK → FIN → ACK).
</p>

<!-- Фазы -->
<div class="mt-3 grid grid-cols-3 gap-2 text-[10px] uppercase tracking-wider text-center font-semibold">
  <div class="text-blue-700">1. Установление</div>
  <div class="text-purple-700">2. Передача данных</div>
  <div class="text-red-700">3. Завершение</div>
</div>

<!-- SVG-диаграмма -->
<div class="mt-1 bg-white border border-gray-200 rounded-lg p-2">
<svg viewBox="0 0 760 380" class="w-full" text-rendering="optimizeLegibility">
<defs>
<marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#2563eb"/></marker>
<marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#16a34a"/></marker>
<marker id="arrow-purple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#7c3aed"/></marker>
<marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#dc2626"/></marker>
</defs>
<rect x="100" y="10" width="160" height="36" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="6"/>
<text x="180" y="34" text-anchor="middle" fill="#1e40af" style="font:600 14px sans-serif">Клиент</text>
<rect x="500" y="10" width="160" height="36" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="6"/>
<text x="580" y="34" text-anchor="middle" fill="#166534" style="font:600 14px sans-serif">Сервер</text>
<line x1="180" y1="46" x2="180" y2="370" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>
<line x1="580" y1="46" x2="580" y2="370" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>
<line x1="185" y1="80" x2="575" y2="80" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>
<text x="380" y="73" text-anchor="middle" fill="#1e40af" style="font:600 11px sans-serif">SYN, seq=x</text>
<line x1="575" y1="120" x2="185" y2="120" stroke="#16a34a" stroke-width="1.5" marker-end="url(#arrow-green)"/>
<text x="380" y="113" text-anchor="middle" fill="#166534" style="font:600 11px sans-serif">SYN, ACK, seq=y, ack=x+1</text>
<line x1="185" y1="160" x2="575" y2="160" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>
<text x="380" y="153" text-anchor="middle" fill="#1e40af" style="font:600 11px sans-serif">ACK, seq=x+1, ack=y+1</text>
<text x="380" y="183" text-anchor="middle" fill="#16a34a" style="font:600 10px sans-serif">✓ ESTABLISHED — соединение готово</text>
<line x1="185" y1="220" x2="575" y2="220" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#arrow-purple)"/>
<text x="380" y="213" text-anchor="middle" fill="#5b21b6" style="font:600 11px sans-serif">DATA (seq, ack, payload)</text>
<line x1="185" y1="270" x2="575" y2="270" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrow-red)"/>
<text x="380" y="263" text-anchor="middle" fill="#991b1b" style="font:600 11px sans-serif">FIN, seq=u</text>
<line x1="575" y1="305" x2="185" y2="305" stroke="#16a34a" stroke-width="1.5" marker-end="url(#arrow-green)"/>
<text x="380" y="298" text-anchor="middle" fill="#166534" style="font:600 11px sans-serif">ACK, ack=u+1</text>
<line x1="575" y1="335" x2="185" y2="335" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrow-red)"/>
<text x="380" y="328" text-anchor="middle" fill="#991b1b" style="font:600 11px sans-serif">FIN</text>
<line x1="185" y1="365" x2="575" y2="365" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>
<text x="380" y="358" text-anchor="middle" fill="#1e40af" style="font:600 11px sans-serif">ACK</text>
<text x="380" y="378" text-anchor="middle" fill="#16a34a" style="font:600 10px sans-serif">✓ CLOSED — соединение закрыто</text>
</svg>
</div>

<div class="text-center text-[10px] text-gray-500 italic mt-1">
  цвет: <span class="text-blue-700 font-medium">синий</span> — клиент→сервер,
  <span class="text-emerald-700 font-medium">зелёный</span> — сервер→клиент,
  <span class="text-purple-700 font-medium">фиолетовый</span> — данные,
  <span class="text-red-700 font-medium">красный</span> — закрытие
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson3">← Занятие 3</a>
  <a href="/lesson5">Занятие 5 →</a>
</div>
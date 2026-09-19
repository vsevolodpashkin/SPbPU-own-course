---
hide: false
layout: center
---

# Основы проектирования ПО

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 1. Компьютерные сети, распределенные системы </div>
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

# Модели взаимодействия устройств в сети

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Два базовых паттерна обмена данными между узлами сети — <strong class="text-gray-700">клиент-сервер</strong> и <strong class="text-gray-700">peer-to-peer</strong>.
</p>

<!-- Определение компьютерной сети -->
<div class="mt-2 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-2.5">
  <div class="text-[10px] uppercase tracking-wider text-blue-700 font-semibold mb-0.5">Компьютерная сеть</div>
  <div class="text-[13px] text-blue-900 leading-snug">
    <strong class="text-blue-900">Совокупность компьютеров и периферийных устройств</strong>, соединённых каналами связи для <strong class="text-blue-900">совместного использования ресурсов и обмена данными</strong>.
    <span class="text-[10px] text-blue-700/80 italic block mt-0.5">— Э. Танненбаум, «Компьютерные сети»</span>
  </div>
</div>

<!-- 2 колонки: клиент-сервер / P2P -->
<div class="grid grid-cols-2 gap-3 mt-3">

  <!-- ЛЕВАЯ КОЛОНКА: Клиент-сервер -->
  <div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-3">
    <div class="flex items-center gap-2 mb-1.5">
      <span class="text-xl">🖥️ → 📡</span>
      <div>
        <strong class="text-blue-900 text-sm font-semibold">Клиент-серверная</strong>
        <div class="text-[10px] text-blue-700 font-mono">Client–Server</div>
      </div>
    </div>
    <p class="text-[11.5px] text-gray-800 leading-snug mb-2">
      Есть <strong>выделенный сервер</strong>, обслуживающий множество клиентов. Клиенты только потребляют сервисы.
    </p>
    <div class="text-[10px] uppercase tracking-wider text-blue-700 font-semibold mb-1">Характеристики</div>
    <ul class="text-[10.5px] text-gray-700 space-y-0.5 leading-snug mb-2">
      <li class="flex gap-1.5"><span class="text-blue-600 shrink-0">▸</span><span><strong class="text-gray-900">Централизация</strong> — управление и данные в одном месте</span></li>
      <li class="flex gap-1.5"><span class="text-blue-600 shrink-0">▸</span><span><strong class="text-gray-900">Асимметрия ролей</strong> — сервер ≠ клиент</span></li>
      <li class="flex gap-1.5"><span class="text-blue-600 shrink-0">▸</span><span><strong class="text-gray-900">Single point of failure</strong> — без сервера нет сервиса</span></li>
    </ul>
    <div class="text-[10px] uppercase tracking-wider text-blue-700 font-semibold mb-1">Примеры систем</div>
    <div class="flex flex-wrap gap-1">
      <span class="bg-white border border-blue-200 text-blue-800 px-1.5 py-0.5 rounded text-[10.5px] font-mono">WWW (HTTP)</span>
      <span class="bg-white border border-blue-200 text-blue-800 px-1.5 py-0.5 rounded text-[10.5px] font-mono">DNS</span>
      <span class="bg-white border border-blue-200 text-blue-800 px-1.5 py-0.5 rounded text-[10.5px] font-mono">SMTP/POP3</span>
      <span class="bg-white border border-blue-200 text-blue-800 px-1.5 py-0.5 rounded text-[10.5px] font-mono">AWS S3 API</span>
      <span class="bg-white border border-blue-200 text-blue-800 px-1.5 py-0.5 rounded text-[10.5px] font-mono">Netflix</span>
      <span class="bg-white border border-blue-200 text-blue-800 px-1.5 py-0.5 rounded text-[10.5px] font-mono">MySQL</span>
    </div>
  </div>
  <!-- ПРАВАЯ КОЛОНКА: P2P -->
  <div class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-3">
    <div class="flex items-center gap-2 mb-1.5">
      <span class="text-xl">📡 ↔ 📡</span>
      <div>
        <strong class="text-emerald-900 text-sm font-semibold">P2P (одноранговая)</strong>
        <div class="text-[10px] text-emerald-700 font-mono">Peer-to-Peer</div>
      </div>
    </div>
    <p class="text-[11.5px] text-gray-800 leading-snug mb-2">
      Все узлы <strong>равноправны</strong>: каждый может как потреблять, так и предоставлять ресурсы.
    </p>
    <div class="text-[10px] uppercase tracking-wider text-emerald-700 font-semibold mb-1">Характеристики</div>
    <ul class="text-[10.5px] text-gray-700 space-y-0.5 leading-snug mb-2">
      <li class="flex gap-1.5"><span class="text-emerald-600 shrink-0">▸</span><span><strong class="text-gray-900">Децентрализация</strong> — нет единого центра</span></li>
      <li class="flex gap-1.5"><span class="text-emerald-600 shrink-0">▸</span><span><strong class="text-gray-900">Симметрия ролей</strong> — каждый = и клиент, и сервер</span></li>
      <li class="flex gap-1.5"><span class="text-emerald-600 shrink-0">▸</span><span><strong class="text-gray-900">Отказоустойчивость</strong> — нет single point of failure</span></li>
    </ul>
    <div class="text-[10px] uppercase tracking-wider text-emerald-700 font-semibold mb-1">Примеры систем</div>
    <div class="flex flex-wrap gap-1">
      <span class="bg-white border border-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded text-[10.5px] font-mono">BitTorrent</span>
      <span class="bg-white border border-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded text-[10.5px] font-mono">IPFS</span>
      <span class="bg-white border border-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded text-[10.5px] font-mono">Bitcoin</span>
      <span class="bg-white border border-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded text-[10.5px] font-mono">Ethereum</span>
      <span class="bg-white border border-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded text-[10.5px] font-mono">Skype (early)</span>
      <span class="bg-white border border-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded text-[10.5px] font-mono">Gnutella</span>
    </div>
  </div>

</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-2">
  Источник: Таненбаум Э., Уэзеролл Д. <em>Компьютерные сети</em> / пер. с англ. — 5-е изд. — СПб. : Питер, 2014. — 960 с. — ISBN 978-5-496-00922-3.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson4">← Занятие 4</a>
  <a href="/lesson6">Занятие 6 →</a>
</div>

---
hide: false
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
hide: false
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

---
hide: false
layout: default
---

# Скорость доступа к данным

<p class="text-sm opacity-70 italic -mt-2">От такта процессора до интернет-запроса через океан — в масштабе человеческого восприятия</p>

<table class="w-full text-sm mt-2 border-collapse tabular-nums">
  <thead>
    <tr class="border-b-2 border-slate-400">
      <th class="text-left py-1 pr-3 font-semibold text-slate-700">Компонент / Операция</th>
      <th class="text-left py-3 px-3 font-semibold text-slate-700">Время</th>
      <th class="text-right py-1 pl-3 font-semibold text-slate-700">Время в чел. масштаб</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-slate-100 bg-emerald-50">
      <td class="py-1 pr-3">Такт процессора</td>
      <td class="text-right py-1 px-3 font-mono">0,3 нс</td>
      <td class="text-right py-1 pl-3 font-mono">1 с</td>
    </tr>
    <tr class="border-b border-slate-100 bg-emerald-50">
      <td class="py-1 pr-3">L1 cache</td>
      <td class="text-right py-1 px-3 font-mono">0,9 нс</td>
      <td class="text-right py-1 pl-3 font-mono">3 с</td>
    </tr>
    <tr class="border-b border-slate-100 bg-lime-50">
      <td class="py-1 pr-3">L2 cache</td>
      <td class="text-right py-1 px-3 font-mono">2,8 нс</td>
      <td class="text-right py-1 pl-3 font-mono">9 с</td>
    </tr>
    <tr class="border-b border-slate-100 bg-yellow-50">
      <td class="py-1 pr-3">L3 cache</td>
      <td class="text-right py-1 px-3 font-mono">12,9 нс</td>
      <td class="text-right py-1 pl-3 font-mono">43 с</td>
    </tr>
    <tr class="border-b border-slate-100 bg-orange-50">
      <td class="py-1 pr-3">Основная память (RAM)</td>
      <td class="text-right py-1 px-3 font-mono">120 нс</td>
      <td class="text-right py-1 pl-3 font-mono">6 мин</td>
    </tr>
    <tr class="border-b border-slate-100 bg-red-100">
      <td class="py-1 pr-3">SSD диск</td>
      <td class="text-right py-1 px-3 font-mono">50–150 мкс</td>
      <td class="text-right py-1 pl-3 font-mono">2–6 дней</td>
    </tr>
    <tr class="border-b border-slate-100 bg-red-200">
      <td class="py-1 pr-3">Вращающийся диск (HDD)</td>
      <td class="text-right py-1 px-3 font-mono">1–10 мс</td>
      <td class="text-right py-1 pl-3 font-mono">1–12 мес</td>
    </tr>
    <tr class="bg-red-300">
      <td class="py-1 pr-3 font-semibold text-slate-900">Интернет (Сан-Франциско → Нью-Йорк)</td>
      <td class="text-right py-1 px-3 font-mono font-semibold">40 мс</td>
      <td class="text-right py-1 pl-3 font-mono font-semibold">≈4 года</td>
    </tr>
  </tbody>
</table>

<p class="text-[10px] text-slate-500 italic mt-1.5 text-center">
  Источник: Gregg B. Systems Performance: Enterprise and the Cloud. — 2nd ed. — Boston: Addison-Wesley Professional, 2020. — 944 p. — ISBN 978-0-13-682015-1.
</p>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson3">← Занятие 3</a>
  <a href="/lesson5">Занятие 5 →</a>
</div>

---
hide: false
layout: default
---

# Распределённые системы

<blockquote class="border-l-4 border-blue-500 bg-blue-50 pl-4 pr-3 py-2.5 my-2 italic text-slate-700 text-sm">
  Распределённая система представляет собой совокупность автономных вычислительных элементов и является для его пользователей единой связанной системой.
</blockquote>

<div class="flex justify-center mt-2">
  <img src="/Distributed_system.webp" alt="Распределённая система: 6 автономных узлов и пользователь" class="rounded shadow-md border border-gray-200 max-h-[50vh] max-w-[80vw] object-contain bg-white" />
</div>

<p class="text-[10px] text-slate-500 italic mt-2 text-center">
  Источник: Tanenbaum A., Van Steen M. Distributed Systems: Principles and Paradigms. — 2nd ed. — Upper Saddle River, NJ: Pearson Prentice Hall, 2007. — 704 p. — ISBN 978-0-13-239464-5.
</p>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson3">← Занятие 3</a>
  <a href="/lesson5">Занятие 5 →</a>
</div>

---
hide: false
layout: default
---

# Сервисы

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Базовый строительный блок микросервисной архитектуры — <strong class="text-gray-700">автономная единица развёртывания</strong> с собственным API.
</p>

<!-- 2 колонки: текст слева, изображение справа -->
<div class="grid grid-cols-2 gap-5 mt-3">

  <!-- ЛЕВАЯ КОЛОНКА: определение -->
  <div>
    <div class="text-xs text-gray-500 mb-1.5 flex items-center gap-2">
      <span class="font-mono text-gray-700">Определение</span>
      <span class="text-gray-300">·</span>
      <span>по К. Ричардсону</span>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-3 space-y-2.5">
      <p class="text-[13px] text-gray-800 leading-relaxed">
        <strong class="text-gray-900">Сервис</strong> — это автономный, независимо развертываемый программный компонент, который реализует определённые функции.
      </p>
      <p class="text-[13px] text-gray-700 leading-relaxed">
        У него есть <strong class="text-gray-900">внешний интерфейс (API)</strong>, через который сервис предоставляет доступ к своим функциям.
      </p>
      <div class="border-t border-slate-200 pt-2.5">
        <div class="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1.5">API состоит из</div>
        <div class="grid grid-cols-3 gap-2">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center">
            <div class="text-blue-700 font-semibold text-xs">Команды</div>
            <div class="text-blue-600/80 text-[10px] mt-0.5">действие</div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-center">
            <div class="text-emerald-700 font-semibold text-xs">Запросы</div>
            <div class="text-emerald-600/80 text-[10px] mt-0.5">чтение</div>
          </div>
          <div class="bg-purple-50 border border-purple-200 rounded-lg p-2 text-center">
            <div class="text-purple-700 font-semibold text-xs">События</div>
            <div class="text-purple-600/80 text-[10px] mt-0.5">уведомление</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ПРАВАЯ КОЛОНКА: стек виртуальной машины -->
  <div>
    <div class="text-xs text-gray-500 mb-1.5 flex items-center gap-2">
      <span class="font-mono text-gray-700">Инфраструктура</span>
      <span class="text-gray-300">·</span>
      <span>где работает сервис</span>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-2">
      <img src="/VM.png" alt="Стек виртуальной машины: от слоя приложения до физического сервера" class="w-full max-h-[400px] object-contain" />
    </div>
  </div>

</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-2">
  Источник: Ричардсон К. Микросервисы. Паттерны разработки и рефакторинга / пер. с англ. — СПб. : Питер, 2019. — 544 с. — (Серия «Библиотека программиста»).
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson4">← Занятие 4</a>
  <a href="/lesson6">Занятие 6 →</a>
</div>

---
hide: false
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
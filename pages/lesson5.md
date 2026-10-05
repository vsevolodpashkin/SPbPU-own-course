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

# Краткая историческая справка. Сети APRANET и NSFNET

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Как росли американские компьютерные сети от экспериментальной четвёрки узлов до национальной магистрали.
</p>

<!-- ARPANET -->
<div v-click="1" class="mt-2 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <span class="bg-orange-500 text-white font-bold rounded w-7 h-7 flex items-center justify-center text-sm shrink-0">1</span>
    <strong class="text-orange-900 text-base">ARPANET</strong>
    <span class="text-orange-700 text-[11px] font-mono">1969 — Advanced Research Projects Agency Network</span>
  </div>
  <div class="text-[12.5px] text-gray-800 leading-snug">
    Проект <strong>ARPA</strong> Министерства обороны США. Первая в мире пакетная сеть с коммутацией.
    <strong>Октябрь 1969:</strong> старт с 4 узлов — UCLA, Stanford Research Institute (SRI), UCSB, University of Utah.
    Управлялась ARPANET IMP (Interface Message Processor) на базе мини-компьютеров Honeywell DDP-516.
    Эволюция: <code class="bg-white px-1 rounded">50 кбит/с</code> → <code class="bg-white px-1 rounded">56 кбит/с</code> → <code class="bg-white px-1 rounded">1.5 Мбит/с (T1)</code>.
  </div>
</div>

<!-- NSFNET -->
<div v-click="2" class="mt-2 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <span class="bg-blue-500 text-white font-bold rounded w-7 h-7 flex items-center justify-center text-sm shrink-0">2</span>
    <strong class="text-blue-900 text-base">NSFNET</strong>
    <span class="text-blue-700 text-[11px] font-mono">1986 — National Science Foundation Network</span>
  </div>
  <div class="text-[12.5px] text-gray-800 leading-snug">
    Создана Национальным научным фондом США как <strong>магистраль для суперкомпьютерных центров</strong>.
    <strong>1986:</strong> 6 узлов на скорости <code class="bg-white px-1 rounded">56 кбит/с</code>.
    Постепенно <em>заменила ARPANET</em> как основную сеть для академического сообщества.
    Эволюция: <code class="bg-white px-1 rounded">56 кбит/с</code> → <code class="bg-white px-1 rounded">1.5 Мбит/с (T1, 1988)</code> →
    <code class="bg-white px-1 rounded">45 Мбит/с (T3, 1991)</code> → <code class="bg-white px-1 rounded">155 Мбит/с (OC3, 1996)</code>.
    В 1995 коммерциализирована → стала основой для современного интернета.
  </div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/Модели взаимодействия">← Модели взаимодействия устройств в сети</a>
  <a href="/Карта сетей">Карта сетей →</a>
</div>

---
hide: false
layout: default
---

# Сеть ARPANET

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Топология первой в мире пакетной сети с коммутацией — <strong class="text-gray-700">4 узла в 1969 г.</strong>,
  выросшей к 1970-м в общенациональную инфраструктуру.
</p>

<!-- Картинка по центру -->
<div class="mt-3 flex items- justify-center h-full">
  <img src="/APRANET_1969.png"
       alt="Топология сети APRANET в 1969 году — четыре узла: UCLA, SRI (Stanford Research Institute), UCSB (University of California Santa Barbara), University of Utah, соединённые выделенными линиями 50 кбит/с"
       style="max-height: 360px; max-width: 820px; width: auto; height: auto;"
       class="object-contain rounded shadow-md border border-gray-200 bg-white" />
</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-2">
  Источник: историческая схема ARPANET, 1969. Подписи узлов: UCLA, SRI, UCSB (Univ. of California, Santa Barbara), Univ. of Utah.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/Краткая историческая">← Краткая историческая справка</a>
  <a href="/Модель TCP/IP">Модель TCP/IP →</a>
</div>

---
hide: false
layout: default
---

# Сеть NSFNET

<p class="text-sm leading-snug -mt-3 text-gray-500">
  <strong class="text-gray-700">NSFNET</strong> — национальная магистраль для академического и научного сообщества США,
  заменившая ARPANET к концу 1980-х.
</p>

<!-- Картинка по центру -->
<div class="mt-3 flex items-start justify-center h-full">
  <img src="/NSFNET.png"
       alt="Топология сети NSFNET — национальная академическая магистраль США с узлами в ведущих университетах и исследовательских центрах"
       style="max-height: 360px; max-width: 880px; width: auto; height: auto;"
       class="object-contain rounded shadow-md border border-gray-200 bg-white" />
</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-2">
  Источник: историческая схема NSFNET (National Science Foundation Network), США. Заменила ARPANET как основную сеть для академического и научного сообщества.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/Сеть APRANET">← Сеть APRANET</a>
  <a href="/Модель TCP/IP">Модель TCP/IP →</a>
</div>

---
hide: false
layout: default
---

# Модель OSI

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Эталонная <strong class="text-gray-700">7-уровневая модель</strong> взаимодействия открытых систем (ISO/IEC 7498-1).
  Каждый уровень решает свою задачу и опирается на сервисы нижнего.
</p>

<!-- 7 уровней OSI (компактные строки) -->
<div class="mt-2 space-y-0.5 text-[10.5px]">

  <!-- 7. Application -->
  <div class="flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 rounded px-1.5 py-0.5">
    <span class="shrink-0 w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-[10px]">7</span>
    <strong class="text-indigo-900">Application</strong>
    <span class="text-indigo-700 font-mono text-[9.5px]">прикладной</span>
    <span class="text-gray-700 text-[10px] leading-tight ml-1">HTTP, FTP, SMTP, DNS — интерфейс с пользователем и сетью</span>
  </div>

  <!-- 6. Presentation -->
  <div class="flex items-center gap-1.5 bg-purple-50 border border-purple-200 rounded px-1.5 py-0.5">
    <span class="shrink-0 w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-[10px]">6</span>
    <strong class="text-purple-900">Presentation</strong>
    <span class="text-purple-700 font-mono text-[9.5px]">представительский</span>
    <span class="text-gray-700 text-[10px] leading-tight ml-1">TLS/SSL, JPEG, MPEG — формат, кодирование, шифрование</span>
  </div>

  <!-- 5. Session -->
  <div class="flex items-center gap-1.5 bg-pink-50 border border-pink-200 rounded px-1.5 py-0.5">
    <span class="shrink-0 w-5 h-5 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-[10px]">5</span>
    <strong class="text-pink-900">Session</strong>
    <span class="text-pink-700 font-mono text-[9.5px]">сеансовый</span>
    <span class="text-gray-700 text-[10px] leading-tight ml-1">RPC, SIP — управление диалогом между приложениями</span>
  </div>

  <!-- 4. Transport -->
  <div class="flex items-center gap-1.5 bg-rose-50 border border-rose-200 rounded px-1.5 py-0.5">
    <span class="shrink-0 w-5 h-5 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-[10px]">4</span>
    <strong class="text-rose-900">Transport</strong>
    <span class="text-rose-700 font-mono text-[9.5px]">транспортный</span>
    <span class="text-gray-700 text-[10px] leading-tight ml-1">TCP (надёжная), UDP (быстрая) — end-to-end доставка, порты</span>
  </div>

  <!-- 3. Network -->
  <div class="flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded px-1.5 py-0.5">
    <span class="shrink-0 w-5 h-5 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-[10px]">3</span>
    <strong class="text-orange-900">Network</strong>
    <span class="text-orange-700 font-mono text-[9.5px]">сетевой</span>
    <span class="text-gray-700 text-[10px] leading-tight ml-1">IP, ICMP, OSPF, BGP — маршрутизация пакетов между сетями</span>
  </div>

  <!-- 2. Data Link -->
  <div class="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5">
    <span class="shrink-0 w-5 h-5 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-[10px]">2</span>
    <strong class="text-amber-900">Data Link</strong>
    <span class="text-amber-700 font-mono text-[9.5px]">канальный</span>
    <span class="text-gray-700 text-[10px] leading-tight ml-1">Ethernet, Wi-Fi, MAC — фреймы в одном сегменте сети</span>
  </div>

  <!-- 1. Physical -->
  <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded px-1.5 py-0.5">
    <span class="shrink-0 w-5 h-5 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold text-[10px]">1</span>
    <strong class="text-slate-900">Physical</strong>
    <span class="text-slate-600 font-mono text-[9.5px]">физический</span>
    <span class="text-gray-700 text-[10px] leading-tight ml-1">Кабели, оптика, радио — биты по физической среде</span>
  </div>

</div>

<!-- Плюсы / Минусы -->
<div class="mt-3 grid grid-cols-2 gap-3">
  <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
    <div class="text-[11px] font-bold text-emerald-800 mb-1">✓ Плюсы модели</div>
    <ul class="text-[10.5px] text-emerald-900 space-y-0.5">
      <li>• Чёткое разделение ответственности между уровнями</li>
      <li>• Стандарт для обсуждения сетевых протоколов</li>
      <li>• Каждый уровень разрабатывается независимо</li>
      <li>• Упрощает диагностику (знаешь, какой уровень чинить)</li>
      <li>• Модульность — замена протокола на уровне не ломает другие</li>
    </ul>
  </div>
  <div class="bg-rose-50 border border-rose-200 rounded-lg p-2.5">
    <div class="text-[11px] font-bold text-rose-800 mb-1">✗ Минусы модели</div>
    <ul class="text-[10.5px] text-rose-900 space-y-0.5">
      <li>• В основном теоретическая — не реализована «как есть»</li>
      <li>• Session и Presentation почти не используются</li>
      <li>• 7 уровней — избыточно для практики (TCP/IP = 4)</li>
      <li>• Жёсткие границы усложняют сквозные оптимизации</li>
      <li>• Реальная сеть не всегда укладывается в модель</li>
    </ul>
  </div>
</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-2">
  Стандарт: ISO/IEC 7498-1:1994 «Information technology — Open Systems Interconnection — Basic Reference Model».
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/TCP/IP">← Модель TCP/IP</a>
  <a href="/TCP-conn">Жизненный цикл TCP →</a>
</div>

---
hide: false
layout: default
---

# Модель OSI. Физический уровень

<p class="text-sm leading-snug -mt-3 text-gray-500">
  <strong class="text-gray-700">Задача:</strong> представить <em>биты информации</em> (0 и 1) в виде
  <em>физических сигналов</em> — электрических напряжений, радио-волн или оптических импульсов —
  и передать их по среде передачи (медь, оптика, радио-эфир).
</p>

<!-- Два графика side-by-side -->
<div class="mt-2 grid grid-cols-2 gap-3">
  <div class="bg-white border border-slate-200 rounded-lg p-2">
    <div class="text-[9.5px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5 text-center">Цифровой сигнал</div>
    <svg viewBox="0 0 280 90" class="w-full" style="max-height: 110px; height: auto;">
      <line x1="0" y1="45" x2="280" y2="45" stroke="#94a3b8" stroke-width="0.5"/>
      <line x1="20" y1="15" x2="20" y2="75" stroke="#94a3b8" stroke-width="0.5"/>
      <text x="3" y="13" font-size="8" style="font-size:8px" fill="#64748b">A</text>
      <text x="3" y="83" font-size="8" style="font-size:8px" fill="#64748b">0</text>
      <text x="275" y="83" font-size="8" style="font-size:8px" fill="#64748b">t</text>
      <rect x="20" y="25" height="20" width="30" fill="#3b82f6" opacity="0.7"/>
      <rect x="50" y="45" height="20" width="30" fill="#3b82f6" opacity="0.7"/>
      <rect x="80" y="25" height="20" width="30" fill="#3b82f6" opacity="0.7"/>
      <rect x="110" y="45" height="20" width="30" fill="#3b82f6" opacity="0.7"/>
      <rect x="140" y="25" height="20" width="30" fill="#3b82f6" opacity="0.7"/>
      <rect x="170" y="45" height="20" width="30" fill="#3b82f6" opacity="0.7"/>
      <rect x="200" y="25" height="20" width="30" fill="#3b82f6" opacity="0.7"/>
      <rect x="230" y="45" height="20" width="30" fill="#3b82f6" opacity="0.7"/>
      <text x="35" y="75" text-anchor="middle" font-size="8" style="font-size:8px" fill="#1e40af">1</text>
      <text x="65" y="75" text-anchor="middle" font-size="8" style="font-size:8px" fill="#1e40af">0</text>
      <text x="95" y="75" text-anchor="middle" font-size="8" style="font-size:8px" fill="#1e40af">1</text>
      <text x="125" y="75" text-anchor="middle" font-size="8" style="font-size:8px" fill="#1e40af">0</text>
      <text x="155" y="75" text-anchor="middle" font-size="8" style="font-size:8px" fill="#1e40af">1</text>
      <text x="185" y="75" text-anchor="middle" font-size="8" style="font-size:8px" fill="#1e40af">0</text>
      <text x="215" y="75" text-anchor="middle" font-size="8" style="font-size:8px" fill="#1e40af">1</text>
      <text x="245" y="75" text-anchor="middle" font-size="8" style="font-size:8px" fill="#1e40af">0</text>
    </svg>
  </div>
  <div class="bg-white border border-slate-200 rounded-lg p-2">
    <div class="text-[9.5px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5 text-center">Сумма синусоид (Фурье)</div>
    <svg viewBox="0 0 280 90" class="w-full" style="max-height: 110px; height: auto;">
      <line x1="0" y1="45" x2="280" y2="45" stroke="#94a3b8" stroke-width="0.5"/>
      <line x1="20" y1="15" x2="20" y2="75" stroke="#94a3b8" stroke-width="0.5"/>
      <text x="3" y="13" font-size="8" style="font-size:8px" fill="#64748b">A</text>
      <text x="3" y="83" font-size="8" style="font-size:8px" fill="#64748b">0</text>
      <text x="275" y="83" font-size="8" style="font-size:8px" fill="#64748b">t</text>
      <path d="M 20 55 L 20 47 Q 24 40 28 35 Q 32 30 36 30 Q 40 30 44 36 Q 48 46 52 51 Q 56 56 60 50 Q 64 40 68 33 Q 72 28 76 33 Q 80 42 84 50 Q 88 55 92 51 Q 96 41 100 33 Q 104 39 108 47 Q 112 52 116 47 Q 120 38 124 32 Q 128 31 132 38 Q 136 47 140 53 Q 144 56 148 51 Q 152 42 156 33 Q 160 31 164 38 Q 168 48 172 54 Q 176 56 180 52 Q 184 42 188 33 Q 192 31 196 38 Q 200 49 204 56 Q 208 57 212 50 Q 216 40 220 32 Q 224 32 228 39 Q 232 49 236 55 Q 240 57 244 52 Q 248 43 252 33 Q 256 33 260 40 Q 264 50 268 55 Q 272 57 276 52 L 280 45" fill="none" stroke="#10b981" stroke-width="1.5"/>
    </svg>
  </div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/Модель OSI">← Модель OSI</a>
  <a href="/Скорость доступа">Скорость доступа к данным →</a>
</div>

---
hide: false
layout: default
---

# Модель OSI. Транспортный уровень

<!-- Тезис 1: Задача -->
<div v-click="1" class="mt-2 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <span class="bg-blue-500 text-white font-bold rounded w-6 h-6 flex items-center justify-center text-xs shrink-0">1</span>
    <strong class="text-blue-900 text-sm">Задача транспортного уровня</strong>
  </div>
  <div class="text-[12px] text-gray-800 leading-snug ml-8">
    Передача данных <strong>между процессами на разных хостах</strong>.
    На одном хосте может работать множество сетевых приложений одновременно — и каждое должно получать «свои» данные.
  </div>
</div>

<!-- Тезис 2: Порты -->
<div v-click="2" class="mt-2 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <span class="bg-indigo-500 text-white font-bold rounded w-6 h-6 flex items-center justify-center text-xs shrink-0">2</span>
    <strong class="text-indigo-900 text-sm">Адресация — порт процесса</strong>
  </div>
  <div class="text-[12px] text-gray-800 leading-snug ml-8 space-y-1">
    <div>Каждое сетевое приложение на хосте имеет свой <strong>порт</strong>.</div>
    <div>Формат записи в адресе: <code class="bg-white px-1.5 py-0.5 rounded font-mono text-[11px] border border-indigo-200">ip-адрес : порт</code></div>
    <div>Например: <code class="bg-white px-1.5 py-0.5 rounded font-mono text-[11px] border border-indigo-200">192.168.1.10:443</code> — IP-адрес хоста плюс порт сервиса.</div>
    <div>Диапазон портов: <code class="bg-white px-1.5 py-0.5 rounded font-mono text-[11px] border border-indigo-200">1–65535</code> (16 бит). Порты <strong>1–1023</strong> — системные (well-known), остальные — динамические/пользовательские.</div>
  </div>
</div>

<!-- Тезис 3: Известные порты -->
<div v-click="3" class="mt-2 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <span class="bg-emerald-500 text-white font-bold rounded w-6 h-6 flex items-center justify-center text-xs shrink-0">3</span>
    <strong class="text-emerald-900 text-sm">Хорошо известные порты (well-known)</strong>
  </div>
  <div class="text-[12px] text-gray-800 leading-snug ml-8">
    <div class="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
      <div class="flex items-baseline gap-2">
        <code class="bg-white border border-emerald-200 text-emerald-700 px-1.5 py-0.5 rounded font-mono text-[11px] min-w-[32px] text-center">80</code>
        <span class="text-gray-700"><strong>HTTP</strong> — веб-сервер</span>
      </div>
      <div class="flex items-baseline gap-2">
        <code class="bg-white border border-emerald-200 text-emerald-700 px-1.5 py-0.5 rounded font-mono text-[11px] min-w-[32px] text-center">25</code>
        <span class="text-gray-700"><strong>SMTP</strong> — почта (отправка)</span>
      </div>
      <div class="flex items-baseline gap-2">
        <code class="bg-white border border-emerald-200 text-emerald-700 px-1.5 py-0.5 rounded font-mono text-[11px] min-w-[32px] text-center">53</code>
        <span class="text-gray-700"><strong>DNS</strong> — разрешение имён</span>
      </div>
      <div class="flex items-baseline gap-2">
        <code class="bg-white border border-emerald-200 text-emerald-700 px-1.5 py-0.5 rounded font-mono text-[11px] min-w-[32px] text-center">67, 68</code>
        <span class="text-gray-700"><strong>DHCP</strong> — автоконфигурация</span>
      </div>
    </div>
  </div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/Модель OSI. Физический уровень">← Модель OSI. Физический уровень</a>
  <a href="/Жизненный цикл TCP-соединения">Жизненный цикл TCP-соединения →</a>
</div>

---
hide: false
layout: default
---

# Модель OSI и Модель TCP/IP

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Визуальное сопоставление: эталонная 7-уровневая модель <strong class="text-gray-700">OSI</strong>
  и практичная 4-уровневая модель <strong class="text-gray-700">TCP/IP</strong>.
</p>

<div class="mt-2 grid grid-cols-2 gap-4">

  <div>
    <div class="text-[10.5px] uppercase tracking-wider text-center text-slate-500 font-semibold mb-1">OSI / Модель открытых систем</div>
    <div class="space-y-1">
      <div class="bg-violet-100 border-l-4 border-violet-500 rounded-r-md p-1.5 flex items-center gap-2">
        <span class="w-5 h-5 bg-violet-600 text-white rounded-full inline-flex items-center justify-center font-bold text-[10px] shrink-0">7</span>
        <strong class="text-violet-900 text-[11.5px]">Application</strong>
        <span class="text-violet-700 text-[9.5px] font-mono ml-auto">прикладной</span>
      </div>
      <div class="bg-violet-50 border-l-4 border-violet-300 rounded-r-md p-1.5 flex items-center gap-2">
        <span class="w-5 h-5 bg-violet-400 text-white rounded-full inline-flex items-center justify-center font-bold text-[10px] shrink-0">6</span>
        <strong class="text-violet-800 text-[11.5px]">Presentation</strong>
        <span class="text-violet-600 text-[9.5px] font-mono ml-auto">представительский</span>
      </div>
      <div class="bg-violet-50 border-l-4 border-violet-300 rounded-r-md p-1.5 flex items-center gap-2">
        <span class="w-5 h-5 bg-violet-400 text-white rounded-full inline-flex items-center justify-center font-bold text-[10px] shrink-0">5</span>
        <strong class="text-violet-800 text-[11.5px]">Session</strong>
        <span class="text-violet-600 text-[9.5px] font-mono ml-auto">сеансовый</span>
      </div>
      <div class="bg-rose-100 border-l-4 border-rose-500 rounded-r-md p-1.5 flex items-center gap-2">
        <span class="w-5 h-5 bg-rose-600 text-white rounded-full inline-flex items-center justify-center font-bold text-[10px] shrink-0">4</span>
        <strong class="text-rose-900 text-[11.5px]">Transport</strong>
        <span class="text-rose-700 text-[9.5px] font-mono ml-auto">транспортный</span>
      </div>
      <div class="bg-emerald-100 border-l-4 border-emerald-500 rounded-r-md p-1.5 flex items-center gap-2">
        <span class="w-5 h-5 bg-emerald-600 text-white rounded-full inline-flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
        <strong class="text-emerald-900 text-[11.5px]">Network</strong>
        <span class="text-emerald-700 text-[9.5px] font-mono ml-auto">сетевой</span>
      </div>
      <div class="bg-amber-100 border-l-4 border-amber-500 rounded-r-md p-1.5 flex items-center gap-2">
        <span class="w-5 h-5 bg-amber-600 text-white rounded-full inline-flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
        <strong class="text-amber-900 text-[11.5px]">Data Link</strong>
        <span class="text-amber-700 text-[9.5px] font-mono ml-auto">канальный</span>
      </div>
      <div class="bg-slate-100 border-l-4 border-slate-500 rounded-r-md p-1.5 flex items-center gap-2">
        <span class="w-5 h-5 bg-slate-600 text-white rounded-full inline-flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
        <strong class="text-slate-900 text-[11.5px]">Physical</strong>
        <span class="text-slate-700 text-[9.5px] font-mono ml-auto">физический</span>
      </div>
    </div>
  </div>

  <div>
    <div class="text-[10.5px] uppercase tracking-wider text-center text-slate-500 font-semibold mb-1">TCP / IP / 4 уровня</div>
    <div class="space-y-1">
      <div class="bg-violet-100 border-l-4 border-violet-500 rounded-r-md p-1.5 flex items-center gap-2">
        <span class="w-5 h-5 bg-violet-600 text-white rounded-full inline-flex items-center justify-center font-bold text-[10px] shrink-0">4</span>
        <strong class="text-violet-900 text-[11.5px]">Application</strong>
        <span class="text-violet-700 text-[9.5px] font-mono ml-auto">= OSI 7+6+5</span>
      </div>
      <div class="bg-rose-100 border-l-4 border-rose-500 rounded-r-md p-1.5 flex items-center gap-2">
        <span class="w-5 h-5 bg-rose-600 text-white rounded-full inline-flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
        <strong class="text-rose-900 text-[11.5px]">Transport</strong>
        <span class="text-rose-700 text-[9.5px] font-mono ml-auto">= OSI 4</span>
      </div>
      <div class="bg-emerald-100 border-l-4 border-emerald-500 rounded-r-md p-1.5 flex items-center gap-2">
        <span class="w-5 h-5 bg-emerald-600 text-white rounded-full inline-flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
        <strong class="text-emerald-900 text-[11.5px]">Internet</strong>
        <span class="text-emerald-700 text-[9.5px] font-mono ml-auto">= OSI 3</span>
      </div>
      <div class="bg-amber-100 border-l-4 border-amber-500 rounded-r-md p-1.5 flex items-center gap-2">
        <span class="w-5 h-5 bg-amber-600 text-white rounded-full inline-flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
        <strong class="text-amber-900 text-[11.5px]">Network Access</strong>
        <span class="text-amber-700 text-[9.5px] font-mono ml-auto">= OSI 2+1</span>
      </div>
    </div>
  </div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/L4">L4</a>
  <a href="/TCP">TCP</a>
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
<svg viewBox="0 0 760 380" class="w-full" style="max-height: 300px; height: auto;" text-rendering="optimizeLegibility">
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

# Разберём на примере вызовов в командной строке

<div v-click="2" class="mt-2 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-3">
  <div class="text-[10px] text-gray-600 mt-1 italic">
    🟨 <strong>MAC-адрес</strong> <span v-mark.red="2"><code>(link/ether 52:54:00:...)</code></span> — идентификация узла на канальном уровне (L2) или уровень 1 TCP/IP
  </div>
</div>

<div v-click="4" class="mt-2 bg-blue-50 border-l-4 border-orange-500 rounded-r-lg p-3">
  <div class="text-[10px] text-gray-600 mt-1 italic">
    🟦 <strong>IP-адрес</strong> + <span v-mark.red="4"><code>ICMP Echo</code></span>(Internet Control Message Protocol) — протокол сетевого уровня (L3)
  </div>
</div>

<div v-click="6" class="mt-2 bg-blue-50 border-l-4 border-orange-500 rounded-r-lg p-3">
  <div class="text-[10px] text-gray-600 mt-1 italic">
    🟥 <strong>TCP-порт 443</strong> транспортный (L4) · 🟪 <strong>DNS / HTTPS / h2 / TLS</strong> прикладной (L7) · 🟩 <strong>HTTP-метод + ответ</strong> (L7)
  </div>
</div>


````md magic-move {lines: true}
<!-- 1. ip link show — канальный уровень -->
```html {1|2-6|8}
ip link show 
1: lo: <LOOPBACK,UP> mtu 65536 qdisc noqueue state UNKNOWN
    link/loopback 00:00:00:00:00:00
2: eth0: <BROADCAST,MULTICAST,UP> mtu 1500 qdisc fq_codel state UP
link/ether 52:54:00:12:34:56
```

  <!-- 2. ping — сетевой уровень -->
```html {1|2-6|8}
ping -c2 google.com
PING google.com 142.250.190.78 56(84) bytes of data.
64 bytes from 142.250.190.78: icmp_seq=1 ttl=115 time=12.3 ms
```

<!-- 3. curl -v — прикладной + транспортный уровни -->
```html {1|2-6|8}
curl -v https://api.example.com/data<
  Trying 93.184.216.34:443...
* Connected to api.example.com port 443
* ALPN: h2 · SSL: TLS
> GET /data HTTP/1.1  ·  Host: api.example.com
< HTTP/1.1 200 OK ·  Content-Type: application/json
```
````

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/Сеть NSFNET">← Сеть NSFNET</a>
  <a href="/lesson6">Занятие 6 →</a>
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
  <img src="/Distributed_system.webp" alt="Распределённая система: 6 автономных узлов и пользователь" style="max-height: 280px; max-width: 760px; width: auto; height: auto;" class="object-contain rounded shadow-md border border-gray-200 bg-white" />
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

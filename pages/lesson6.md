---
hide: true
layout: center
---

# Основы проектирования ПО

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 2. Модели и структуры данных. РСУБД и NoSQL БД </div>
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
layout: two
---

# Теорема CAP

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
hide: true
layout: default
---

# Классификация PACELC

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Расширение <strong class="text-gray-700">CAP</strong> от Дэниеля Абади: даже <em>без</em> разделения сеть делает
  <strong class="text-gray-700">выбор между latency и consistency</strong>.
</p>

<!-- Координатная плоскость PACELC -->
<div class="mt-2 bg-white border border-slate-200 rounded-xl p-3">

<!-- Координатные оси (подписи) -->
<div class="flex justify-between text-[9px] text-gray-500 italic mb-1 px-1">
  <span>↑ Availability / Consistency (Partition)</span>
  <span>Latency / Consistency (Else) →</span>
</div>

<!-- 4 сектора -->
<div class="grid grid-cols-2 gap-1.5">

  <!-- Верхний-левый: PA/EL -->
  <div class="bg-green-50 border-2 border-green-300 rounded-lg p-2 text-center">
    <div class="text-[15px] font-bold text-green-800 leading-none mb-1">PA / EL</div>
    <div class="text-[9.5px] text-green-700 leading-tight mb-1.5">
      A при partition<br>Latency в нормальном
    </div>
    <div class="text-[10px] font-semibold text-green-900 leading-tight">
      Dynamo · Cassandra<br>Riak · CouchDB
    </div>
  </div>

  <!-- Верхний-правый: PA/EC -->
  <div class="bg-amber-50 border-2 border-amber-300 rounded-lg p-2 text-center">
    <div class="text-[15px] font-bold text-amber-800 leading-none mb-1">PA / EC</div>
    <div class="text-[9.5px] text-amber-700 leading-tight mb-1.5">
      A при partition<br>Consistency в нормальном
    </div>
    <div class="text-[10px] font-semibold text-amber-900 leading-tight">
      Redis (async mode)<br>DynamoDB (strict)
    </div>
  </div>

  <!-- Нижний-левый: PC/EL -->
  <div class="bg-blue-50 border-2 border-blue-300 rounded-lg p-2 text-center">
    <div class="text-[15px] font-bold text-blue-800 leading-none mb-1">PC / EL</div>
    <div class="text-[9.5px] text-blue-700 leading-tight mb-1.5">
      C при partition<br>Latency в нормальном
    </div>
    <div class="text-[10px] font-semibold text-blue-900 leading-tight">
      PNUTS · BigTable<br>(strongly consistent reads)
    </div>
  </div>

  <!-- Нижний-правый: PC/EC -->
  <div class="bg-violet-50 border-2 border-violet-300 rounded-lg p-2 text-center">
    <div class="text-[15px] font-bold text-violet-800 leading-none mb-1">PC / EC</div>
    <div class="text-[9.5px] text-violet-700 leading-tight mb-1.5">
      C при partition<br>C в нормальном
    </div>
    <div class="text-[10px] font-semibold text-violet-900 leading-tight">
      Spanner · FaunaDB<br>HBase · Cosmos DB
    </div>
  </div>

</div>
</div>

<!-- Расшифровка букв -->
<div class="mt-2 grid grid-cols-2 gap-x-4 gap-y-0.5 text-[10.5px] text-gray-700 leading-snug">
  <div><strong class="text-gray-900">P</strong> — Partition tolerance (при разделении сети)</div>
  <div><strong class="text-gray-900">A</strong> — Availability (ответ на любой запрос)</div>
  <div><strong class="text-gray-900">E</strong> — Else (в нормальном режиме, без разделений)</div>
  <div><strong class="text-gray-900">L / C</strong> — Latency / Consistency (компромисс в Else)</div>
</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-2">
  Источник: Abadi D. <em>Consistency Tradeoffs in Modern Distributed Database System Design</em> // ACM Transactions on Computer Systems (TOCS). — 2016. — Vol. 34, No. 3, Article 9. — 12 p. — DOI: 10.1145/2146416.2146421.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/CAP">← Теорема CAP</a>
  <a href="/PACELC">Классификация PACELC →</a>
</div>

---
hide: true
layout: default
---

# Ограничения целостности

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Правила, которые СУБД <strong class="text-gray-700">автоматически проверяет</strong> при каждом INSERT/UPDATE,
  чтобы данные оставались корректными.
</p>

<!-- 2 колонки: список слева, SQL примеры справа -->
<div class="grid grid-cols-2 gap-4 mt-3">

  <!-- ЛЕВАЯ КОЛОНКА: список 5 ограничений -->
  <div>
    <div class="text-[10px] text-gray-500 mb-1 flex items-center gap-2">
      <span class="font-mono text-gray-700">5 видов ограничений</span>
      <span class="text-gray-300">·</span>
      <span>SQL DDL</span>
    </div>
    <div class="space-y-1.5">
      <!-- 1. NOT NULL -->
      <div class="bg-red-50 border border-red-200 rounded-lg p-1.5 flex items-start gap-2">
        <span class="shrink-0 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-[10px]">1</span>
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline gap-2">
            <strong class="text-red-900 text-[12px]">Запрет NULL</strong>
            <code class="text-[10px] text-red-700 font-mono">NOT NULL</code>
          </div>
          <div class="text-[10.5px] text-gray-700 leading-snug">Поле обязательно, не может быть пустым.</div>
        </div>
      </div>
      <!-- 2. PRIMARY KEY -->
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-1.5 flex items-start gap-2">
        <span class="shrink-0 w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-[10px]">2</span>
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline gap-2">
            <strong class="text-blue-900 text-[12px]">Первичный ключ</strong>
            <code class="text-[10px] text-blue-700 font-mono">PRIMARY KEY</code>
          </div>
          <div class="text-[10.5px] text-gray-700 leading-snug">Уникальный идентификатор строки (NOT NULL + UNIQUE).</div>
        </div>
      </div>
      <!-- 3. UNIQUE -->
      <div class="bg-cyan-50 border border-cyan-200 rounded-lg p-1.5 flex items-start gap-2">
        <span class="shrink-0 w-5 h-5 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-[10px]">3</span>
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline gap-2">
            <strong class="text-cyan-900 text-[12px]">Уникальный ключ</strong>
            <code class="text-[10px] text-cyan-700 font-mono">UNIQUE</code>
          </div>
          <div class="text-[10.5px] text-gray-700 leading-snug">Гарантия уникальности значений в столбце.</div>
        </div>
      </div>
      <!-- 4. CHECK -->
      <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-1.5 flex items-start gap-2">
        <span class="shrink-0 w-5 h-5 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-[10px]">4</span>
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline gap-2">
            <strong class="text-emerald-900 text-[12px]">Проверка значения</strong>
            <code class="text-[10px] text-emerald-700 font-mono">CHECK</code>
          </div>
          <div class="text-[10.5px] text-gray-700 leading-snug">Выражение, которое должно быть истинно.</div>
        </div>
      </div>
      <!-- 5. FOREIGN KEY -->
      <div class="bg-purple-50 border border-purple-200 rounded-lg p-1.5 flex items-start gap-2">
        <span class="shrink-0 w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-[10px]">5</span>
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline gap-2">
            <strong class="text-purple-900 text-[12px]">Внешний ключ</strong>
            <code class="text-[10px] text-purple-700 font-mono">FOREIGN KEY</code>
          </div>
          <div class="text-[10.5px] text-gray-700 leading-snug">Ссылка на primary key другой таблицы.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ПРАВАЯ КОЛОНКА: SQL примеры -->
  <div>
    <div class="text-[10px] text-gray-500 mb-1 flex items-center gap-2">
      <span class="font-mono text-gray-700">CREATE TABLE</span>
      <span class="text-gray-300">·</span>
      <span>PostgreSQL / MySQL</span>
    </div>
    <div class="bg-slate-900 text-slate-100 rounded-lg p-2.5 font-mono text-[10.5px] leading-snug">
      <div><span class="text-slate-500">-- таблица сотрудников</span></div>
      <div><span class="text-purple-400">CREATE TABLE</span> employees (</div>
      <div class="pl-3"><span class="text-cyan-400">id</span>         <span class="text-cyan-400">SERIAL</span> <span class="text-emerald-400">PRIMARY KEY</span>,</div>
      <div class="pl-3"><span class="text-cyan-400">name</span>       <span class="text-cyan-400">VARCHAR</span>(100) <span class="text-emerald-400">NOT NULL</span>,</div>
      <div class="pl-3"><span class="text-cyan-400">email</span>      <span class="text-cyan-400">VARCHAR</span>(255) <span class="text-emerald-400">UNIQUE</span></div>
      <div class="pl-7 text-slate-500">-- ① нет NULL у имени</div>
      <div class="pl-7 text-slate-500">-- ② id уникален и не пуст</div>
      <div class="pl-7 text-slate-500">-- ③ email не повторяется</div>
      <div class="pl-3"><span class="text-cyan-400">salary</span>     <span class="text-cyan-400">DECIMAL</span>(10,2) <span class="text-emerald-400">CHECK</span> (salary &gt; 0),</div>
      <div class="pl-7 text-slate-500">-- ④ зарплата положительная</div>
      <div class="pl-3"><span class="text-cyan-400">dept_id</span>    <span class="text-cyan-400">INT</span> <span class="text-emerald-400">REFERENCES</span> departments(id)</div>
      <div class="pl-7 text-slate-500">-- ⑤ ссылка на PK другой таблицы</div>
      <div>);</div>
    </div>
    <!-- Краткие пояснения -->
    <div class="mt-2 grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10px] text-gray-600 leading-snug">
      <div><span class="text-red-600">①</span> <code class="bg-gray-100 px-0.5 rounded">NOT NULL</code> — обязательное</div>
      <div><span class="text-blue-600">②</span> <code class="bg-gray-100 px-0.5 rounded">PRIMARY KEY</code> — ID строки</div>
      <div><span class="text-cyan-600">③</span> <code class="bg-gray-100 px-0.5 rounded">UNIQUE</code> — нет дублей</div>
      <div><span class="text-emerald-600">④</span> <code class="bg-gray-100 px-0.5 rounded">CHECK</code> — предикат</div>
      <div><span class="text-purple-600">⑤</span> <code class="bg-gray-100 px-0.5 rounded">FOREIGN KEY</code> — связь</div>
    </div>
  </div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/PACELC">← Классификация PACELC</a>
  <a href="/lesson7">Занятие 7 →</a>
</div>

---
hide: false
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
hide: false
routeAlias: data-levels
layout: default
---

# Уровни моделирования данных

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Модель данных создаётся <strong class="text-gray-700">послойно</strong>: от понимания бизнеса → к реализации в конкретной СУБД.
</p>

<div class="mt-3 max-w-3xl mx-auto space-y-1.5">

  <!-- 1. Концептуальный -->
  <div class="bg-violet-50 border-2 border-violet-300 rounded-lg p-2.5 flex items-start gap-3">
    <div class="shrink-0 w-11 h-11 bg-violet-500 text-white rounded-full flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2v.3a1 1 0 001 1h4a1 1 0 001-1V16.7c0-.8.4-1.5 1-2A7 7 0 0012 2z"/>
      </svg>
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-baseline gap-2">
        <strong class="text-violet-900 text-[15px]">1. Концептуальный</strong>
        <span class="text-[10px] text-violet-600 font-mono italic">что нужно хранить</span>
      </div>
      <p class="text-[11.5px] text-gray-700 leading-snug mt-0.5">
        Высокоуровневая модель: <strong>сущности</strong> и <strong>связи</strong> между ними. Без атрибутов, типов, ограничений.
      </p>
      <div class="text-[10.5px] opacity-75 leading-snug mt-1 flex gap-3 flex-wrap">
        <span>📐 Артефакт: <em>ER-диаграмма</em></span>
        <span>👥 Аудитория: <em>бизнес, аналитики</em></span>
      </div>
    </div>
  </div>

  <!-- arrow down -->
  <div class="flex justify-center text-violet-400 -my-1">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </div>

  <!-- 2. Логический -->
  <div class="bg-blue-50 border-2 border-blue-300 rounded-lg p-2.5 flex items-start gap-3">
    <div class="shrink-0 w-11 h-11 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="19" cy="5" r="2"/>
        <circle cx="5" cy="5" r="2"/>
        <circle cx="5" cy="19" r="2"/>
        <circle cx="19" cy="19" r="2"/>
        <line x1="12" y1="9" x2="12" y2="3"/>
        <line x1="9.5" y1="13.5" x2="5.5" y2="17.5"/>
        <line x1="14.5" y1="13.5" x2="18.5" y2="17.5"/>
        <line x1="14.5" y1="10.5" x2="18.5" y2="6.5"/>
        <line x1="9.5" y1="10.5" x2="5.5" y2="6.5"/>
      </svg>
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-baseline gap-2">
        <strong class="text-blue-900 text-[15px]">2. Логический</strong>
        <span class="text-[10px] text-blue-600 font-mono italic">как структурировать</span>
      </div>
      <p class="text-[11.5px] text-gray-700 leading-snug mt-0.5">
        Добавляются <strong>атрибуты</strong>, <strong>типы данных</strong>, <strong>ключи</strong>, <strong>ограничения</strong> (NOT NULL, FK). СУБД-агностично.
      </p>
      <div class="text-[10.5px] opacity-75 leading-snug mt-1 flex gap-3 flex-wrap">
        <span>📐 Артефакт: <em>реляционная схема</em></span>
        <span>👥 Аудитория: <em>проектировщики, архитекторы</em></span>
      </div>
    </div>
  </div>

  <!-- arrow down -->
  <div class="flex justify-center text-blue-400 -my-1">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </div>

  <!-- 3. Физический -->
  <div class="bg-emerald-50 border-2 border-emerald-300 rounded-lg p-2.5 flex items-start gap-3">
    <div class="shrink-0 w-11 h-11 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/>
        <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>
      </svg>
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-baseline gap-2">
        <strong class="text-emerald-900 text-[15px]">3. Физический</strong>
        <span class="text-[10px] text-emerald-600 font-mono italic">как хранить на диске</span>
      </div>
      <p class="text-[11.5px] text-gray-700 leading-snug mt-0.5">
        Конкретная СУБД: <strong>таблицы</strong>, <strong>индексы</strong>, <strong>партиции</strong>, <strong>денормализация</strong>, оптимизация запросов.
      </p>
      <div class="text-[10.5px] opacity-75 leading-snug mt-1 flex gap-3 flex-wrap">
        <span>📐 Артефакт: <em>DDL-скрипты</em></span>
        <span>👥 Аудитория: <em>DBA, разработчики</em></span>
      </div>
    </div>
  </div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/rdbms">← Реляционные БД</a>
  <a href="/er-notation">ER-нотации →</a>
</div>

---
hide: false
routeAlias: rdbms
layout: two-cols
---

# Реляционные БД

<p class="text-sm leading-snug -mt-3 text-gray-500">
  <strong class="text-gray-700">Классическая модель</strong> хранения данных — таблицы со связями. Основана на реляционной алгебре (Кодд, 1970), доминирует 50+ лет.
</p>

**1. Реляционная модель данных**

- Данные хранятся в **таблицах** (relations) со строками и столбцами
- Связи между таблицами — через **внешние ключи** (FOREIGN KEY)
- **Строгая схема** определена заранее (колонки, типы, ограничения)
- Целостность обеспечивается автоматически

**2. Примеры СУБД:**

<div class="flex gap-1.5 flex-wrap mt-1.5">
  <span class="bg-blue-100 text-blue-800 border border-blue-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">PostgreSQL</span>
  <span class="bg-slate-100 text-slate-800 border border-slate-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">SQLite</span>
  <span class="bg-red-100 text-red-800 border border-red-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">Oracle</span>
  <span class="bg-orange-100 text-orange-800 border border-orange-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">MySQL</span>
  <span class="bg-purple-100 text-purple-800 border border-purple-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">MS SQL Server</span>
</div>

::right::

**2. SQL — язык запросов**

- **Декларативный**: описываем <em>что</em> хотим получить, а не <em>как</em>
- Стандартизирован: ANSI SQL с 1986, регулярные обновления
- Универсален: работает почти во всех РСУБД с минимальными отличиями


**3. Типы SQL-запросов**

<div class="grid grid-cols-2 gap-1.5 mt-1">

  <div class="bg-rose-50 border border-rose-300 rounded p-1.5">
    <div class="text-[12px] font-bold text-rose-900">DDL</div>
    <div class="text-[9px] text-rose-700 italic leading-tight">Data Definition</div>
    <div class="text-[10px] text-gray-700 leading-snug mt-0.5"><code class="text-rose-700">CREATE</code>, <code class="text-rose-700">ALTER</code>, <code class="text-rose-700">DROP</code></div>
  </div>

  <div class="bg-amber-50 border border-amber-300 rounded p-1.5">
    <div class="text-[12px] font-bold text-amber-900">DML</div>
    <div class="text-[9px] text-amber-700 italic leading-tight">Data Manipulation</div>
    <div class="text-[10px] text-gray-700 leading-snug mt-0.5"><code class="text-amber-700">SELECT</code>, <code class="text-amber-700">INSERT</code>, <code class="text-amber-700">UPDATE</code>, <code class="text-amber-700">DELETE</code></div>
  </div>

  <div class="bg-emerald-50 border border-emerald-300 rounded p-1.5">
    <div class="text-[12px] font-bold text-emerald-900">DCL</div>
    <div class="text-[9px] text-emerald-700 italic leading-tight">Data Control</div>
    <div class="text-[10px] text-gray-700 leading-snug mt-0.5"><code class="text-emerald-700">GRANT</code>, <code class="text-emerald-700">REVOKE</code></div>
  </div>

  <div class="bg-sky-50 border border-sky-300 rounded p-1.5">
    <div class="text-[12px] font-bold text-sky-900">TCL</div>
    <div class="text-[9px] text-sky-700 italic leading-tight">Transaction Control</div>
    <div class="text-[10px] text-gray-700 leading-snug mt-0.5"><code class="text-sky-700">BEGIN</code>, <code class="text-sky-700">COMMIT</code>, <code class="text-sky-700">ROLLBACK</code></div>
  </div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson6">← Занятие 6</a>
  <a href="/data-levels">Уровни моделирования данных →</a>
</div>

---
hide: false
routeAlias: transactions
layout: two-cols
---

# Транзакционность — главное свойство РСУБД

<blockquote class="text-[12.5px] leading-snug italic text-gray-700 border-l-4 border-blue-400 pl-3 my-1 -mt-1">
  Транзакция — это набор последовательных операций с базой данных, соединённых в&nbsp;одну логическую единицу.
</blockquote>


**ACID — требования к транзакции:**

<div class="grid grid-cols-2 gap-2 mt-1.5">

  <div class="bg-red-50 border-2 border-red-300 rounded-lg p-2">
    <div class="flex items-baseline gap-2">
      <span class="text-[22px] font-extrabold text-red-600 leading-none">A</span>
      <div class="flex-1 min-w-0">
        <div class="text-[12px] font-bold text-red-900 leading-tight">Атомарность</div>
        <div class="text-[9.5px] text-red-600 italic leading-tight">Atomicity</div>
      </div>
    </div>
    <div class="text-[9.5px] text-gray-700 leading-tight mt-1">Либо <strong>все</strong> операции применятся, либо <strong>ни одна</strong>.</div>
  </div>

  <div class="bg-blue-50 border-2 border-blue-300 rounded-lg p-2">
    <div class="flex items-baseline gap-2">
      <span class="text-[22px] font-extrabold text-blue-600 leading-none">C</span>
      <div class="flex-1 min-w-0">
        <div class="text-[12px] font-bold text-blue-900 leading-tight">Согласованность</div>
        <div class="text-[9.5px] text-blue-600 italic leading-tight">Consistency</div>
      </div>
    </div>
    <div class="text-[9.5px] text-gray-700 leading-tight mt-1">База переходит из одного <strong>валидного</strong> состояния в другое.</div>
  </div>

  <div class="bg-violet-50 border-2 border-violet-300 rounded-lg p-2">
    <div class="flex items-baseline gap-2">
      <span class="text-[22px] font-extrabold text-violet-600 leading-none">I</span>
      <div class="flex-1 min-w-0">
        <div class="text-[12px] font-bold text-violet-900 leading-tight">Изолированность</div>
        <div class="text-[9.5px] text-violet-600 italic leading-tight">Isolation</div>
      </div>
    </div>
    <div class="text-[9.5px] text-gray-700 leading-tight mt-1">Параллельные транзакции <strong>не мешают</strong> друг другу.</div>
  </div>

  <div class="bg-emerald-50 border-2 border-emerald-300 rounded-lg p-2">
    <div class="flex items-baseline gap-2">
      <span class="text-[22px] font-extrabold text-emerald-600 leading-none">D</span>
      <div class="flex-1 min-w-0">
        <div class="text-[12px] font-bold text-emerald-900 leading-tight">Надёжность</div>
        <div class="text-[9.5px] text-emerald-600 italic leading-tight">Durability</div>
      </div>
    </div>
    <div class="text-[9.5px] text-gray-700 leading-tight mt-1">Результат <strong>сохраняется</strong> после фиксации (commit).</div>
  </div>

</div>

<v-click>

**Антоним в NoSQL:** принцип **BASE** (Basically Available, Soft state, Eventual consistency) — жертвует строгостью ради масштабируемости.

</v-click>

::right::

**Жизненный цикл транзакции**

<div class="flex justify-center my-1">
  <img
    src="/public/Transaction.png"
    alt="Жизненный цикл транзакции"
    class="max-h-[50vh] max-w-full rounded-lg shadow-md object-contain"
  />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/ogranicheniya-tselostnosti">← Ограничения целостности</a>
  <a href="/lesson7">Занятие 7 →</a>
</div>


---
hide: false
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


---
hide: false
routeAlias: er-notation
layout: default
---

# ER-моделирование — инструмент для проектирования реляционных БД

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Каждая нотация по-своему изображает <strong class="text-gray-700">сущности</strong> и <strong class="text-gray-700">связи</strong> между ними. Выбор нотации определяет читаемость, стандартизацию и инструментальную поддержку модели.
</p>

<div class="grid grid-cols-3 gap-2.5 mt-2">

  <!-- 1. Классическая П. Чена -->
  <div class="border border-slate-200 rounded-lg p-2 bg-white">
    <div class="text-[11px] font-semibold text-slate-800 mb-1 text-center">Классическая П. Чена</div>
    <svg viewBox="0 0 180 40" class="w-full h-10">
      <rect x="5" y="12" width="48" height="20" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
      <text x="29" y="25" text-anchor="middle" fill="#1e293b" font-size="3" font-weight="bold">Person</text>
      <polygon points="92,12 108,22 92,32 76,22" fill="white" stroke="#334155" stroke-width="1.5"/>
      <text x="92" y="40" text-anchor="middle" fill="#334155" font-size="3" font-style="italic">works_at</text>
      <rect x="128" y="12" width="48" height="20" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
      <text x="152" y="25" text-anchor="middle" fill="#1e293b" font-size="2" font-weight="bold">Company</text>
      <line x1="53" y1="22" x2="76" y2="22" stroke="#334155" stroke-width="1"/>
      <line x1="108" y1="22" x2="128" y2="22" stroke="#334155" stroke-width="1"/>
    </svg>
    <div class="text-[9px] text-slate-500 text-center mt-1 leading-tight">прямоугольники + ромб связи</div>
  </div>

  <!-- 2. IDEF1X -->
  <div class="border border-slate-200 rounded-lg p-2 bg-white">
    <div class="text-[11px] font-semibold text-slate-800 mb-1 text-center">IDEF1X</div>
    <svg viewBox="0 0 180 40" class="w-full h-10">
      <rect x="5" y="12" width="48" height="20" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
      <text x="29" y="25" text-anchor="middle" fill="#1e293b" font-size="3" font-weight="bold">Person</text>
      <line x1="63" y1="17" x2="63" y2="27" stroke="#334155" stroke-width="2"/>
      <line x1="67" y1="17" x2="67" y2="27" stroke="#334155" stroke-width="2"/>
      <line x1="70" y1="22" x2="106" y2="22" stroke="#334155" stroke-width="1"/>
      <circle cx="113" cy="22" r="2.2" fill="none" stroke="#334155" stroke-width="1"/>
      <polyline points="123,15 130,22 123,29" fill="none" stroke="#334155" stroke-width="1.5"/>
      <line x1="123" y1="15" x2="123" y2="29" stroke="#334155" stroke-width="1.5"/>
      <rect x="135" y="12" width="40" height="20" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
      <text x="155" y="25" text-anchor="middle" fill="#1e293b" font-size="2" font-weight="bold">Company</text>
    </svg>
    <div class="text-[9px] text-slate-500 text-center mt-1 leading-tight">двойная черта ‖ + воронья лапка</div>
  </div>

  <!-- 3. Ч. Бахмана -->
  <div class="border border-slate-200 rounded-lg p-2 bg-white">
    <div class="text-[11px] font-semibold text-slate-800 mb-1 text-center">Ч. Бахмана</div>
    <svg viewBox="0 0 180 40" class="w-full h-10">
      <defs>
        <marker id="bachmanArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#334155"/>
        </marker>
      </defs>
      <rect x="5" y="12" width="48" height="20" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
      <text x="29" y="25" text-anchor="middle" fill="#1e293b" font-size="2" font-weight="bold">Person</text>
      <line x1="58" y1="22" x2="120" y2="22" stroke="#334155" stroke-width="1.5" marker-end="url(#bachmanArrow)"/>
      <text x="80" y="16" text-anchor="middle" fill="#334155" font-size="2" font-weight="bold">N</text>
      <text x="108" y="16" text-anchor="middle" fill="#334155" font-size="2" font-weight="bold">1</text>
      <rect x="128" y="12" width="48" height="20" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
      <text x="152" y="25" text-anchor="middle" fill="#1e293b" font-size="2" font-weight="bold">Company</text>
    </svg>
    <div class="text-[9px] text-slate-500 text-center mt-1 leading-tight">стрелка + кардинальность N:1</div>
  </div>

  <!-- 4. Дж. Мартин «Вороньи лапки» — КРАСНАЯ -->
  <div class="border-2 border-red-400 rounded-lg p-2 bg-red-50">
    <div class="text-[11px] font-bold text-red-700 mb-1 text-center">Дж. Мартин «Вороньи лапки»</div>
    <svg viewBox="0 0 180 40" class="w-full h-10">
      <rect x="5" y="12" width="48" height="20" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
      <text x="29" y="25" text-anchor="middle" fill="#7f1d1d" font-size="2" font-weight="bold">Person</text>
      <line x1="68" y1="16" x2="68" y2="28" stroke="#dc2626" stroke-width="2.2"/>
      <line x1="72" y1="22" x2="108" y2="22" stroke="#dc2626" stroke-width="1.5"/>
      <polyline points="118,13 130,22 118,31" fill="none" stroke="#dc2626" stroke-width="2.2"/>
      <line x1="124" y1="13" x2="124" y2="31" stroke="#dc2626" stroke-width="1.5"/>
      <rect x="135" y="12" width="40" height="20" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
      <text x="155" y="25" text-anchor="middle" fill="#7f1d1d" font-size="2" font-weight="bold">Company</text>
    </svg>
    <div class="text-[9px] text-red-600 text-center mt-1 leading-tight font-semibold">наиболее популярная нотация</div>
  </div>

  <!-- 5. Ж.-Р. Абриаль (мин-макс) -->
  <div class="border border-slate-200 rounded-lg p-2 bg-white">
    <div class="text-[11px] font-semibold text-slate-800 mb-1 text-center">Ж.-Р. Абриаль (мин-макс)</div>
    <svg viewBox="0 0 180 40" class="w-full h-10">
      <rect x="5" y="12" width="48" height="20" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
      <text x="29" y="25" text-anchor="middle" fill="#1e293b" font-size="2" font-weight="bold">Person</text>
      <line x1="55" y1="22" x2="100" y2="22" stroke="#334155" stroke-width="1"/>
      <text x="78" y="18" text-anchor="middle" fill="#334155" font-size="2" font-weight="bold">[1, N]</text>
      <line x1="102" y1="22" x2="125" y2="22" stroke="#334155" stroke-width="1"/>
      <text x="115" y="18" text-anchor="middle" fill="#334155" font-size="2" font-weight="bold">[0, 1]</text>
      <rect x="128" y="12" width="48" height="20" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
      <text x="152" y="25" text-anchor="middle" fill="#1e293b" font-size="2" font-weight="bold">Company</text>
    </svg>
    <div class="text-[9px] text-slate-500 text-center mt-1 leading-tight">интервалы мощности на ребре</div>
  </div>

  <!-- 6. Диаграммы классов UML -->
  <div class="border border-slate-200 rounded-lg p-2 bg-white">
    <div class="text-[11px] font-semibold text-slate-800 mb-1 text-center">Диаграммы классов UML</div>
    <svg viewBox="0 0 180 40" class="w-full h-10">
      <rect x="5" y="3" width="68" height="34" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
      <line x1="5" y1="14" x2="73" y2="14" stroke="#334155" stroke-width="1"/>
      <line x1="5" y1="25" x2="73" y2="25" stroke="#334155" stroke-width="1"/>
      <text x="39" y="11" text-anchor="middle" fill="#1e293b" font-size="2" font-weight="bold">Person</text>
      <text x="9" y="21" fill="#1e293b" font-size="2">+ name: str</text>
      <text x="9" y="32" fill="#1e293b" font-size="2">+ age: int</text>
      <text x="87" y="18" text-anchor="middle" fill="#334155" font-size="2" font-weight="bold">*</text>
      <line x1="80" y1="22" x2="105" y2="22" stroke="#334155" stroke-width="1"/>
      <text x="111" y="18" text-anchor="middle" fill="#334155" font-size="2" font-weight="bold">1</text>
      <rect x="120" y="3" width="55" height="34" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
      <line x1="120" y1="14" x2="175" y2="14" stroke="#334155" stroke-width="1"/>
      <line x1="120" y1="25" x2="175" y2="25" stroke="#334155" stroke-width="1"/>
      <text x="147" y="11" text-anchor="middle" fill="#1e293b" font-size="2" font-weight="bold">Company</text>
      <text x="123" y="21" fill="#1e293b" font-size="2">+ name: str</text>
      <text x="123" y="32" fill="#1e293b" font-size="2">+ taxId: str</text>
    </svg>
    <div class="text-[9px] text-slate-500 text-center mt-1 leading-tight">классы с атрибутами + мощность</div>
  </div>

</div>

**На практике:** в 90% современных CASE-средств (PowerDesigner, ERwin, dbdiagram.io, Mermaid) используется нотация **«вороньи лапки»** — она компактная, читается однозначно и поддерживается всеми инструментами.

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/data-levels">← Уровни моделирования данных</a>
  <a href="/CAP">Теорема CAP →</a>
</div>

---
hide: false
layout: default
---

# Теорема CAP

<div class="flex justify-center items-center h-[45vh]">
  <img
    src="/public/CAP.png"
    alt="Теорема CAP — схема"
    class="max-h-full max-w-full rounded-lg shadow-lg object-contain"
  />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/er-notation">← ER-нотации</a>
  <a href="/NoSQL">Зачем нужны NoSQL БД →</a>
</div>

---
hide: false
layout: two-cols
---

# Зачем нужны NoSQL БД

**Когда NoSQL выигрывает у РСУБД:**

<v-clicks>

- **Большие объёмы** неструктурированных данных
- **Высокая степень неопределённости** в архитектуре продукта
- **Стадия прототипирования** продукта
- **Высокая масштабируемость** системы без лишних ресурсозатрат
- **Строгой согласованностью** можно пожертвовать ради производительности и доступности

</v-clicks>

::right::

<div class="text-[10px] text-gray-500 mb-1.5 flex items-center gap-2 px-1">
  <span class="font-mono font-bold text-gray-700">BASE</span>
  <span class="text-gray-300">·</span>
  <span>альтернатива ACID для распределённых NoSQL</span>
</div>

<!-- BA— Basically Available -->
<div class="bg-emerald-50 border-2 border-emerald-300 rounded-lg p-2.5 mb-2 flex items-start gap-3 justify-center">
  <div class="shrink-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-sm">
    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  </div>
  <div class="flex-1 min-w-0">
    <div class="flex items-baseline gap-2">
      <span class="text-emerald-700 font-mono font-bold text-[11px]">BA</span>
      <strong class="text-emerald-900 text-[14px]">Basically Available</strong>
    </div>
    <div class="text-[11px] text-gray-700 leading-snug mt-0.5">Система гарантирует ответ <em>почти всегда</em>, даже при сбоях отдельных узлов.</div>
  </div>
</div>

<!-- S — Soft State -->
<div class="bg-amber-50 border-2 border-amber-300 rounded-lg p-2.5 mb-2 flex items-start gap-3">
  <div class="shrink-0 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-sm">
    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
      <polyline points="23 4 23 10 17 10"/>
      <polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
    </svg>
  </div>
  <div class="flex-1 min-w-0">
    <div class="flex items-baseline gap-2">
      <span class="text-amber-700 font-mono font-bold text-[11px]">S</span>
      <strong class="text-amber-900 text-[14px]">Soft State</strong>
    </div>
    <div class="text-[11px] text-gray-700 leading-snug mt-0.5">Состояние может меняться <em>без явного запроса</em> — фиксация значений не гарантируется.</div>
  </div>
</div>

<!-- E — Eventual Consistency -->
<div class="bg-violet-50 border-2 border-violet-300 rounded-lg p-2.5 flex items-start gap-3">
  <div class="shrink-0 w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center shadow-sm">
    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  </div>
  <div class="flex-1 min-w-0">
    <div class="flex items-baseline gap-2">
      <span class="text-violet-700 font-mono font-bold text-[11px]">E</span>
      <strong class="text-violet-900 text-[14px]">Eventual Consistency</strong>
    </div>
    <div class="text-[11px] text-gray-700 leading-snug mt-0.5">Реплики сходятся <em>со временем</em> — за миллисекунды или секунды, без жёстких гарантий.</div>
  </div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/CAP">← Теорема CAP</a>
  <a href="/key-value">БД «Ключ-значение» →</a>
</div>

---
hide: false
routeAlias: key-value
layout: two-cols
---

# БД по принципу Ключ-значение

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Простейшая модель NoSQL: <code class="text-[12px] bg-slate-100 px-1 rounded">key → value</code>. Никакой схемы, никаких JOIN-ов — только быстрый доступ по ключу.
</p>

<div class="flex gap-1.5 flex-wrap mt-1.5 mb-3">
  <span class="bg-red-100 text-red-800 border border-red-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">Redis</span>
  <span class="bg-orange-100 text-orange-800 border border-orange-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">Amazon DynamoDB</span>
  <span class="bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">Riak</span>
</div>

<div class="bg-slate-900 text-slate-100 rounded-lg p-2.5 font-mono text-[10.5px] leading-relaxed max-w-sm mx-auto">
  <div><span class="text-slate-500">&#123;</span></div>
  <div class="pl-3"><span class="text-sky-400">"user:1001:name"</span>:&nbsp;&nbsp;&nbsp;<span class="text-emerald-400">"Иванов"</span>,</div>
  <div class="pl-3"><span class="text-sky-400">"user:1001:email"</span>:&nbsp;&nbsp;<span class="text-emerald-400">"ivanov@example.com"</span>,</div>
  <div class="pl-3"><span class="text-sky-400">"session:abc123"</span>:&nbsp;&nbsp;&nbsp;<span class="text-emerald-400">"&#123;user_id:1001, role:admin&#125;"</span>,</div>
  <div class="pl-3"><span class="text-sky-400">"cart:user-42"</span>:&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-emerald-400">"[item-1, item-7, item-15]"</span></div>
  <div><span class="text-slate-500">&#125;</span></div>
</div>

**Когда используется:**

<p class="text-sm leading-snug -mt-3 text-gray-500">
- Хранение неструктурированных данных — промежуточное хранение печатных форм, документов, изображений
</p>
<p class="text-sm leading-snug -mt-3 text-gray-500">
- Быстрый доступ к данным — Redis держит данные в оперативной памяти → задержки на уровне микросекунд
</p>

::right::

**Python: клиент `redis-py`**

<div class="bg-slate-900 text-slate-100 rounded-lg p-2.5 font-mono text-[10.5px] leading-snug">
  <div><span class="text-violet-400">import</span> redis</div>
  <div>&nbsp;</div>
  <div><span class="text-slate-500"># ① Инициализация подключения</span></div>
  <div>r = redis.Redis(</div>
  <div class="pl-3">host=<span class="text-emerald-400">'localhost'</span>,</div>
  <div class="pl-3">port=<span class="text-amber-300">6379</span>,</div>
  <div class="pl-3">db=<span class="text-amber-300">0</span>,</div>
  <div>)</div>
  <div>&nbsp;</div>
  <div><span class="text-slate-500"># ② Установка значения — <span class="text-amber-300">SET</span> key value</span></div>
  <div>r.<span class="text-amber-300">set</span>(<span class="text-emerald-400">'user:1001:name'</span>, <span class="text-emerald-400">'Иванов'</span>)</div>
  <div>&nbsp;</div>
  <div><span class="text-slate-500"># ③ Получение значения — <span class="text-amber-300">GET</span> key</span></div>
  <div>name = r.<span class="text-amber-300">get</span>(<span class="text-emerald-400">'user:1001:name'</span>)</div>
  <div>print(name.decode(<span class="text-emerald-400">'utf-8'</span>))&nbsp;&nbsp;<span class="text-slate-500"># → Иванов</span></div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/NoSQL">← Зачем нужны NoSQL БД</a>
  <a href="/column-family">Колоночные БД →</a>
</div>

---
hide: false
routeAlias: column-family
layout: two-cols
---

# Колоночные БД (column family store)

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Данные хранятся <strong class="text-gray-700">по колонкам</strong>, а не по строкам → агрегатные запросы (SUM, AVG, COUNT) по миллиардам строк отрабатывают за секунды.
</p>

**Примеры СУБД:**

<div class="flex gap-1.5 flex-wrap mt-1.5">
  <span class="bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">ClickHouse</span>
  <span class="bg-indigo-100 text-indigo-800 border border-indigo-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">Cassandra</span>
</div>

**Когда используется:**

- 📊 **Аналитические системы класса BI** (ROLAP) — отчёты по миллиардам строк за секунды
- 🗄 **Аналитические хранилища данных** — долговременное хранение истории
- 📝 **Системы журналирования (сбор логов)** — append-only поток событий


::right::

<div class="flex items-center justify-center h-full">
  <img
    src="/public/OLAP.png"
    alt="OLAP — колоночное хранение данных"
    class="max-h-[38vh] max-w-full rounded-lg shadow-md object-contain"
  />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/key-value">← БД «Ключ-значение»</a>
  <a href="/document-store">Документоориентированные БД →</a>
</div>

---
hide: false
routeAlias: document-store
layout: two-cols
---

# Документная БД (document-oriented store)

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Данные хранятся как <strong class="text-gray-700">JSON-документы</strong> — гибкая схема, вложенные структуры, без JOIN-ов.
</p>

**Примеры СУБД:**

<div class="flex gap-1.5 flex-wrap mt-1.5 mb-3">
  <span class="bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">MongoDB</span>
  <span class="bg-red-100 text-red-800 border border-red-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">CouchBase</span>
  <span class="bg-amber-100 text-amber-800 border border-amber-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">Firebase</span>
</div>

**Предназначение:**

- 📰 **Управление и доставка контента** — статьи, посты, медиа с переменной структурой
- 👤 **Управление пользовательскими данными** — профили, настройки, сессии


::right::

**Пример документа в MongoDB**

<div class="bg-slate-900 text-slate-100 rounded-lg p-2.5 font-mono text-[10px] leading-relaxed">
  <div><span class="text-slate-500">&#123;</span></div>
  <div class="pl-3"><span class="text-sky-400">"_id"</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-emerald-400">"u-1001"</span>,</div>
  <div class="pl-3"><span class="text-sky-400">"username"</span>:&nbsp;&nbsp;<span class="text-emerald-400">"ivanov"</span>,</div>
  <div class="pl-3"><span class="text-sky-400">"email"</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-emerald-400">"ivanov@example.com"</span>,</div>
  <div class="pl-3"><span class="text-sky-400">"profile"</span>:&nbsp;&nbsp;&nbsp;<span class="text-slate-500">&#123;</span></div>
  <div class="pl-6"><span class="text-sky-400">"firstName"</span>: <span class="text-emerald-400">"Иван"</span>,</div>
  <div class="pl-6"><span class="text-sky-400">"lastName"</span>:&nbsp;<span class="text-emerald-400">"Иванов"</span>,</div>
  <div class="pl-6"><span class="text-sky-400">"bio"</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-emerald-400">"Tech Lead"</span></div>
  <div class="pl-3"><span class="text-slate-500">&#125;</span>,</div>
  <div class="pl-3"><span class="text-sky-400">"roles"</span>:&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-violet-400">[</span><span class="text-emerald-400">"admin"</span>, <span class="text-emerald-400">"editor"</span><span class="text-violet-400">]</span>,</div>
  <div class="pl-3"><span class="text-sky-400">"preferences"</span>: <span class="text-slate-500">&#123;</span></div>
  <div class="pl-6"><span class="text-sky-400">"language"</span>: <span class="text-emerald-400">"ru"</span>,</div>
  <div class="pl-6"><span class="text-sky-400">"notifications"</span>: <span class="text-slate-500">&#123;</span></div>
  <div class="pl-9"><span class="text-sky-400">"email"</span>: <span class="text-amber-300">true</span>,</div>
  <div class="pl-6"><span class="text-slate-500">&#125;</span></div>
  <div class="pl-3"><span class="text-slate-500">&#125;</span>,</div>
  <div class="pl-3"><span class="text-sky-400">"metadata"</span>:&nbsp;<span class="text-slate-500">&#123;</span></div>
  <div class="pl-6"><span class="text-sky-400">"createdAt"</span>:&nbsp;&nbsp;<span class="text-emerald-400">"2024-01-15T12:34:56Z"</span>,</div>
  <div class="pl-6"><span class="text-sky-400">"loginCount"</span>: <span class="text-amber-300">247</span></div>
  <div class="pl-3"><span class="text-slate-500">&#125;</span></div>
  <div><span class="text-slate-500">&#125;</span></div>
</div>


<p class="text-sm leading-snug -mt-3 text-gray-500">
 _id — уникальный идентификатор (аналог PRIMARY KEY) / Нет фиксированной схемы / Вложенные объекты и массивы
</p>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/column-family">← Колоночные БД</a>
  <a href="/graph-store">Графовые БД →</a>
</div>

---
hide: false
routeAlias: graph-store
layout: two-cols
---

# Графовые БД (graph store)

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Данные — <strong class="text-gray-700">узлы (nodes)</strong> и <strong class="text-gray-700">связи (relationships)</strong> между ними. Связи — сущности первого класса, по ним можно быстро обходить граф.
</p>


**Примеры СУБД:**

<div class="flex gap-1.5 flex-wrap mt-1.5 mb-3">
  <span class="bg-green-100 text-green-800 border border-green-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">Neo4j</span>
  <span class="bg-sky-100 text-sky-800 border border-sky-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">ArangoDB</span>
  <span class="bg-indigo-100 text-indigo-800 border border-indigo-300 rounded-full px-2.5 py-0.5 text-[11px] font-semibold">Amazon Neptune</span>
</div>

**Когда используется:**

- 👥 **Социальные сети** — друзья, подписчики
- 🛒 **Рекомендательные системы** — «купившие X также покупают Y»
- 🔒 **Антифрод** — выявление подозрительных цепочек транзакций
- 🧠 **Графы знаний** — Wikipedia

::right::

<div class="flex justify-center my-1">
  <img
    src="/public/GraphDB.png"
    alt="Графовые БД — структура данных"
    class="max-h-[58vh] max-w-full rounded-lg shadow-md object-contain"
  />
</div>


<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/document-store">← Документоориентированные БД</a>
  <a href="/PACELC">Классификация PACELC →</a>
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
  <a href="/graph-store">← Графовые БД</a>
  <a href="/transactions">Транзакционность →</a>
</div>


---
layout: two-cols
layoutClass: gap-8
---

# Обмен файлами (File Transfer)

## Преимущества

- ✅ Не нужны сведения о внутренней реализации

## Недостатки

- ❌ Необязательные затраты (уникальность имен, блокировки, перенос фалов)
- ❌ Рассинхронизация интегрируемых систем вследствие низкой частоты обмена информацией
- ❌ Семантический диссонанс

::right::

<div class="flex items-center justify-center h-full">
  <img src="/FTP_06.png" alt="Обмен файлами (File Transfer)" class="rounded shadow-lg max-h-[65vh]" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson5">← Занятие 5</a>
  <a href="/lesson7">Занятие 7 →</a>
</div>

---
layout: two-cols
layoutClass: gap-8
---

# Общая база данных (Shared Database)

## Преимущества

- ✅ Данные всегда согласованы

## Недостатки

- ❌ Единая точка отказа
- ❌ Высокая связанность
- ❌ Блокировки данных
- ❌ Скорость извлечения данных резко падает при росте БД

::right::

<div class="flex items-center justify-center h-full">
  <img src="/sharedDB_06.png" alt="Общая база данных (Shared Database)" class="rounded shadow-lg max-h-[65vh]" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson5">← Занятие 5</a>
  <a href="/lesson7">Занятие 7 →</a>
</div>

---
layout: two-cols
layoutClass: gap-8
---

# Удаленный вызов процедур (Remote procedure Invocation)

## Преимущества

- ✅ Инкапсуляция данных

## Недостатки

- ❌ Низкая надежность (сбои при сетевом взаимодействии)
- ❌ Также высокая связанность, но ниже чем при общей БД

::right::

<div class="flex items-center justify-center h-full">
  <img src="/remoteProcedure_06.png" alt="Удалённый вызов процедур (RPC)" class="rounded shadow-lg max-h-[65vh]" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson5">← Занятие 5</a>
  <a href="/lesson7">Занятие 7 →</a>
</div>

---
layout: two-cols
layoutClass: gap-8
---

# Обмен сообщениями (Messaging)

## Преимущества

- ✅ Асинхронный способ интеграции
- ✅ Масштабируемость системы

## Недостатки

- ❌ Критически важны тактики надежности в распределенной системе (отказоустойчивость)
- ❌ При неправильной архитектуре большой latency системы
- ❌ Проблемы с согласованностью данных

::right::

<div class="flex items-center justify-center h-full">
  <img src="/messaging_06.png" alt="Обмен сообщениями (Messaging)" class="rounded shadow-lg max-h-[65vh]" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson5">← Занятие 5</a>
  <a href="/lesson7">Занятие 7 →</a>
</div>

---
layout: two-cols
layoutClass: gap-4
---

# Сообщения

Для передачи информации между двумя приложениями используйте формат сообщений

```python
producer = KafkaProducer(
    bootstrap_servers='localhost:9092',
    value_serializer=lambda v: json.dumps(v).encode(),
    key_serializer=lambda k: k.encode() if k else None,
)

producer.send(
    'orders',
    key='order-12345',
    value={'order_id': '12345', 'customer': 'Alice', 'total': 229.48},
    headers=[
        ('content-type', b'application/json'),
        ('source', b'orders-service'),
        ('trace-id', b'abc-def-123'),
    ],
)

producer.flush()
```

::right::

## Структура сообщения

### 🔑 Key

```
order-12345
```


### 📋 Headers

```
content-type: application/json
source: orders-service
trace-id: abc-def-123
```

### 📦 Payload (Value)

```json
{
  "order_id": "12345",
  "customer": "Alice",
  "items": [
    {"sku": "ABC-001", "qty": 2, "price": 49.99},
    {"sku": "XYZ-099", "qty": 1, "price": 129.50}
  ],
  "total": 229.48
}
```

<div class="abs-b m-2 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson5">← Занятие 5</a>
  <a href="/lesson7">Занятие 7 →</a>
</div>

<style>
h3 {
  font-size: 0.95rem;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
}
h2 {
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
em {
  font-size: 0.75rem;
  opacity: 0.7;
  display: block;
  margin-bottom: 0.5rem;
}
</style>
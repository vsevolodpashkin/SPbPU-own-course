---
layout: two-cols
---

# Краткая информация о себе

- 📝 - Техлид в компании Газпромбанк
- 🎨 - 5 лет профессиональной деятельности в ИТ
- 🛠  - R&D инженер в области механики жидкости и газа
<br>
Проекты:
- интегрированное моделирование в нефтегазе
- розничные банковские продуты
- госсистемы 

::right::

<img border="rounded" src="/public/image_001.jpg" alt="">


<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/features/slide-scope-style
-->

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

<!--
Here is another comment.
-->
Иконки взяты с сайта <a href="https://flaticon.com" title="Flaticon">://flaticon.com</a>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: two-cols
layoutClass: gap-8
---

# Horizontal Drilling

Horizontal drilling is a directional drilling technique that allows a wellbore to be drilled at
an angle of at least 80° relative to the vertical, extending through the reservoir rock for
hundreds or even thousands of feet.

## Key Advantages

- **Increased reservoir contact** — exposes the wellbore to a larger section of the pay zone
- **Higher productivity** — improved flow rates compared to vertical wells
- **Reduced surface footprint** — multiple wells can be drilled from a single pad
- **Better drainage** — efficient recovery of hydrocarbons from thin or fractured reservoirs

## Typical Applications

- Shale gas and shale oil extraction
- Tight sandstone formations
- Coalbed methane recovery
- Offshore field development

::right::

<div class="flex items-center justify-center h-full">
  <img src="/Horizontal-well-schema.png" alt="Horizontal well schematic" class="rounded shadow-lg" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: default
layoutClass: gap-8
---

# Структура курса

Цель: инженер-проектировщик ПО на минималках

<div grid="~ cols-3 gap-2" m="t-2">

```yaml
---
Бизнес-анализ
- Работа с требованиями
- Моделирование бизнес-процессов

---
```

```yaml
---
Инженерия ПО
- Компьютерные сети
- Вычисления
- Базы данных


---
```

```yaml
Проектирование 
- Тактики
- Документирование
---
```

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-default/01.png?raw=true" alt="">

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-seriph/01.png?raw=true" alt="">

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-seriph/01.png?raw=true" alt="">

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: default
---

# Ожидания по отчетности

|                                                     |                             |                       |
| --------------------------------------------------- | --------------------------- | --------------------- |
|   Групповая практическая работа    | <kbd>API спецификация</kbd> <kbd>Схема БД</kbd> /    |                       |
| Финальный проект |     <kbd>System design приложения </kbd>  / <kbd>shift</kbd><kbd>space</kbd>                   |


<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: default
---

# Sample Kotlin Implementation

A minimal domain model for a horizontal well, illustrating the geometry behind the schematic.

```kotlin
import kotlin.math.cos
import kotlin.math.sin
import kotlin.math.sqrt

/**
 * Domain model representing a horizontal well.
 *
 * @property wellId        unique well identifier (e.g. "HW-001")
 * @property azimuth       wellbore azimuth in degrees, measured from North clockwise
 * @property verticalDepth true vertical depth (TVD) from surface to heel, in meters
 * @property horizontalLength measured horizontal reach from heel to toe, in meters
 */
data class HorizontalWell(
    val wellId: String,
    val azimuth: Double,
    val verticalDepth: Double,
    val horizontalLength: Double,
) {
    /** Horizontal displacement of the toe relative to the heel, in meters. */
    fun horizontalDisplacement(): Double =
        horizontalLength * cos(Math.toRadians(azimuth))

    /** Total measured depth from surface to toe, in meters. */
    fun measuredDepth(): Double =
        sqrt(verticalDepth * verticalDepth + horizontalLength * horizontalLength)
}

fun main() {
    val well = HorizontalWell(
        wellId = "HW-001",
        azimuth = 45.0,
        verticalDepth = 2_500.0,
        horizontalLength = 1_500.0,
    )

    println("Well:            ${well.wellId}")
    println("Displacement:    ${"%.2f".format(well.horizontalDisplacement())} m")
    println("Measured depth:  ${"%.2f".format(well.measuredDepth())} m")
}
```

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: two-cols
layoutClass: gap-8
---

# Бизнес-анализ - работа с требованиями

<div class="flex items-center justify-center h-full">
  <img src="/image_029.png" alt="Бизнес-анализ" class="rounded shadow-lg" />
</div>

::right::

Это практика обеспечечния изменений на предприятии через определение потребностей и рекомендацию решений, которые приносят пользу заинтересованным сторонам

<div class="text-sm opacity-70 mt-6 italic">
  A Guide to the Business Analysis Body of Knowledge (BABOK Guide v3)
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: default
---

# Шаблон фиксации бизнес-требований

1. **Основные положения**
2. **Цели проекта**
3. **Объем проекта**
4. **Бизнес-требования**
5. **Ключевые заинтересованные стороны**
6. **Ограничения проекта**
7. **Анализ затрат и выгод**

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

---
layout: default
---

# Цели по SMART

<div class="flex items-center justify-center h-full">
  <img src="/SMART_01.png" alt="Цели по SMART" class="rounded shadow-lg max-h-[70vh]" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/title">← Титульный слайд</a>
  <a href="/lesson2">Занятие 2 →</a>
</div>

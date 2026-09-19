---
hide: false
layout: center
---

# Арихтектура ПО

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 3. Современная архитектура web-приложений. Решения</div>
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

# Современная архитектура приложения

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Кликни на <strong class="text-gray-700">скрытый блок</strong>, чтобы проверить свою догадку — что за ним спрятано в архитектуре современного приложения.
</p>
<!-- 2 колонки -->
<div class="grid grid-cols-2 gap-4 mt-2">

  <!-- =============== ЛЕВАЯ КОЛОНКА: ДИАГРАММА =============== -->
  <div>
    <div class="text-[10px] text-gray-500 mb-1 flex items-center gap-2">
      <span class="font-mono text-gray-700">Архитектурная схема</span>
      <span class="text-gray-300">·</span>
      <span>кликни чтобы раскрыть</span>
    </div>
    <div class="relative bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-3" style="min-height: 360px;">
      <!-- LOAD BALANCER (скрыт) -->
      <div class="flex justify-center mb-1">
        <div @click="reveal('load_balancer')"
             :class="revealed.load_balancer ? 'border-emerald-400 bg-emerald-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
             class="border-2 rounded-lg px-3 py-1.5 min-w-[170px] text-center transition-all select-none">
          <div v-if="!revealed.load_balancer">
            <div class="text-lg text-gray-400 leading-none">?</div>
            <div class="text-[9px] text-gray-400 mt-0.5">кликни</div>
          </div>
          <div v-else>
            <div class="text-[11px] font-bold text-emerald-700">⚖ Load Balancer</div>
            <div class="text-[9px] text-emerald-600">распределение нагрузки</div>
          </div>
        </div>
      </div>
      <div class="flex justify-center text-gray-400 text-[10px] leading-none">▼</div>
      <!-- API GATEWAY (скрыт) -->
      <div class="flex justify-center my-1">
        <div @click="reveal('api_gateway')"
             :class="revealed.api_gateway ? 'border-blue-400 bg-blue-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
             class="border-2 rounded-lg px-3 py-1.5 min-w-[170px] text-center transition-all select-none">
          <div v-if="!revealed.api_gateway">
            <div class="text-lg text-gray-400 leading-none">?</div>
            <div class="text-[9px] text-gray-400 mt-0.5">кликни</div>
          </div>
          <div v-else>
            <div class="text-[11px] font-bold text-blue-700">🔌 API Gateway</div>
            <div class="text-[9px] text-blue-600">единая точка входа</div>
          </div>
        </div>
      </div>
      <div class="flex justify-center text-gray-400 text-[10px] leading-none">▼</div>
      <!-- 3 МИКРОСЕРВИСА (всегда видны) -->
      <div class="flex justify-around gap-2 my-1">
        <div class="flex-1 bg-blue-500 text-white rounded-lg p-2 text-center shadow-sm">
          <div class="text-[10px] font-bold">Users</div>
          <div class="text-[9px] opacity-80">микросервис</div>
        </div>
        <div class="flex-1 bg-blue-500 text-white rounded-lg p-2 text-center shadow-sm">
          <div class="text-[10px] font-bold">Orders</div>
          <div class="text-[9px] opacity-80">микросервис</div>
        </div>
        <div class="flex-1 bg-blue-500 text-white rounded-lg p-2 text-center shadow-sm">
          <div class="text-[10px] font-bold">Payments</div>
          <div class="text-[9px] opacity-80">микросервис</div>
        </div>
      </div>
      <div class="flex justify-center text-gray-400 text-[10px] leading-none">▼</div>
      <!-- MESSAGE BROKER (скрыт) -->
      <div class="flex justify-center mt-1">
        <div @click="reveal('message_broker')"
             :class="revealed.message_broker ? 'border-purple-400 bg-purple-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
             class="border-2 rounded-lg px-3 py-1.5 min-w-[170px] text-center transition-all select-none">
          <div v-if="!revealed.message_broker">
            <div class="text-lg text-gray-400 leading-none">?</div>
            <div class="text-[9px] text-gray-400 mt-0.5">кликни</div>
          </div>
          <div v-else>
            <div class="text-[11px] font-bold text-purple-700">📨 Message Broker</div>
            <div class="text-[9px] text-purple-600">асинхронная коммуникация</div>
          </div>
        </div>
      </div>
      <!-- SERVICE DISCOVERY (скрыт, сбоку) -->
      <div class="absolute right-3 top-[200px]">
        <div @click="reveal('service_discovery')"
             :class="revealed.service_discovery ? 'border-amber-400 bg-amber-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
             class="border-2 rounded-lg px-2.5 py-1.5 min-w-[120px] text-center transition-all select-none">
          <div v-if="!revealed.service_discovery">
            <div class="text-lg text-gray-400 leading-none">?</div>
            <div class="text-[9px] text-gray-400 mt-0.5">кликни</div>
          </div>
          <div v-else>
            <div class="text-[11px] font-bold text-amber-700">🔍 Service Discovery</div>
            <div class="text-[9px] text-amber-600">реестр сервисов</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Счётчик -->
  <div class="mt-1 inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 px-40 py-1 rounded-full text-xs">
    <span class="text-indigo-700 font-medium">Отгадано:</span>
    <span class="font-bold text-indigo-600 tabular-nums">{{ count }} / 9</span>
  </div>
  </div>

  <!-- =============== ПРАВАЯ КОЛОНКА: 5 ТЕКСТОВЫХ БЛОКОВ =============== -->
  <div>
    <div class="text-[10px] text-gray-500 mb-1 flex items-center gap-2">
      <span class="font-mono text-gray-700">Архитектурные практики</span>
      <span class="text-gray-300">·</span>
      <span>кликни чтобы раскрыть</span>
    </div>
    <div class="space-y-1.5">
      <!-- 1. API и идемпотентность -->
      <div @click="reveal('api_idempotency')"
           :class="revealed.api_idempotency ? 'border-blue-400 bg-blue-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
           class="border-2 rounded-lg px-2 py-1 transition-all select-none">
        <div v-if="!revealed.api_idempotency" class="flex items-center gap-1 text-[10px] text-gray-400 leading-none">
          <span class="text-sm">?</span>
          <span>кликни чтобы раскрыть</span>
        </div>
        <div v-else>
          <div class="flex items-center gap-0.5 leading-none mb-0">
            <span class="text-blue-600 font-bold text-[10px]">✓</span>
            <strong class="text-blue-900 text-[10px]">API и идемпотентность</strong>
          </div>
          <p class="text-[9.5px] text-gray-700 leading-tight">
            Повторный вызов даёт тот же результат. Используем ключи идемпотентности.
          </p>
        </div>
      </div>
      <!-- 2. Таймауты и ретраи -->
      <div @click="reveal('timeouts')"
           :class="revealed.timeouts ? 'border-amber-400 bg-amber-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
           class="border-2 rounded-lg px-2 py-1 transition-all select-none">
        <div v-if="!revealed.timeouts" class="flex items-center gap-1 text-[10px] text-gray-400 leading-none">
          <span class="text-sm">?</span>
          <span>кликни чтобы раскрыть</span>
        </div>
        <div v-else>
          <div class="flex items-center gap-0.5 leading-none mb-0">
            <span class="text-amber-600 font-bold text-[10px]">✓</span>
            <strong class="text-amber-900 text-[10px]">Обработка таймаутов и ретраи</strong>
          </div>
          <p class="text-[9.5px] text-gray-700 leading-tight">
            Таймауты, exponential backoff, circuit breaker. Защита от каскадных отказов.
          </p>
        </div>
      </div>
      <!-- 3. CI/CD pipeline с мини-схемой -->
      <div @click="reveal('cicd')"
           :class="revealed.cicd ? 'border-emerald-400 bg-emerald-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
           class="border-2 rounded-lg p-2 transition-all select-none">
        <div v-if="!revealed.cicd" class="flex items-center gap-2 text-[11px] text-gray-400">
          <span class="text-base leading-none">?</span>
          <span>кликни чтобы раскрыть</span>
        </div>
        <div v-else>
          <div class="flex items-center gap-1.5 mb-1">
            <span class="text-emerald-600 font-bold text-[11px]">✓</span>
            <strong class="text-emerald-900 text-[11px]">CI/CD pipeline</strong>
          </div>
          <div class="flex items-center gap-0.5 text-[9px] font-mono leading-tight">
            <span class="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded">commit</span>
            <span class="text-gray-400">→</span>
            <span class="px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded">build</span>
            <span class="text-gray-400">→</span>
            <span class="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded">test</span>
            <span class="text-gray-400">→</span>
            <span class="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded">deploy</span>
          </div>
        </div>
      </div>
      <!-- 4. Инфраструктура деплоя -->
      <div @click="reveal('infrastructure')"
           :class="revealed.infrastructure ? 'border-slate-400 bg-slate-100 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
           class="border-2 rounded-lg p-2 transition-all select-none">
        <div v-if="!revealed.infrastructure" class="flex items-center gap-2 text-[11px] text-gray-400">
          <span class="text-base leading-none">?</span>
          <span>кликни чтобы раскрыть</span>
        </div>
        <div v-else>
          <div class="flex items-center gap-1.5 mb-1">
            <span class="text-slate-700 font-bold text-[11px]">✓</span>
            <strong class="text-slate-900 text-[11px]">Инфраструктура деплоя</strong>
          </div>
          <div class="grid grid-cols-3 gap-1">
            <div class="bg-white border border-slate-300 rounded px-1 py-0.5 text-center">
              <div class="text-[9px] font-semibold text-slate-700">VM</div>
              <div class="text-[8px] text-slate-500">virtual</div>
            </div>
            <div class="bg-white border border-slate-300 rounded px-1 py-0.5 text-center">
              <div class="text-[9px] font-semibold text-slate-700">BareMetal</div>
              <div class="text-[8px] text-slate-500">physical</div>
            </div>
            <div class="bg-white border border-slate-300 rounded px-1 py-0.5 text-center">
              <div class="text-[9px] font-semibold text-slate-700">Container</div>
              <div class="text-[8px] text-slate-500">docker</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 5. Мониторинг, журналирование, аудит -->
      <div @click="reveal('monitoring')"
           :class="revealed.monitoring ? 'border-rose-400 bg-rose-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
           class="border-2 rounded-lg px-2 py-2 transition-all select-none">
        <div v-if="!revealed.monitoring" class="flex items-center gap-1 text-[10px] text-gray-400 leading-none">
          <span class="text-sm">?</span>
          <span>кликни чтобы раскрыть</span>
        </div>
        <div v-else>
          <div class="flex items-center gap-1 leading-none mb-0">
            <span class="text-sm leading-none">📊</span>
            <strong class="text-rose-900 text-[10px]">Мониторинг, журналирование, аудит</strong>
          </div>
          <p class="text-[9.5px] text-gray-700 leading-tight">
            Метрики (Prometheus), логи (ELK/Loki), трассировка (Jaeger), audit trail для безопасности.
          </p>
        </div>
      </div>
    </div>
  </div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson9">← Занятие 9</a>
  <a href="/lesson11">Занятие 11 →</a>
</div>

<script setup>
import { reactive, computed } from 'vue'

const revealed = reactive({
  api_gateway: false,
  service_discovery: false,
  load_balancer: false,
  message_broker: false,
  api_idempotency: false,
  timeouts: false,
  cicd: false,
  infrastructure: false,
  monitoring: false,
})

const count = computed(() => Object.values(revealed).filter(Boolean).length)

const reveal = (key) => {
  revealed[key] = true
}
</script>
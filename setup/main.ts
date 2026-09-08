// Глобальная регистрация Vue-плагинов для Slidev.
//
// Назначение: регистрация @vueuse/motion → директива `v-motion`
// используется в слайде «Заинтересованные стороны ИТ-проекта»
// в pages/lesson1.md для интерактивного снятия серых карточек-покрытий.
//
// Файл автоматически подхватывается Slidev из каталога setup/.

import { MotionPlugin } from '@vueuse/motion'
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app }) => {
  app.use(MotionPlugin)
})

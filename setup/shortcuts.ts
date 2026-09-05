import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

// Disable the slide-jump dialog (press 'g') — it shows a sidebar-like panel
// with a list of all slides on the right side of the viewport, which is not
// desired in the deployed presentation. The shortcut is replaced with a no-op
// (keeping the original name to avoid Slidev's "missing base shortcut" warning).
export default defineShortcutsSetup((_nav: NavOperations, base: ShortcutOptions[]) => {
  return base.map(s =>
    s.name === 'goto'
      ? { ...s, fn: () => {} }
      : s,
  )
})
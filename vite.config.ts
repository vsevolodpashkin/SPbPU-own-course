import { defineConfig, type Plugin } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import sharp from 'sharp'
import { optimize as svgOptimize } from 'svgo'
import fs from 'node:fs/promises'
import path from 'node:path'

async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

async function generateWebPInPublicDir(publicDirPath: string): Promise<{
  generated: number
  svgMinified: number
  savedBytes: number
}> {
  const files = await fs.readdir(publicDirPath)
  let generated = 0
  let svgMinified = 0
  let savedBytes = 0

  for (const file of files) {
    const fullPath = path.join(publicDirPath, file)
    const ext = path.extname(file).toLowerCase()
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue

    const origStat = await fs.stat(fullPath)
    if (!origStat.isFile()) continue

    const baseName = path.basename(file, ext)
    const webpPath = path.join(publicDirPath, `${baseName}.webp`)

    if (await fileExists(webpPath)) {
      const webpStat = await fs.stat(webpPath)
      if (webpStat.mtimeMs >= origStat.mtimeMs) continue
    }

    await sharp(fullPath).webp({ quality: 80 }).toFile(webpPath)
    const webpStat = await fs.stat(webpPath)
    savedBytes += origStat.size - webpStat.size
    generated++
    console.log(
      `  ${file} (${(origStat.size / 1024).toFixed(0)}KB) → ${baseName}.webp (${(webpStat.size / 1024).toFixed(0)}KB)`,
    )
  }

  for (const file of files) {
    if (path.extname(file).toLowerCase() !== '.svg') continue
    const fullPath = path.join(publicDirPath, file)
    const original = await fs.readFile(fullPath, 'utf-8')
    const result = svgOptimize(original, {
      multipass: true,
      plugins: ['preset-default'],
    })
    if (typeof result.data === 'string' && result.data.length < original.length) {
      await fs.writeFile(fullPath, result.data, 'utf-8')
      savedBytes += original.length - result.data.length
      svgMinified++
      console.log(
        `  ${file} (${original.length}B) → ${file} (${result.data.length}B) [SVGO]`,
      )
    }
  }

  return { generated, svgMinified, savedBytes }
}

function publicDirImageOptimizer(): Plugin {
  let publicDirPath = ''

  return {
    name: 'public-dir-image-optimizer',
    apply: 'build',

    configResolved(config) {
      publicDirPath = typeof config.publicDir === 'string'
        ? config.publicDir
        : config.publicDir?.dir || path.resolve(process.cwd(), 'public')
    },

    async buildStart() {
      const stats = await generateWebPInPublicDir(publicDirPath)
      const total = stats.generated + stats.svgMinified
      if (total > 0) {
        console.log(
          `\x1b[32m[public-dir-image-optimizer]\x1b[0m Prepared ${stats.generated} WebP + ${stats.svgMinified} SVG, saved ${(stats.savedBytes / 1024).toFixed(1)}KB vs original`,
        )
      }
    },

    async closeBundle() {
      const config = (this as { vite?: { config?: { build?: { outDir?: string } } } }).vite?.config
      const outDir = path.resolve(
        process.cwd(),
        config?.build?.outDir || 'dist',
      )
      let files: string[]
      try {
        files = await fs.readdir(outDir)
      } catch {
        return
      }

      let removed = 0
      for (const file of files) {
        const ext = path.extname(file).toLowerCase()
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          await fs.unlink(path.join(outDir, file))
          removed++
        }
      }

      if (removed > 0) {
        console.log(
          `\x1b[32m[public-dir-image-optimizer]\x1b[0m Removed ${removed} original raster files from dist/ — only WebP remains`,
        )
      }
    },
  }
}

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      apply: 'build',

      include: '**/*.{png,jpg,jpeg,svg}',
      exclude: 'node_modules/**',

      logStats: true,
      cache: false,

      webp: {
        quality: 80,
      },

      png: { enabled: false },
      jpeg: { enabled: false },
      jpg: { enabled: false },

      svg: {
        multipass: true,
      },
    }),

    publicDirImageOptimizer(),
  ],
})

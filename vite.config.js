import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base : "/425rohan/Todo-App-React/",
  plugins: [
    react(),
    {
      name: 'html-transform',
      enforce: 'post',
      apply: 'build',
      generateBundle(_, bundle) {
        for (const file in bundle) {
          if (file.endsWith('.html')) {
            const html = bundle[file].source.toString()
            const transformedHtml = html.replace(
              /<script type="module" src="\/425rohan\/Todo-App-React\/index.js"><\/script>/,
              '</body><script type="module" src="/425rohan/Todo-App-React/index.js"></script>'
            )
            bundle[file].source = transformedHtml.replace('</body>', '<script type="module" src="/425rohan/Todo-App-React/index.js"></script></body>')
          }
        }
      }
    }
  ]

})

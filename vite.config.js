import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: ['styled-jsx/babel']
			}
		}),
		AutoImport({
			include: [/\.[j]sx?$/],
			imports: ['react'],
			dirs: ['./components', './utils', './pages'],
			dts: './auto-imports.d.ts'
		})
	],
	server: {
		port: 3000
	},
	build: {
		assetsInlineLimit: 0
	}
})

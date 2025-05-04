import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// vim: set ft=typescript ts=2 sw=2 et :

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg']
});

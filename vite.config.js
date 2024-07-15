import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/sass/main.sass', 'resources/css/app.css', 'resources/js/app.js', 'resources/js/main.js'],
            refresh: true,
        }),
    ],
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    root: './src',  // Point Vite to the public folder
    plugins: [react()],
});

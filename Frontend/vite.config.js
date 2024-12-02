import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Exporting the Vite configuration
export default defineConfig({
    root: './public', // Point Vite to the public folder
    plugins: [react()] // Use the React plugin
});

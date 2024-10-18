import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // เพิ่ม base ให้ตรงกับชื่อ repository ของคุณ
  plugins: [react()],
});

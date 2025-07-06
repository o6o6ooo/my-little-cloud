/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',        // App Router 用
        './components/**/*.{js,ts,jsx,tsx}', // コンポーネント用（任意）
    ],
    theme: {
        extend: {
            colors: {
                bg: 'var(--bg)',
                fg: 'var(--fg)',
                card: 'var(--card)',
                accent: 'var(--accent)',
                lightblue: '#A5C3DE',
                button: '#2A68B2',
            },
        },
    },
    plugins: [],
  };
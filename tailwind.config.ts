import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4c9eba",
          "secondary": "#98e011",
          "accent": "#a771d6",
          "neutral": "#261f2e",
          "base-100": "#353941",
          "info": "#6679cc",
          "success": "#3dd17b",
          "warning": "#e7a518",
          "error": "#db295f",
          "body": {
            "background-color": "#e3e6e6"
          }
        },
      },
    ],
  },
}
export default config

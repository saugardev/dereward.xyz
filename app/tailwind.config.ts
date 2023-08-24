import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'crudo': '#F9F8F5'
      },
      textColor: {
        'crudo': '#F9F8F5'
      },
      outlineColor: {
        'crudo': '#F9F8F5'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config

/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            primary: colors.cyan,
            accent: colors.yellow,
            neutral: colors.gray,
          },
        fontWeight: {
            normal: defaultTheme.fontWeight.normal,
            bold: defaultTheme.fontWeight.bold,
        },
        fontFamily: {
            'sans': defaultTheme.fontFamily.sans,
        },
	},
	plugins: [require('@tailwindcss/typography')],
}

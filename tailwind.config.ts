import type { Config } from 'tailwindcss';
import linkBox from './tailwind/plugins/linkbox';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: 'var(--font-sans)',
				serif: 'var(--font-serif)',
			},
		},
	},
	plugins: [linkBox],
	future: {
		hoverOnlyWhenSupported: true,
	},
};
export default config;

import localFont from 'next/font/local';

export const sons = localFont({
	display: 'swap',
	preload: true,
	fallback: ['system-ui', 'sans-serif'],
	variable: '--font-sans',
	src: [
		{
			path: '../_assets/fonts/sons-book.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../_assets/fonts/sons-book-italic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../_assets/fonts/sons-strong.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../_assets/fonts/sons-strong-italic.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: '../_assets/fonts/sons-semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../_assets/fonts/sons-semibold-italic.woff2',
			weight: '600',
			style: 'italic',
		},
	],
});

import { sons } from '~/app/_styles/fonts';

export function RootHtml({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${sons.variable} [--site-nav-height:80px]`}>
			<body>{children}</body>
		</html>
	);
}

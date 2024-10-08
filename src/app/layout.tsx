import type { Metadata } from 'next';
import { MobileNavigation } from '~/app/_components/mobile-navigation';
import { NavLink } from '~/app/_components/nav-link';
import { RootHtml } from '~/app/_components/root-html';
import { PATH } from '~/app/_constants/path.constants';
import '~/app/_styles/globals.css';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<RootHtml>
			<div vaul-drawer-wrapper="" className="bg-ds-bg-foundation">
				<div className="bg-ds-bg-foundation h-full min-h-[100dvh]">
					<DesktopNavbar />
					<MobileNavigation />
					<div className="h-full min-h-[calc(100dvh-var(--site-nav-height))]">{children}</div>
				</div>
			</div>
		</RootHtml>
	);
}

function DesktopNavbar() {
	return (
		<div className="hidden px-5 sticky top-0 md:flex items-center mx-auto h-[var(--site-nav-height)]">
			<div className="flex-1">
				<span className="font-medium text-ds-text-primary">KWAMAKAZI</span>
			</div>
			<div className="flex-1 flex items-center gap-2 justify-between">
				<NavLink href={PATH.index}>Index</NavLink>
				<NavLink href={PATH.collections}>
					Collections <sup>(8)</sup>
				</NavLink>
				<NavLink href={PATH.about}>Information</NavLink>
			</div>
		</div>
	);
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

export const NavLink = React.forwardRef<
	HTMLAnchorElement,
	Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> & {
		match?: string;
		href: string;
	}
>(({ className, match, href, ...rest }, ref) => {
	const pathName = usePathname();
	const isActive = match != null ? pathName === match : pathName === href;

	return (
		<Link
			{...rest}
			ref={ref}
			href={href}
			className={twMerge(
				'hover:text-zinc-600 [&.active]:text-zinc-500 text-ds-text-primary transition-colors uppercase font-medium',
				isActive && 'active',
				className,
			)}
		/>
	);
});

NavLink.displayName = 'NavLink';

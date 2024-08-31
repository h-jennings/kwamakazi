'use client';

import * as React from 'react';
import { Drawer } from 'vaul';
import { NavLink } from '~/app/_components/nav-link';
import { PATH } from '~/app/_constants/path.constants';

export function MobileNavigation() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="flex md:hidden mx-auto px-5 h-[var(--site-nav-height)] items-center">
			<div className="flex-1">
				<span className="font-medium text-ds-text-primary text-sm">KWAMAKAZI</span>
			</div>
			<Drawer.Root open={isOpen} onOpenChange={setIsOpen} shouldScaleBackground={true}>
				<Drawer.Trigger className="text-sm text-ds-text-primary font-medium uppercase flex items-center gap-1">
					<span aria-hidden>{isOpen ? '-' : '+'}</span>
					<span>Menu</span>
				</Drawer.Trigger>

				<Drawer.Portal>
					<Drawer.Overlay className="fixed inset-0 z-50 bg-ds-bg-inverse/30 backdrop-blur-[2px] transition-all" />
					<Drawer.Content className="fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-[10px] border bg-ds-bg-foundation h-[90%]">
						<Drawer.Title className="sr-only">Menu</Drawer.Title>
						<Drawer.Description className="sr-only">Navigation menu</Drawer.Description>
						<div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-zinc-200" />
						<nav className="flex-1 flex px-5 py-5 pt-11 flex-col items-end text-right gap-2">
							<NavLink href={PATH.index} className="text-sm">
								Index
							</NavLink>
							<NavLink href={PATH.collections} className="text-sm">
								Collections
							</NavLink>
							<NavLink href={PATH.about} className="text-sm">
								Information
							</NavLink>
						</nav>
					</Drawer.Content>
				</Drawer.Portal>
			</Drawer.Root>
		</div>
	);
}

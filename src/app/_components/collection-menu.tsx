'use client';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { useIsClient } from '~/app/_hooks/use-is-client';
import { useMediaQuery } from '~/app/_hooks/use-media-query';

export function CollectionMenu({ children }: { children?: React.ReactNode }) {
	const isClient = useIsClient();
	const isMediumScreen = useMediaQuery('(min-width: 768px)');
	const [isOpen, setIsOpen] = React.useState(true);

	React.useEffect(() => {
		console.log(isOpen);
	}, [isOpen]);

	return (
		isClient &&
		isMediumScreen && (
			<div
				onMouseOver={() => {
					setIsOpen(true);
				}}
				onMouseLeave={() => {
					setIsOpen(false);
				}}
				className="outline outline-red-500 h-full relative"
			>
				<button
					className="sr-only"
					onClick={() => {
						setIsOpen((prev) => !prev);
					}}
				>
					Open collection menu
				</button>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="absolute left-0 bottom-0 w-full"
						>
							{children}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		)
	);
}

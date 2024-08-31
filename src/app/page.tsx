import { CollectionMenu } from '~/app/_components/collection-menu';

export default function Home() {
	return (
		<main className="flex flex-col gap-16">
			<div className="flex-1 px-5">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
					tortor, dignissim sit amet.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
					tortor, dignissim sit amet.
				</p>
			</div>
			<div className="h-[max(20vh,200px)] w-full">
				<CollectionMenu>
					<div className="w-full outline outline-blue-500 p-10 bg-ds-bg-foundation">
						<div className="flex gap-4 w-full max-w-[1350px] mx-auto overflow-x-auto">
							<div className="flex-1 flex gap-4">
								<div className="aspect-[3/4] min-w-[210px] bg-zinc-950 rounded-lg" />
								<div className="aspect-[3/4] min-w-[210px] bg-zinc-950 rounded-lg" />
								<div className="aspect-[3/4] min-w-[210px] bg-zinc-950 rounded-lg" />
								<div className="aspect-[3/4] min-w-[210px] bg-zinc-950 rounded-lg" />
							</div>
							<div className="flex-1 w-full min-w-[420px] h-auto flex">
								<div className="flex-1 w-full h-full bg-zinc-950 rounded-lg" />
							</div>
						</div>
					</div>
				</CollectionMenu>
			</div>
		</main>
	);
}

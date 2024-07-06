"use client";
import ImageContainer from "@/components/image-container";
import { useAppSelector } from "@/lib/hooks";
import { useActions } from "@/lib/actions";
import EmptyState from "@/components/empty-state";
import cn from "classnames";

export default function Recent() {
	const { recent } = useAppSelector(({ generator }) => generator);
	const { deleteRecent } = useActions();

	const classes = cn("grid grid-cols-1 gap-4 md:gap-8", [recent.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"]);

	if (recent.length === 0) {
		return <EmptyState text="No recent images." />;
	}

	function deleteImage(id: string) {
		deleteRecent(id);
	}

	return (
		<ul className={classes}>
			{[...recent].reverse().map(({ id, text, image }) => (
				<li className="flex flex-col items-center py-2" key={id}>
					<ImageContainer
						dark
						description={text}
						id={id}
						imageSrc={`data:image/jpeg;base64,${image}`}
						onDelete={deleteImage}
					/>
				</li>
			))}
		</ul>
	);
}

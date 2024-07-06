import Loading from "@/app/loading";
import { ReactNode, useEffect, useState } from "react";
import EmptyState from "../empty-state";
import ImageContent from "./image-content";
import ImageActions from "./image-actions";

interface Props {
	imageSrc: string;
	description: string;
	isLoading?: boolean;
	dark?: boolean;
	id?: string;
	onDelete?: (id: string) => void;
}

const emptyText =
	"Enter any description of the image\nyou want to generate above.\n\n" +
	"For unrecognized text the image will be random.";

function Container({ children }: { children: ReactNode }) {
	return <div className="min-h-[300px] w-full max-w-[400px] grow">{children}</div>;
}

export default function ImageContainer({ imageSrc, description, isLoading = false, dark, id, onDelete }: Props) {
	const [inProgress, setInProgress] = useState(false);

	useEffect(() => {
		if (isLoading) {
			setInProgress(true);
		}
		if (imageSrc) {
			setInProgress(false);
		}
	}, [isLoading, imageSrc]);

	if (!imageSrc) {
		return <Container>{inProgress ? <Loading /> : <EmptyState text={emptyText} />}</Container>;
	}

	return (
		<Container>
			<ImageContent description={description} imageSrc={imageSrc} />
			<ImageActions dark={dark} description={description} id={id} imageSrc={imageSrc} onDelete={onDelete} />
		</Container>
	);
}

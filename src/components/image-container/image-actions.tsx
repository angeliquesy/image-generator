import Download from "/public/download.svg";
import Bin from "/public/bin.svg";
import { Button, ButtonLink } from "../button";
import cn from "classnames";

interface Props {
	imageSrc: string;
	description: string;
	dark?: boolean;
	id?: string;
	onDelete?: (id: string) => void;
}

export default function ImageActions({ imageSrc, description, dark = false, id, onDelete }: Props) {
	const actionsClasses = cn("mt-3", { "grid gap-2 sm:grid-cols-1 md:grid-cols-2": onDelete });
	const buttonKind = dark ? "primary" : "secondary";

	function handleDelete() {
		onDelete?.(id!);
	}

	return (
		<div className={actionsClasses}>
			<ButtonLink
				download={`${description}.jpg`}
				href={imageSrc}
				Icon={<Download />}
				kind={buttonKind}
				title="Download"
			/>
			{onDelete && <Button Icon={<Bin />} kind={buttonKind} onClick={handleDelete} title="Remove" />}
		</div>
	);
}

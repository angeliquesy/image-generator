import { ButtonKind, Radius } from "./types";
import { ReactNode } from "react";
import cn from "classnames";

interface Props {
	title: string;
	href: string;
	radius?: Radius;
	download?: string;
	kind?: ButtonKind;
	Icon?: ReactNode;
}

export default function ButtonLink({ radius = "rounded-md", title, download, href, kind = "primary", Icon }: Props) {
	const classes = cn("button", radius, kind);

	return (
		<a className={classes} download={download} href={href} type="button">
			{Icon && <span className="icon">{Icon}</span>}
			{title}
		</a>
	);
}

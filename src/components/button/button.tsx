import { ButtonKind, Radius } from "./types";
import { ReactNode } from "react";
import cn from "classnames";

interface Props {
	title: string;
	onClick: () => void;
	radius?: Radius;
	isDisabled?: boolean;
	kind?: ButtonKind;
	Icon?: ReactNode;
}

export default function Button({ radius = "rounded-md", title, isDisabled, onClick, kind = "primary", Icon }: Props) {
	const classes = cn("button disabled:bg-slate-500", radius, kind, {
		"cursor-not-allowed": isDisabled,
	});

	return (
		<button className={classes} disabled={isDisabled} onClick={onClick} type="button">
			{Icon && <span className="icon">{Icon}</span>}
			{title}
		</button>
	);
}

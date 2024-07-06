"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";

export interface Props {
	title: string;
	href: string;
}

export default function MenuItem({ title, href }: Props) {
	const currentPath = usePathname();
	const isActive = currentPath === href;
	const classes = cn(
		"transition",
		{ "text-sky-900 cursor-default": isActive },
		{ "hover:text-emerald-700": !isActive }
	);

	return (
		<li className="mr-2">
			<Link className={classes} href={href} scroll={false}>
				{title}
			</Link>
		</li>
	);
}

import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex shrink-0 items-center justify-center bg-slate-800 p-2 text-white">
			<div className="layout-container flex h-[45px] items-center justify-center">
				<Link href="https://github.com/angeliquesy">github.com/angeliquesy</Link>
			</div>
		</footer>
	);
}

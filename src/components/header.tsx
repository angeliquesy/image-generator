import Menu from "./menu";
import Link from "next/link";
import { Pages } from "@/app/constants";

export default function Header() {
	return (
		<header
			className="fixed inset-x-0 top-0 z-50 shrink-0 border-b 
			border-slate-300 bg-white-rgba px-5 text-black shadow-md backdrop-blur-sm"
		>
			<div className="layout-container flex h-header items-center justify-between">
				<Link href={Pages.Home} scroll={false}>
					<h1
						className="bg-gradient-to-r from-blue-700  via-emerald-600 to-emerald-400 bg-300%
						 bg-clip-text font-bold text-transparent hover:animate-gradient"
					>
						AI IMAGE GENERATOR
					</h1>
				</Link>

				<Menu />
			</div>
		</header>
	);
}

import MenuItem from "./menu-item";
import { Pages } from "@/app/constants";

const menuItems = new Map<Pages, string>([
	[Pages.Home, "Home"],
	[Pages.Recent, "Recent"],
]);

export default function Menu() {
	return (
		<nav className="">
			<ul className="flex">
				{(Object.values(Pages) as Array<Pages>).map((page) => (
					<MenuItem href={page} key={page} title={menuItems.get(page)!} />
				))}
			</ul>
		</nav>
	);
}

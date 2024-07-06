import { RecentData } from "@/lib/api/constants-and-types";

export interface User {
	id: string;
	images: RecentData;
}

export const users: User[] = [];

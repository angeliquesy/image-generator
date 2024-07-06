export type EntryImageData = { text: string; image: string };
export type ImageData = EntryImageData & { id: string };

export type RecentData = ImageData[];

export const LS_KEY_USER_ID = process.env.NEXT_PUBLIC_LS_KEY_USER_ID;
export const BASE_URL = process.env.NEXT_PUBLIC_API_USERS_BASE_URL;

export interface GeneratorState {
	recent: RecentData;
	isNew: boolean;
	url: string | null;
	cachedRequests: string[];
}

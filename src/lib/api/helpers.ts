import short from "short-uuid";
import { EntryImageData, ImageData } from "./constants-and-types";

const LS_KEY_USER_ID = "user-id";

export function getExistingUserId() {
	return localStorage.getItem(LS_KEY_USER_ID);
}

export function getNewUserId() {
	const id = short.generate();
	localStorage.setItem(LS_KEY_USER_ID, id);

	return id;
}

export function fetchUsers({ url, method, data }: { url: string; method: string; data?: unknown }) {
	return fetch(url, {
		method,
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export const getImageServerData = (data: EntryImageData): ImageData => ({ id: short.generate(), ...data });

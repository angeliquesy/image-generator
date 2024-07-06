import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { BASE_URL, EntryImageData, GeneratorState, ImageData, RecentData } from "./constants-and-types";
import { fetchUsers, getExistingUserId, getImageServerData, getNewUserId } from "./helpers";

const createSliceWithThunks = buildCreateSlice({
	creators: { asyncThunk: asyncThunkCreator },
});

const initialState: GeneratorState = {
	recent: [],
	isNew: true,
	url: null,
	cachedRequests: [],
};

export const generatorSlice = createSliceWithThunks({
	name: "generator",
	initialState,
	reducers: (create) => ({
		getUserId: create.reducer((state) => {
			let id = getExistingUserId();

			if (!!id) {
				state.isNew = false;
			} else {
				id = getNewUserId();
			}
			state.url = `${BASE_URL}${id}`;
		}),
		getRecent: create.asyncThunk(
			async (_arg, { getState }) => {
				const {
					generator: { url, isNew },
				} = getState() as { generator: GeneratorState };

				if (isNew || url === null) {
					throw new Error(url ? "Cannot get a new user" : "No api url");
				}

				const response = await fetchUsers({ url, method: "GET" });

				if (response.ok) {
					return response.json();
				} else if (response.status === 404) {
					throw new Error(response.statusText);
				}
			},
			{
				rejected: (state) => {
					state.isNew = true;
					state.url = `${BASE_URL}${getNewUserId()}`;
				},
				fulfilled: (state, action) => {
					state.recent = action.payload as RecentData;
				},
			}
		),
		postRecent: create.asyncThunk(
			async (data: EntryImageData, { getState }) => {
				const {
					generator: { url, isNew },
				} = getState() as { generator: GeneratorState };

				if (!isNew || url === null) {
					throw new Error(url ? "Cannot post an existing user" : "No api url");
				}

				const response = await fetchUsers({
					url,
					method: "POST",
					data: getImageServerData(data),
				});

				if (response.ok) {
					return response.json();
				} else if (response.status === 409) {
					throw new Error(response.statusText);
				}
			},
			{
				rejected: (state) => {
					state.isNew = false;
				},
				fulfilled: (state, action) => {
					state.isNew = false;
					state.recent.push(action.payload as ImageData);
					state.cachedRequests.push(action.payload.text);
				},
			}
		),
		putRecent: create.asyncThunk(
			async (data: EntryImageData, { getState }) => {
				const {
					generator: { url, isNew },
				} = getState() as { generator: GeneratorState };

				if (isNew || url === null) {
					throw new Error(url ? "Cannot put in a new user" : "No api url");
				}
				const response = await fetchUsers({
					url,
					method: "PUT",
					data: getImageServerData(data),
				});

				if (response.ok) {
					return response.json();
				} else if (response.status === 404) {
					throw new Error(response.statusText);
				}
			},
			{
				rejected: (state) => {
					state.isNew = true;
				},
				fulfilled: (state, action) => {
					state.recent.push(action.payload as ImageData);
					state.cachedRequests.push(action.payload.text);
				},
			}
		),
		deleteRecent: create.asyncThunk(
			async (id: string, { getState }) => {
				const {
					generator: { url, isNew },
				} = getState() as { generator: GeneratorState };

				if (isNew || url === null) {
					throw new Error(url ? "Cannot delete in a new user" : "No api url");
				}

				const response = await fetchUsers({ url, method: "DELETE", data: id });
				if (response.ok) {
					return response.json();
				} else if (response.status === 404) {
					throw new Error(response.statusText);
				}
			},
			{
				rejected: (state) => {
					state.isNew = true;
				},
				fulfilled: (state, action) => {
					state.recent = action.payload as RecentData;
				},
			}
		),
	}),
});

export const generatorActions = generatorSlice.actions;
export const generatorReducer = generatorSlice.reducer;

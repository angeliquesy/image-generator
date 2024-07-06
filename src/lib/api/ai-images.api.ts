import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AIImagesApi = createApi({
	reducerPath: "AIImagesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "/api/image-generator",
		prepareHeaders: async (headers) => {
			headers.set("Content-Type", "application/json");
			return headers;
		},
	}),
	endpoints: (build) => ({
		generateImage: build.query<string, string>({
			query: (text: string) => ({
				url: "/",
				method: "POST",
				body: JSON.stringify(text),
			}),
		}),
	}),
});

export const { useGenerateImageQuery } = AIImagesApi;

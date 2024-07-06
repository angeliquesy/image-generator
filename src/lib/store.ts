import { configureStore } from "@reduxjs/toolkit";
import { AIImagesApi } from "./api/ai-images.api";
import { generatorReducer } from "./api/generator.slice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			[AIImagesApi.reducerPath]: AIImagesApi.reducer,
			generator: generatorReducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ serializableCheck: false }).concat(AIImagesApi.middleware),
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

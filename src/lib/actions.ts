import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { generatorActions } from "./api/generator.slice";

const actions = {
	...generatorActions,
};

export function useActions() {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
}

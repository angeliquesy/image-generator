"use client";
import { ReactNode, useEffect } from "react";
import { useActions } from "@/lib/actions";

interface Props {
	children: ReactNode;
}

export default function Main({ children }: Props) {
	const { getUserId, getRecent } = useActions();

	useEffect(() => {
		getUserId();
		getRecent();
	}, []);

	return <main className="layout-container mt-header grow p-4 md:p-8">{children}</main>;
}

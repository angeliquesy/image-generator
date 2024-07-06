"use client";
import { useGenerateImageQuery } from "@/lib/api/ai-images.api";
import { useEffect, useState } from "react";
import { INPUT_TEXT_MIN_LENGTH } from "./constants";
import Form from "@/components/form";
import PageBackground from "@/components/page-background";
import ImageContainer from "@/components/image-container";
import { useActions } from "@/lib/actions";
import { useAppSelector } from "@/lib/hooks";

export default function Home() {
	const [value, setValue] = useState("");
	const [imageSrc, setImageSrc] = useState("");
	const { isFetching, isError, data } = useGenerateImageQuery(value, {
		skip: value.length < INPUT_TEXT_MIN_LENGTH,
	});
	const { isNew, cachedRequests } = useAppSelector(({ generator }) => generator);
	const { putRecent, postRecent } = useActions();

	useEffect(() => {
		if (!data) {
			return;
		}

		setImageSrc(`data:image/jpeg;base64,${data}`);
		const imageData = { text: value, image: data };

		if (cachedRequests.includes(value)) {
			return;
		}

		if (isNew) {
			postRecent(imageData);
		} else {
			putRecent(imageData);
		}
	}, [data]);

	function handleSubmit(text: string) {
		setImageSrc("");
		setValue(text);
	}

	return (
		<>
			{imageSrc && <PageBackground imageSrc={imageSrc} />}

			<div className="mx-auto flex min-h-full flex-col items-center justify-center">
				<Form isError={isError} isLoading={isFetching} isWhiteText={!!imageSrc} onSubmit={handleSubmit} />

				{!isError && <ImageContainer description={value} imageSrc={imageSrc} isLoading={isFetching} />}
			</div>
		</>
	);
}

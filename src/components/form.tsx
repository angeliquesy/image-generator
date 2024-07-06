import { useEffect, useRef, useState } from "react";
import Input from "./controls/input";
import { INPUT_TEXT_MIN_LENGTH } from "@/app/constants";
import { Button } from "./button";
import cn from "classnames";

interface Props {
	isError: boolean;
	onSubmit: (text: string) => void;
	isLoading: boolean;
	isWhiteText: boolean;
}

export default function Form({ isError, onSubmit, isLoading, isWhiteText }: Props) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isTooShort, setIsTooShort] = useState(false);
	const errorClasses = cn("mt-2 text-center", { "text-white": isWhiteText });

	useEffect(() => {
		const listener = (e: KeyboardEvent) => {
			if (e.code === "Enter" || e.code === "NumpadEnter") {
				e.preventDefault();
				handleSubmit();
			}
		};

		document.addEventListener("keydown", listener);

		return () => {
			document.removeEventListener("keydown", listener);
		};
	}, []);

	function handleSubmit() {
		const text = inputRef.current!.value;
		const isTextValid = text.length >= INPUT_TEXT_MIN_LENGTH;

		if (isTextValid) {
			onSubmit(text);
		}

		setIsTooShort(!isTextValid);
	}

	return (
		<div className="mb-5 w-full max-w-[560px] py-4">
			<form className="flex w-full max-w-[560px] justify-center" noValidate>
				<Input isDisabled={isLoading} placeholder="Enter image description" ref={inputRef} />
				<Button isDisabled={isLoading} onClick={handleSubmit} radius="rounded-r-md" title="Get image" />
			</form>

			{(isError || isTooShort) && (
				<p className={errorClasses}>
					{isError && <span className="text-red-600">An error occured. Please, try later</span>}
					{isTooShort && <>Please, provide a more detailed description</>}
				</p>
			)}
		</div>
	);
}

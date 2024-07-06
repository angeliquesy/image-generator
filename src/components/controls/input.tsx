import { ForwardedRef, forwardRef } from "react";

interface Props {
	placeholder?: string;
	isDisabled?: boolean;
}

const Input = forwardRef(({ placeholder, isDisabled }: Props, ref: ForwardedRef<HTMLInputElement>) => {
	return (
		<input
			className="h-[42px] w-full rounded-l-md border px-4 py-2 
			text-black outline-none transition focus:border-chartreuse"
			disabled={isDisabled}
			maxLength={300}
			placeholder={placeholder}
			ref={ref}
			type="text"
		/>
	);
});

export default Input;

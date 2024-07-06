import Image from "next/image";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "@/app/constants";

interface Props {
	imageSrc: string;
	description: string;
}

export default function ImageContent({ imageSrc, description }: Props) {
	return (
		<div className="group relative w-full shadow-[inset_0_0_1px] shadow-slate-500">
			<Image alt={description} className="w-full" height={IMAGE_HEIGHT} src={imageSrc} width={IMAGE_WIDTH} />
			<span
				className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 break-words rounded-t-lg
                    bg-black-rgba p-2 text-center text-white opacity-0 transition group-hover:opacity-100"
			>
				{description}
			</span>
		</div>
	);
}

import Image from "next/image";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "@/app/constants";

interface Props {
	imageSrc: string;
}

export default function PageBackground({ imageSrc }: Props) {
	return (
		<div className="fixed left-0 top-0 -z-10 h-screen w-screen bg-black">
			<Image
				alt="background"
				className="size-full opacity-70 blur-md"
				height={IMAGE_HEIGHT}
				src={imageSrc}
				width={IMAGE_WIDTH}
			/>
		</div>
	);
}

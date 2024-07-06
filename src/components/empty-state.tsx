interface Props {
	text: string;
}

export default function EmptyState({ text }: Props) {
	return <p className="whitespace-pre-line pt-10 text-center text-gray-500">{text}</p>;
}

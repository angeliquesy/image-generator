import Loader from "@/components/loader";

export default function Loading() {
	return (
		<div className="flex flex-col items-center justify-center pt-[10vh]">
			<Loader />
			<span className="mt-5 text-center">Loading, please wait...</span>
		</div>
	);
}

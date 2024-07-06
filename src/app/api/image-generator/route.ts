import { NextRequest } from "next/server";

const getData = (text: string) =>
	JSON.stringify({
		negative_prompt: "white",
		prompt: text,
		width: process.env.IMAGE_WIDTH,
		height: process.env.IMAGE_HEIGHT,
		hr_scale: process.env.IMAGE_SCALE,
	});

export async function POST(req: NextRequest) {
	const data = await req.json();
	const res = await fetch(process.env.API_URL!, {
		method: "POST",
		body: getData(data),
		headers: {
			"Content-Type": "application/json",
			[process.env.API_KEY_NAME!]: process.env.API_KEY_VALUE!,
			[process.env.API_HOST_NAME!]: process.env.API_HOST_VALUE!,
			httpOnly: "true",
		},
	});

	const response = await res.json();

	return Response.json(response);
}

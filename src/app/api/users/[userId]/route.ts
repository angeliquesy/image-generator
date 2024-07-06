import { NextRequest, NextResponse } from "next/server";
import { users } from "./data";

export async function GET(_req: NextRequest, { params }: { params: { userId: string } }) {
	const user = users.find((user) => user.id === params.userId);

	if (!user) {
		return new NextResponse("User not found", { status: 404 });
	}

	return NextResponse.json(user.images);
}

export async function POST(req: NextRequest, { params }: { params: { userId: string } }) {
	const data = await req.json();
	const user = users.find((user) => user.id === params.userId);

	if (user) {
		return new NextResponse("User already exists", { status: 409 });
	}

	const newUser = {
		id: params.userId,
		images: [data],
	};

	users.push(newUser);
	return NextResponse.json(data);
}

export async function PUT(req: NextRequest, { params }: { params: { userId: string } }) {
	const data = await req.json();
	const user = users.find((user) => user.id === params.userId);

	if (!user) {
		return new NextResponse("User not found", { status: 404 });
	}

	if (user.images.length === 7) {
		user.images.shift();
	}

	user.images.push(data);
	return NextResponse.json(data);
}

export async function DELETE(req: NextRequest, { params }: { params: { userId: string } }) {
	const imageId = await req.json();
	const user = users.find((user) => user.id === params.userId);

	if (!user) {
		return new NextResponse("User not found", { status: 404 });
	}

	user.images = user.images.filter(({ id }) => imageId !== id);
	return NextResponse.json(user.images);
}

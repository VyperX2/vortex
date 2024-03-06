import { connectToDB } from "@/lib/database";
import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		await connectToDB();
		const people = await User.find();

		return NextResponse.json(people, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json("NOT FOUND", { status: 500 });
	}
};

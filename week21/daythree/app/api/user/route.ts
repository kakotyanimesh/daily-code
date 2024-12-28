import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const userData = await getServerSession()

    return NextResponse.json({
        user : userData?.user?.email
    })
}
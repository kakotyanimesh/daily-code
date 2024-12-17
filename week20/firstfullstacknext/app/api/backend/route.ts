import { NextRequest, NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        name : 'backemd in next js',
        details : 'im learning next js wow'
    })
}

export async function POST(req : NextRequest){
    const data = await req.json()

    return NextResponse.json({
        name : data.username,
        email : data.email
    })

}
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    return Response.json({title : 'go to gym', done : true})
}

export async function POST(req: NextRequest){
    const body = await req.json()

    return NextResponse.json({username : body.username, password : body.password})
}


//  we dont export the function defaultly => in nextjs backend dont use the word default rather export the function constantly 
/*
    syntax => export function GET/PUT/POST/PATCH etc 
*/

// defference b/w default export and constant export 
/**
 * in default export => import functionname from 'src'
 * in constant export => import {function name}  from 'src'
 
 * in next js backend as we use the file base routing so because of that we dont defaultly export the function as it would create confusion among nextjs  
 */
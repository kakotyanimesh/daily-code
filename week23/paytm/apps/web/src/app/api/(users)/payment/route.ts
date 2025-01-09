import prisma from "@repo/db";
import { TransctionSchema } from "@repo/zod";
import { NextRequest, NextResponse } from "next/server";

type ErroRespnse = {
    msg : string,
    err ?: unknown
}

type successResponse = {
    msg : string,
    trans : {
        amount : number,
        senderName : string,
        receiverName : string
    },
    err ?: unknown
}

export async function POST(req : NextRequest) {
    const parsedObject = TransctionSchema.safeParse(await req.json())

    if(!parsedObject.success){
        return NextResponse.json<ErroRespnse>(
            {msg : `zod err ${parsedObject.error.errors}`},
            {status : 400}
        )
    }

    const {senderUsername, amount, receiverUsername } = parsedObject.data

    try {
        const res = await TransctionMethod({senderUsername, amount, receiverUsername})

        return NextResponse.json<successResponse>(
            {msg : "transcation completed", trans : res}
        )
    } catch (error) {
        return NextResponse.json({msg : `error : ${error}`})
    }
}


type TransctionMethodProps = {
    senderUsername : string,
    amount : number
    receiverUsername : string

}

const TransctionMethod = async ({senderUsername, amount, receiverUsername} : TransctionMethodProps) => {
    try {
        const transcationss = await prisma.$transaction(async (tx) => {
            const sender = await tx.account.update({
                data : {
                    balance : {
                        decrement : amount
                    }
                }, where : {
                    username : senderUsername
                }
            })

            if(sender.balance < 0) {
                throw new Error("insufficient balance bro ")
            }

            const receiver = await tx.account.update({
                data : {
                    balance : {
                        increment : amount
                    }
                }, where : {
                    username : receiverUsername
                }
            })

            const transctionDetails = await tx.transcationData.create({
                data : {
                    amount : amount,
                    senderName : senderUsername,
                    receiverName : receiverUsername,
                    status : "completed"
                }
            })
            return transctionDetails
        })

        return transcationss
    } catch (error) {
        throw error
    }
}
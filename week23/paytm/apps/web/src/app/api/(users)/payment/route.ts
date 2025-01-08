import prisma from "@repo/db";
import { TransctionSchema } from "@repo/zod";
import { NextRequest, NextResponse } from "next/server";


type TransctionMessage = {
    msg : string,
    transcation ? : [
        id : number,
        amount : number,
        sendername : string,
        receivername : string,
        time : Date
    ],
    err ? : unknown
}


export async function POST(req : NextRequest) {
    const parsedObject = TransctionSchema.safeParse(await req.json())

    if(!parsedObject.success){
        return NextResponse.json({
            err : `error : ${parsedObject.error.errors}`
        }, {status : 400})
    }

    const {senderId, amount, receiverId } = parsedObject.data

    // no transer to same user 

    if(senderId === receiverId) {
        return NextResponse.json(
            {msg : "bro same id dont scam us"},
            {status : 404}
        )
    }

    try {

        const res = await transcationFunction({senderId, amount, receiverId})

        return NextResponse.json(
            {msg : "transcation completd ", res : res},
            {status : 200}
        )
    } catch (error) {
        return NextResponse.json({msg : 'error in server ', err : process.env.NODE_ENV === "development" ? error : undefined}, {status : 500})
    }
}

type transcationFunctionType = {
    senderId : number,
    amount : number,
    receiverId : number
}

const transcationFunction = async ({senderId, amount, receiverId} : transcationFunctionType) => {
    try {
        const response = await prisma.$transaction(async (tx) => {
            const sender = await tx.account.update({
                data : {
                    balance : {
                        decrement : amount
                    }
                }, where : {
                    userId : senderId
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
                    userId : receiverId
                }
            })


            // database entry of transcation 
            
            const transcationData = await prisma.tranction.create({
                data : {
                    senderId : sender.id,
                    amount : amount,
                    receiverId : receiver.id,
                    status : "Completed"
                }
            })

            return transcationData
        })


        return response
    } catch (error) {
        throw error
    }
}
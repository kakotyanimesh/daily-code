import prisma from "@repo/db";
import { TranscationObject } from "@repo/zod";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest){
    const parsedObject = TranscationObject.safeParse(await req.json())


    if(!parsedObject.success){
        return NextResponse.json({
            msg : `error zod ${parsedObject.error.errors}`
        }, {status : 409})
    }

    const {senderName, amount, receiverName} = parsedObject.data
    try {
        const res = await paymentMethod({senderName, amount, receiverName})

        return NextResponse.json(
            res
        )
    } catch (error) {
        return NextResponse.json(
            { msg : 'err in transction ig or server dead b;a b;a ;a ' + error}
        )
    }
}  


type PaymentProps = {
    senderName : string,
    amount : number,
    receiverName : string
}


const paymentMethod = async ({senderName, amount, receiverName} : PaymentProps) => {

    try {
        const result = await prisma.$transaction(async (tx) => {
            const sender = await tx.account.update({
                data : {
                    balance : {
                        decrement : amount
                    }
                }, where : {
                    accountHolder : senderName
                }
            })
    
            if(sender.balance < 0){
                throw new Error('insufficient balance')
            }
    
            const receive = await tx.account.update({
                data : {
                    balance : {
                        increment : amount
                    }
                }, where : {
                    accountHolder : receiverName 
                }
            })
    
            const transcationData = tx.transactionData.create({
                data : {
                    senderName : sender.accountHolder,
                    receiverName : receive.accountHolder,
                    amount : amount,    
                }
            })
    
            return transcationData
        })

        return result
    } catch (error) {
        throw new Error('error in payment')
    }

}
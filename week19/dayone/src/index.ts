import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

const createUser = async () => {
    await client.user.create({
        data : {
            username : "animsh",
            password : "asdasdasd",
            email : "adadasdasd"
        }
    })
}

createUser()
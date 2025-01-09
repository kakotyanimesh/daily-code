import { number, string, z } from "zod"

export const userObject = z.object({
  username : z.string().max(20, {message : "max 20"}),
  password : z.string().max(30, {message : "max 30 is allowed"})
})


export const TransctionSchema = z.object({
  senderUsername : z.string(),
  amount : z.number().positive(),
  receiverUsername : z.string()
})
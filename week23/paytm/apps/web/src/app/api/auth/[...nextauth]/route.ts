import NextAuth from "next-auth";
import { authOpitons } from "../../../../lib/auth";

const handler = NextAuth(authOpitons)

export { handler as GET, handler as POST}
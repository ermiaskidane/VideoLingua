import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { client } from "./prisma"
 
export const auth = betterAuth({
  database: prismaAdapter(client, {
    provider: 'postgresql'
  }),
  socialProviders: { 
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID as string, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
  }, 
  facebook: { 
    clientId: process.env.FACEBOOK_CLIENT_ID as string, 
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string, 
}, 
 }, 
})
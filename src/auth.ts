import NextAuth, { customFetch } from "next-auth";
// import { authConfig } from "./auth.config";
import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import GithubProvider from "next-auth/providers/github";
import dbConnect from "@/lib/mongoose";
import User from "@/models/User";
import { ProxyAgent, fetch as undici } from "undici";
// const dispatcher = new ProxyAgent({
//   uri: process.env.NEXTAUTH_URL_INTERNAL as string,
// });
// function proxy(...args: Parameters<typeof fetch>): ReturnType<typeof fetch> {
//   return undici(args[0], { ...(args[1] ?? {}), dispatcher });
// }
export const { handlers, signIn, signOut, auth } = NextAuth(
  {
    trustHost: true,

    providers: [
      GithubProvider,
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

        //redirectProxyUrl: process.env.NEXTAUTH_URL_INTERNAL as string,
        //[customFetch]: proxy,
      }),
      AppleProvider({
        clientId: process.env.APPLE_ID as string,
        clientSecret: process.env.APPLE_SECRET as string,
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET as string,
    // debug: true,
    callbacks: {
      async jwt({ token, user, account }) {
        if (account && user) {
          token.accessToken = account.access_token;
          token.id = user.id;
        }
        return token;
      },

      async signIn({ user, account }) {
        //console.log("OAuth请求目标URL:", user, account);
        return true;
        // await dbConnect();

        // // Extract user info from provider data
        // const { id, email, name } = user;
        // // const provider = account?.provider;

        // // Check if user exists
        // let existingUser = await User.findOne({ userId: id });

        // if (!existingUser) {
        //     // For new users, prompt them to fill additional info on first login
        //     // Store minimal info and redirect to complete profile
        //     return `/auth/complete-profile?id=${id}&email=${email}&provider=${provider}`;
        // }
      },
      async session({ session, token }) {
        if (token && session.user) {
          // 扩展 session.user 类型以包含 id 属性
          (session.user as any) = {
            ...session.user,
            id: token.sub,
            userId: session.user.email, //用谷歌邮箱做用户唯一id
          };
        }
        //console.log("session", session);
        return session;
      },
    },
    pages: {
      error: "/error",
      // signIn: '/auth/login',
    },
  } satisfies NextAuthConfig
  //   (req) => {
  //     //   if (req) {
  //     //   console.log(req) // do something with the request
  //     //    }
  //     return { ...authConfig };
  //   }
);

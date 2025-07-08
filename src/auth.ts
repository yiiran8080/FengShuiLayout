import NextAuth, { customFetch } from "next-auth";
import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import GithubProvider from "next-auth/providers/github";
import dbConnect from "@/lib/mongoose";
import User from "@/models/User";
import { createUserIfNotExists } from "@/lib/userUtils";

export const { handlers, signIn, signOut, auth } = NextAuth({
	trustHost: true,
	providers: [
		GithubProvider,
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		AppleProvider({
			clientId: process.env.APPLE_ID as string,
			clientSecret: {
				appleId: process.env.APPLE_ID as string,
				teamId: process.env.APPLE_TEAM_ID as string,
				privateKey: process.env.APPLE_SECRET as string,
				keyId: process.env.APPLE_KEY_ID as string,
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET as string,
	callbacks: {
		async signIn({ user, account, profile }) {
			try {
				const userId = user.email;
				if (!userId) return false;

				await createUserIfNotExists(userId, user.email);
				return true;
			} catch (error) {
				console.error("Error in signIn callback:", error);
				return false;
			}
		},
		async jwt({ token, user, account }) {
			if (account && user) {
				token.accessToken = account.access_token;
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token }) {
			if (token && session.user) {
				(session.user as any) = {
					...session.user,
					id: token.sub,
					userId: session.user.email, // using Google email as unique userId
				};
			}
			return session;
		},
	},
	pages: {
		// error: "/error",
		// signIn: '/auth/login',
	},
} satisfies NextAuthConfig);

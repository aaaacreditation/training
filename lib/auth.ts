import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.log("Auth failed: Missing credentials");
            return null;
          }

          console.log(`Attempting login for: ${credentials.email}`);
          const user = await prisma.user.findUnique({
            where: { email: credentials.email as string },
          });

          if (!user) {
            console.log("Auth failed: User not found in DB");
            return null;
          }

          const isValid = await bcrypt.compare(
            credentials.password as string,
            user.password
          );

          if (!isValid) {
            console.log("Auth failed: Invalid password");
            return null;
          }

          console.log("Auth successful!");
          return { id: user.id, email: user.email, name: user.name };
        } catch (error) {
          console.error("Auth Exception:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});

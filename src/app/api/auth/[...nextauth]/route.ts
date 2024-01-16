import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github";

const clientId = process.env.GITHUB_CLIENT!;
//const clientSecret = process.env.GITHUB_CLIENT!;

export const authOption = {
  providers: [
    githubAuth({
      clientId: clientId,
      clientSecret: process.env.GITHUB_CLIENT!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };

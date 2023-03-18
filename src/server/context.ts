import { type inferAsyncReturnType } from "@trpc/server";
import type * as trpcNext from "@trpc/server/adapters/next";
import prisma from "@lib/prisma";
import { getCookie } from "cookies-next";
// import { type DecodedIdToken } from "firebase-admin/auth";

interface Session {
  // user: DecodedIdToken;
}

export const createContext = async (
  opts: trpcNext.CreateNextContextOptions
) => {
  const { req, res } = opts;

  const session = {};

  return {
    prisma,
    req,
    res,
    session: session as Session,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;

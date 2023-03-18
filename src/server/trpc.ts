// import { auth } from "@lib/f-admin";
import { TRPCError, initTRPC } from "@trpc/server";
import { getCookie } from "cookies-next";
import { type Context } from "./context";

const t = initTRPC.context<Context>().create();

const enforceUserIsAuthed = t.middleware(async ({ ctx, next, rawInput }) => {
  // const { idToken } = rawInput as { idToken?: string };
  // const user = idToken ? await auth.verifyIdToken(idToken) : null;
  const user = null;
  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user },
    },
  });
});

export const mergeRouters = t.mergeRouters;

export const router = t.router;

export const procedure = t.procedure;

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);

import { z } from "zod";
import { UserSchema } from "../schema";
import { procedure, protectedProcedure, router } from "../trpc";

export const cartRouter = router({
  user: procedure
    .input(z.object({ customerId: z.string().optional() }))
    .query(async ({ input, ctx }) => {
      // const customerId = ctx.session.user.uid;
      const { customerId } = input;
      return await ctx.prisma.customer.findFirst({});
    }),
});

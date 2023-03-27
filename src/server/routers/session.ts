import { z } from "zod";
import { UserSchema } from "../schema";
import { procedure, router } from "../trpc";

export const sessionRouter = router({
  login: procedure.input(z.object({})).query(async ({ input, ctx }) => {
    const {} = input;
    const user = await ctx.prisma.customer.findFirst({});
    return user;
  }),
  logout: procedure
    .input(
      z.object({
        customerId: z.string(),
        data: UserSchema.partial(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { customerId, data } = input;
      const updatedResponse = await ctx.prisma.customer.updateMany({
        data,
      });
    }),
  // login: procedure.input(z.object({})).query(async ({ input, ctx }) => {
  //   const {} = input;
  //   const user = await ctx.prisma.customer.findFirst({});
  //   return user;
  // }),
});

import { z } from "zod";
import { UserSchema } from "../schema";
import { procedure, router } from "../trpc";

export const customerRouter = router({
  one: procedure.input(z.object({})).query(async ({ input, ctx }) => {
    const {} = input;
    const user = await ctx.prisma.customer.findFirst({});
    return user;
  }),
  update: procedure
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
});

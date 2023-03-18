import { z } from "zod";
import { UserSchema } from "../schema";
import { procedure, protectedProcedure, router } from "../trpc";

export const cartRouter = router({
  user: procedure
    .input(z.object({ customerId: z.string().optional() }))
    .query(async ({ input, ctx }) => {
      // const customerId = ctx.session.user.uid;
      const { customerId } = input;
      return await ctx.prisma.cart.findFirst({
        where: { customerId },
      });
    }),
  modify: procedure
    .input(
      z.object({
        customerId: z.string().optional(),
        data: z.object({
          otype: z.enum(["quantity", "removeOne", "removeAll", "add"]),
          id: z.string().optional(),
          quantity: z.number().optional(),
          item: z.object({ id: z.string(), quantity: z.number() }).optional(),
        }),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { customerId, data } = input;
      const prevCart = await ctx.prisma.cart.findFirst({
        where: { customerId },
      });
      switch (data.otype) {
        case "quantity":
          return await ctx.prisma.cart.update({
            where: { id: prevCart?.id },
            data: {
              items: {
                updateMany: {
                  where: { id: data.id },
                  data: { quantity: data.quantity },
                },
              },
            },
          });
        case "removeOne":
          return await ctx.prisma.cart.update({
            where: { id: prevCart?.id },
            data: { items: { deleteMany: { where: { id: data.id } } } },
          });
        case "removeAll":
          return await ctx.prisma.cart.update({
            where: { id: prevCart?.id },
            data: { items: { set: [] } },
          });
        case "add": {
          if (!customerId || !data.item) return null;
          const alreadyInCart = prevCart?.items.some(
            (item) => item.id === data.item?.id
          );
          if (!prevCart) {
            return await ctx.prisma.cart.create({
              data: { items: { set: data.item }, customerId },
            });
          } else
            return await ctx.prisma.cart.update({
              where: { id: prevCart?.id },
              data: {
                items: !alreadyInCart
                  ? { push: data.item }
                  : {
                      updateMany: {
                        where: { id: data.item.id },
                        data: { quantity: { increment: 1 } },
                      },
                    },
              },
            });
        }
      }
    }),
});

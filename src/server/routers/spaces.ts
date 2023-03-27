import { workspaces } from "@lib/data";
import { z } from "zod";
import { procedure, router } from "../trpc";

export const spacesRouter = router({
  one: procedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ input, ctx }) => {
      const { id } = input;
      // return await ctx.prisma.space.findFirst({ where: { id } });
      return workspaces.find((space) => space.id === id);
    }),
  many: procedure.input(z.object({})).query(async ({ input, ctx }) => {
    const {} = input;
    // return await ctx.prisma.space.findMany({});
    return workspaces;
  }),
});

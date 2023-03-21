import { router } from "../trpc";
import { cartRouter } from "./cart";
import { customerRouter } from "./customer";

export const appRouter = router({
  customer: customerRouter,
  // center: itemRouter,
});

export type AppRouter = typeof appRouter;

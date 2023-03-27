import { router } from "../trpc";
import { spacesRouter } from "./spaces";
import { customerRouter } from "./customer";
import { sessionRouter } from "./session";

export const appRouter = router({
  customer: customerRouter,
  space: spacesRouter,
  session: sessionRouter,
});

export type AppRouter = typeof appRouter;

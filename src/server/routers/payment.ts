import { z } from "zod";
import { procedure, router } from "../trpc";
const Flutterwave = require("flutterwave-node-v3");
import type { TxtVerifyResPonse } from "types/payment";

const flw = new Flutterwave(
  "process.env.FLW_PUBLIC_KEY",
  "process.env.FLW_SECRET_KEY"
);

const verifyTxt = async ({
  id,
  expectedAmount,
  expectedCurrency,
}: {
  id: string;
  expectedAmount: number;
  expectedCurrency: string;
}) => {
  try {
    const response: TxtVerifyResPonse = await flw.Transaction.verify({
      id: "",
    });
    console.log(response);
    return response;
    if (
      response.data.status === "successful" &&
      response.data.amount === expectedAmount &&
      response.data.currency === expectedCurrency
    ) {
      // Success! Confirm the customer's payment
    } else {
      // Inform the customer their payment was unsuccessful
    }
  } catch (err) {
    throw err;
  }
};

export const paymentRouter = router({
  verify: procedure
    .input(
      z.object({
        id: z.string(),
        expectedAmount: z.number(),
        expectedCurrency: z.enum(["NGN"]),
      })
    )
    .query(async ({ input, ctx }) => {
      const res = verifyTxt(input);
      return "";
      //   return await ctx.prisma.orders.findMany({ where: { customerId } });
    }),
});

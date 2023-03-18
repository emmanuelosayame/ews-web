import { updateProductMeta } from "@lib/helpers";
import sum from "lodash/sum";
import { nanoid } from "nanoid";
import { z } from "zod";
import { ShippingDetailsSchema } from "../schema";
import { procedure, router } from "../trpc";
// import SIB from "sib-api-v3-sdk";

// const client = SIB.ApiClient.instance;

// let apiKey = client.authentications["api-key"];
// apiKey.apiKey = "YOUR API KEY";

// const apiInstance = new SIB.SMTPApi();

// const sendinblue = (sendSmtpEmail: any) => {
//   apiInstance.sendTransacEmail(sendSmtpEmail).then(
//     function (data) {
//       return true;
//     },
//     function (error) {
//       console.error(error);
//       return false;
//     }
//   );
// };

// const sendSmtpEmail = {
//   to: [
//     {
//       email: "youremail@youremail.com",
//     },
//   ],
//   templateId: 1,
//   params: {
//     name: "Malith",
//     subject: "Someone sent you a link",
//     text: "msg",
//   },
// };

export const orderRouter = router({
  checkout: procedure
    .input(
      z.object({
        checkoutItems: z.array(
          z.object({ id: z.string(), quantity: z.number() })
        ),
        shipping: z.enum(["pickup", "delivery"]),
      })
    )
    .query(async ({ input, ctx }) => {
      const { checkoutItems, shipping } = input;
      const metadata = await ctx.prisma.product.findMany({
        where: { id: { in: checkoutItems.map((item) => item.id) } },
        select: {
          id: true,
          price: true,
          title: true,
          description: true,
          thumbnail: true,
        },
      });
      const updatedItems = updateProductMeta(checkoutItems, metadata);

      const shippingPrice = shipping === "delivery" ? 3000 : 0;
      const subTotal = sum(
        updatedItems.map((item) => item.price * item.quantity)
      );
      const total = subTotal + shippingPrice;
      return { items: updatedItems, subTotal, total };
    }),
  place: procedure
    .input(
      z.object({
        customerId: z.string().optional(),
        shippingDetails: ShippingDetailsSchema.omit({
          id: true,
          default: true,
        }),
        checkoutItems: z.array(
          z.object({ id: z.string(), quantity: z.number() })
        ),
        shippingType: z.enum(["pickup", "delivery"]),
        paymentMethod: z.enum(["card", "bank-transfer"]),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const {
        customerId,
        checkoutItems,
        shippingType,
        paymentMethod,
        shippingDetails,
      } = input;
      const metadata = await ctx.prisma.product.findMany({
        where: { id: { in: checkoutItems.map((item) => item.id) } },
        select: {
          id: true,
          price: true,
          title: true,
          description: true,
          brand: true,
          discountPercentage: true,
          thumbnail: true,
        },
      });
      const updatedItems = updateProductMeta(checkoutItems, metadata);

      const shippingPrice = shippingType === "delivery" ? 3000 : 0;
      const subTotal = sum(
        updatedItems.map((item) => item.price * item.quantity)
      );
      const total = subTotal + shippingPrice;
      const orderId = nanoid();
      // const tx_ref = nanoid();
      // const config = {
      //   tx_ref,
      //   amount: 0,
      //   currency: "NGN",
      //   redirect_url: "",
      //   customer: { email: "", name: "", phonenumber: "" },
      // };
      const createdOrder = await ctx.prisma.order.create({
        data: {
          orderId,
          payment: { method: paymentMethod },
          shipping_option: { price: shippingPrice, type: shippingType },
          shipping_details: shippingDetails,
          customerId,
          items: updatedItems,
          subTotal,
          total,
          txRef: "",
        },
      });
      return { orderId: createdOrder.orderId };
      const x = "";
    }),
  one: procedure
    .input(z.object({ orderId: z.string().optional() }))
    .query(async ({ input, ctx }) => {
      const { orderId } = input;
      return await ctx.prisma.order.findFirst({ where: { orderId } });
    }),
  many: procedure
    .input(z.object({ customerId: z.string().optional() }))
    .query(async ({ input, ctx }) => {
      const { customerId } = input;
      return await ctx.prisma.order.findMany({ where: { customerId } });
    }),
  update: procedure
    .input(
      z.object({
        orderId: z.string().optional(),
        status: z.enum([
          "pending",
          "successful",
          "failed",
          "cancelled",
          "closedPay",
        ]),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.order.updateMany({
        where: { orderId: input.orderId },
        data: { status: input.status },
      });
    }),
});

import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { PaymentEvent } from "t/payment";
const secret = process.env.PAYSTACK_SECRET_KEY || "";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const hash = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(req.body))
    .digest("hex");
  if (hash == req.headers["x-paystack-signature"]) {
    // Retrieve the request's body
    const event: PaymentEvent = req.body;
    // Do something with event
  }

  res.status(200).json({ name: "John Doe" });
}

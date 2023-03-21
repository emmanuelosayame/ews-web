export interface PaymentEvent {
  event: "paymentrequest.success" | "paymentrequest.pending";
  data: {
    id: number;
    domain: string;
    amount: number;
    currency: "NGN";
    due_date: string | null;
    has_invoice: boolean;
    invoice_number: string | null;
    description: string;
    pdf_url: string | null;
    line_items: [];
    tax: [];
    request_code: string;
    status: string;
    paid: boolean;
    paid_at: string;
    metadata: string | null;
    notifications: [
      {
        sent_at: string;
        channel: string;
      }
    ];
    offline_reference: string;
    customer: number;
    created_at: string;
  };
}

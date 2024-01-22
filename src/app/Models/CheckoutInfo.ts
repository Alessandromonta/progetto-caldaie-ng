export class CheckoutInfo {
  line_items: {
    price_data: {
      unit_amount: number,
      currency: string,
      product_data: {
        name: string
      }
    },
    quantity: number
  }[];
  cancel_url: string;
  allow_promotion_codes: boolean;
  customerEmail: string;
  mode: string;
  success_url: string;
  payment_method_types: string[];
}

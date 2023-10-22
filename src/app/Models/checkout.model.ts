export class PaymentInformation {
  line_items: { [key: number]: LineItem };
  cancel_url: string;
  allow_promotion_codes: boolean;
  customerEmail: string;
  mode: string;
  success_url: string;
  payment_method_types: string[];
}

export class LineItem {
  price_data: PriceData;
  quantity: number;
}

export class PriceData {
  unit_amount: number;
  currency: string;
  product_data: ProductData;
}

export class ProductData {
  name: string;
}

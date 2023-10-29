// payment-information.model.ts
export class PaymentInformation {
  line_items: LineItem[];
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

// price-data.model.ts
export class PriceData {
  unit_amount: number;
  currency: string;
  product_data: ProductData;
}

// product-data.model.ts
export class ProductData {
  name: string;
}



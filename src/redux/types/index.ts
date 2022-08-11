export interface ApiProduct {
  id: string;
  price: number;
  image: string;
  title: string;
  category: string;
  description: string;

  weight: number;
  energy: number;

  type: string;
  size: string;

  additionalVariants: ApiProductVariant[];
}

export type ApiProductVariant = Pick<
  ApiProduct,
  'size' | 'type' | 'id' | 'weight' | 'energy' | 'price'
>;

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  shopeeLink: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Katarina Embroidery Shirt',
    description: 'Minimalist shirt with special embroidery details.',
    price: 'Rp129.000',
    image:
      'https://images.pexels.com/photos/22441297/pexels-photo-22441297.jpeg?auto=compress&cs=tinysrgb&h=900',
    category: 'Tops',
    shopeeLink: 'https://shopee.co.id/',
  },
  {
    id: 2,
    name: 'Daily Minimalist Blouse',
    description: 'Elegant Korean-inspired blouse for daily style.',
    price: 'Rp149.000',
    image:
      'https://images.pexels.com/photos/7945547/pexels-photo-7945547.jpeg?auto=compress&cs=tinysrgb&h=900',
    category: 'Tops',
    shopeeLink: 'https://shopee.co.id/',
  },
  {
    id: 3,
    name: 'Soft Cotton Outer',
    description: 'Comfortable minimalist outerwear.',
    price: 'Rp179.000',
    image:
      'https://images.pexels.com/photos/9603628/pexels-photo-9603628.jpeg?auto=compress&cs=tinysrgb&h=900',
    category: 'Outerwear',
    shopeeLink: 'https://shopee.co.id/',
  },
  {
    id: 4,
    name: 'Neutral Knit Cardigan',
    description: 'Soft knit cardigan in warm neutral tones.',
    price: 'Rp159.000',
    image:
      'https://images.pexels.com/photos/4641824/pexels-photo-4641824.jpeg?auto=compress&cs=tinysrgb&h=900',
    category: 'Outerwear',
    shopeeLink: 'https://shopee.co.id/',
  },
  {
    id: 5,
    name: 'Linen Everyday Shirt',
    description: 'Breathable linen shirt for effortless daily wear.',
    price: 'Rp139.000',
    image:
      'https://images.pexels.com/photos/6373455/pexels-photo-6373455.jpeg?auto=compress&cs=tinysrgb&h=900',
    category: 'Tops',
    shopeeLink: 'https://shopee.co.id/',
  },
  {
    id: 6,
    name: 'Beige Tailored Coat',
    description: 'Refined tailored coat with a calm minimalist silhouette.',
    price: 'Rp199.000',
    image:
      'https://images.pexels.com/photos/4456728/pexels-photo-4456728.jpeg?auto=compress&cs=tinysrgb&h=900',
    category: 'Outerwear',
    shopeeLink: 'https://shopee.co.id/',
  },
];

export const categories = ['All', 'Tops', 'Outerwear'];

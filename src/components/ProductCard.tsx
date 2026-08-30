import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-primary-100">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[3/4] w-full object-cover transition-transform duration-[1.2s] ease-elegant group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-dark/0 transition-colors duration-500 group-hover:bg-dark/5" />
        </div>
      </Link>

      <div className="mt-5 flex flex-col gap-1">
        <p className="text-[10px] uppercase tracking-editorial text-secondary">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-heading text-lg tracking-wide text-dark transition-colors duration-500 hover:text-secondary">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-light text-dark/60">{product.description}</p>
        <p className="mt-2 text-sm font-normal text-dark">{product.price}</p>

        <a
          href={product.shopeeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-2 border border-dark/15 px-5 py-2.5 text-[10px] uppercase tracking-editorial text-dark transition-all duration-500 ease-elegant hover:border-secondary hover:bg-secondary hover:text-primary"
        >
          <ShoppingBag size={13} /> Buy on Shopee
        </a>
      </div>
    </motion.article>
  );
}

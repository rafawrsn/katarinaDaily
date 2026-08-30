import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { getProductById, type Product } from '@/services/catalogService';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id ?? '').then((p) => {
      setProduct(p);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-primary pt-24">
        <p className="text-sm font-light tracking-wide text-dark/50">Loading…</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-primary pt-24">
        <p className="font-heading text-2xl text-dark">Product not found</p>
        <Link
          to="/shop"
          className="text-[11px] uppercase tracking-editorial text-secondary transition-colors hover:text-secondary-700"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-primary pt-28 lg:pt-36 pb-24 lg:pb-32">
      <div className="container-editorial">
        <Link
          to="/shop"
          className="mb-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-editorial text-dark/60 transition-colors hover:text-secondary"
        >
          <ArrowLeft size={14} /> Back to shop
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden bg-primary-100">
              <img
                src={product.image}
                alt={product.name}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[11px] uppercase tracking-editorial text-secondary mb-5">
              {product.category}
            </p>
            <h1 className="font-heading text-3xl leading-snug text-dark sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-6 text-2xl font-light text-dark">{product.price}</p>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-dark/70">
              {product.description}
            </p>
            <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-dark/55">
              Self-manufactured with special embroidery details. Designed for everyday wear with a
              calm, minimalist Korean aesthetic.
            </p>

            <a
              href={product.shopeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-fit items-center gap-3 bg-secondary px-10 py-4 text-[11px] uppercase tracking-editorial text-primary transition-all duration-500 ease-elegant hover:bg-secondary-600"
            >
              <ShoppingBag size={15} /> Buy on Shopee
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

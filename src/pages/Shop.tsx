import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ProductGrid } from '@/components/ProductGrid';
import { Reveal } from '@/components/Reveal';
import { getProducts, getCategories, type Product } from '@/services/catalogService';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [active, setActive] = useState('All');

  useEffect(() => {
    getProducts().then(setProducts);
    getCategories().then(setCategories);
  }, []);

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <div className="bg-primary pt-32 lg:pt-40 pb-24 lg:pb-32">
      <div className="container-editorial">
        <Reveal className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-editorial text-secondary mb-5">Shop</p>
          <h1 className="font-heading text-4xl text-dark sm:text-5xl">The Collection</h1>
          <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-dark/65">
            Minimalist pieces with special embroidery — designed and self-manufactured for your daily
            style.
          </p>
        </Reveal>

        <div className="mb-14 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 text-[11px] uppercase tracking-editorial transition-all duration-500 ease-elegant ${
                active === cat
                  ? 'bg-secondary text-primary'
                  : 'border border-dark/15 text-dark hover:border-secondary hover:text-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProductGrid products={filtered} />
        </motion.div>
      </div>
    </div>
  );
}

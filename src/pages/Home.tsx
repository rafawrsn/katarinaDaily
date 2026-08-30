import { useEffect, useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ProductGrid } from '@/components/ProductGrid';
import { BrandStory } from '@/components/BrandStory';
import { FeatureSection } from '@/components/FeatureSection';
import { GallerySection } from '@/components/GallerySection';
import { Reveal } from '@/components/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getProducts, type Product } from '@/services/catalogService';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <HeroSection />

      <section id="featured-collection" className="bg-primary py-24 lg:py-32">
        <div className="container-editorial">
          <Reveal className="mb-16 flex flex-col items-center text-center">
            <p className="text-[11px] uppercase tracking-editorial text-secondary mb-5">
              Featured Collection
            </p>
            <h2 className="font-heading text-3xl text-dark sm:text-4xl lg:text-5xl">
              Everyday minimalist essentials
            </h2>
          </Reveal>

          <ProductGrid products={products.slice(0, 3)} />

          <Reveal delay={0.1} className="mt-16 flex justify-center">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-editorial text-dark transition-colors duration-500 hover:text-secondary"
            >
              View All Products
              <ArrowRight
                size={14}
                className="transition-transform duration-500 ease-elegant group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      <BrandStory />
      <FeatureSection />
      <GallerySection />
    </>
  );
}

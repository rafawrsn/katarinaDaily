import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById('featured-collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-primary pt-32 lg:pt-40">
      <div className="container-editorial grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 pb-24 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="order-2 lg:order-1"
        >
          <p className="text-[11px] uppercase tracking-editorial text-secondary mb-6">
            Korean Minimalist · Embroidery Design
          </p>
          <h1 className="font-heading text-4xl leading-[1.15] tracking-tight text-dark sm:text-5xl lg:text-6xl text-balance">
            Special Design Minimalist Outfit
          </h1>
          <p className="mt-8 max-w-md text-base font-light leading-relaxed text-dark/70">
            Korean minimalist fashion with special embroidery details, self-manufactured for your
            everyday style at an affordable price.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={scrollToProducts}
              className="group inline-flex items-center justify-center gap-3 bg-secondary px-8 py-4 text-[11px] uppercase tracking-editorial text-primary transition-all duration-500 ease-elegant hover:bg-secondary-600"
            >
              Shop Collection
              <ArrowRight
                size={14}
                className="transition-transform duration-500 ease-elegant group-hover:translate-x-1"
              />
            </button>
            <Link
              to="/about"
              className="group inline-flex items-center justify-center gap-3 border border-dark/20 px-8 py-4 text-[11px] uppercase tracking-editorial text-dark transition-all duration-500 ease-elegant hover:border-secondary hover:text-secondary"
            >
              Discover Our Story
              <ArrowRight
                size={14}
                className="transition-transform duration-500 ease-elegant group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease }}
          className="order-1 lg:order-2"
        >
          <div className="relative overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8070398/pexels-photo-8070398.jpeg?auto=compress&cs=tinysrgb&h=1100"
              alt="Korean minimalist fashion model in beige outfit"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-6 left-6 bg-primary/80 px-5 py-3 backdrop-blur-sm">
              <p className="font-heading text-sm tracking-wide text-dark">Embroidery Edition</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

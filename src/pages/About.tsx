import { Reveal } from '@/components/Reveal';
import { FeatureSection } from '@/components/FeatureSection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-primary">
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="container-editorial">
          <Reveal className="mb-16 text-center">
            <p className="text-[11px] uppercase tracking-editorial text-secondary mb-5">About</p>
            <h1 className="font-heading text-4xl text-dark sm:text-5xl lg:text-6xl text-balance">
              Korean minimalist, made for every day
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container-editorial grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8422354/pexels-photo-8422354.jpeg?auto=compress&cs=tinysrgb&h=1000"
                alt="Katarina Daily brand editorial"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-[11px] uppercase tracking-editorial text-secondary mb-6">
              Our Philosophy
            </p>
            <h2 className="font-heading text-3xl leading-snug text-dark sm:text-4xl text-balance">
              The Story Behind Katarina Daily
            </h2>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-dark/70">
              Katarina Daily brings Korean minimalist fashion into everyday life. Every piece is
              designed with special embroidery details and carefully self-manufactured to create
              comfortable, stylish, and affordable outfits.
            </p>
            <p className="mt-5 max-w-md text-base font-light leading-relaxed text-dark/60">
              Our message is simple — Korean minimalist with special design embroidery and
              self-manufactured for daily style at an affordable price. We believe that elegance
              lives in restraint, and that thoughtfully made clothing becomes part of your everyday
              rhythm.
            </p>
          </Reveal>
        </div>
      </section>

      <FeatureSection />

      <section className="py-24 lg:py-32">
        <div className="container-editorial grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7498815/pexels-photo-7498815.jpeg?auto=compress&cs=tinysrgb&h=800"
                alt="Embroidery detail close up"
                className="aspect-[5/4] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-editorial text-secondary mb-6">
              The Craft
            </p>
            <h2 className="font-heading text-3xl leading-snug text-dark sm:text-4xl text-balance">
              Embroidery that makes every piece memorable
            </h2>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-dark/70">
              Each embroidery detail is designed in-house and carefully stitched into our pieces.
              It is the quiet signature of Katarina Daily — a small, intentional touch that turns a
              simple outfit into something you keep reaching for.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary-50 py-24 lg:py-32">
        <div className="container-editorial text-center">
          <Reveal>
            <h2 className="font-heading text-3xl text-dark sm:text-4xl">
              Explore the collection
            </h2>
            <Link
              to="/shop"
              className="group mt-8 inline-flex items-center gap-3 bg-secondary px-10 py-4 text-[11px] uppercase tracking-editorial text-primary transition-all duration-500 ease-elegant hover:bg-secondary-600"
            >
              Shop Now
              <ArrowRight
                size={14}
                className="transition-transform duration-500 ease-elegant group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

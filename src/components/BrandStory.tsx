import { Reveal } from './Reveal';

export function BrandStory() {
  return (
    <section className="bg-primary-50 py-24 lg:py-32">
      <div className="container-editorial grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="overflow-hidden">
            <img
              src="https://images.pexels.com/photos/6203797/pexels-photo-6203797.jpeg?auto=compress&cs=tinysrgb&h=1000"
              alt="Katarina Daily minimalist fashion editorial"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-[11px] uppercase tracking-editorial text-secondary mb-6">
            Our Story
          </p>
          <h2 className="font-heading text-3xl leading-snug text-dark sm:text-4xl lg:text-[2.75rem] text-balance">
            The Story Behind Katarina Daily
          </h2>
          <p className="mt-8 max-w-md text-base font-light leading-relaxed text-dark/70">
            Katarina Daily brings Korean minimalist fashion into everyday life. Every piece is
            designed with special embroidery details and carefully self-manufactured to create
            comfortable, stylish, and affordable outfits.
          </p>
          <p className="mt-5 max-w-md text-base font-light leading-relaxed text-dark/60">
            We believe that elegance lives in restraint — that the simplest pieces, made with care,
            become the ones you reach for every day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

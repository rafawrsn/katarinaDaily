import { Reveal } from './Reveal';
import { Sparkles, Scissors, Tag } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Special Embroidery Design',
    description: 'Unique embroidery details created to make every outfit memorable.',
  },
  {
    icon: Scissors,
    title: 'Self Manufactured',
    description: 'Designed and produced with attention to quality and detail.',
  },
  {
    icon: Tag,
    title: 'Affordable Daily Style',
    description: 'Minimalist Korean-inspired fashion for everyday moments.',
  },
];

export function FeatureSection() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="container-editorial">
        <Reveal className="mb-16 text-center">
          <p className="text-[11px] uppercase tracking-editorial text-secondary mb-5">
            Why Katarina Daily
          </p>
          <h2 className="font-heading text-3xl text-dark sm:text-4xl">
            Crafted with intention
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.12}>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-secondary/30 text-secondary">
                  <feature.icon size={22} strokeWidth={1.25} />
                </div>
                <h3 className="mt-7 font-heading text-xl tracking-wide text-dark">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-dark/65">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

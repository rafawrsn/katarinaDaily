import { Reveal } from './Reveal';
import { Instagram } from 'lucide-react';

const galleryImages = [
  'https://images.pexels.com/photos/13726717/pexels-photo-13726717.jpeg?auto=compress&cs=tinysrgb&h=600',
  'https://images.pexels.com/photos/19222080/pexels-photo-19222080.jpeg?auto=compress&cs=tinysrgb&h=600',
  'https://images.pexels.com/photos/8422354/pexels-photo-8422354.jpeg?auto=compress&cs=tinysrgb&h=600',
  'https://images.pexels.com/photos/7945550/pexels-photo-7945550.jpeg?auto=compress&cs=tinysrgb&h=600',
  'https://images.pexels.com/photos/15686362/pexels-photo-15686362.jpeg?auto=compress&cs=tinysrgb&h=600',
  'https://images.pexels.com/photos/8484105/pexels-photo-8484105.jpeg?auto=compress&cs=tinysrgb&h=600',
];

export function GallerySection() {
  return (
    <section className="bg-primary-50 py-24 lg:py-32">
      <div className="container-editorial">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <Instagram size={20} className="text-secondary" strokeWidth={1.25} />
          <p className="mt-4 text-[11px] uppercase tracking-editorial text-secondary">
            @katarinadaily
          </p>
          <h2 className="mt-4 font-heading text-3xl text-dark sm:text-4xl">Follow our moments</h2>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {galleryImages.map((src, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
              >
                <img
                  src={src}
                  alt="Katarina Daily gallery"
                  className="aspect-square w-full object-cover transition-transform duration-[1.2s] ease-elegant group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark/0 transition-colors duration-500 group-hover:bg-dark/15" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

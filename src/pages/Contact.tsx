import { Reveal } from '@/components/Reveal';
import { Instagram, ShoppingBag, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-primary pt-32 lg:pt-40 pb-24 lg:pb-32">
      <div className="container-editorial">
        <Reveal className="mb-16 text-center">
          <p className="text-[11px] uppercase tracking-editorial text-secondary mb-5">Contact</p>
          <h1 className="font-heading text-4xl text-dark sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-dark/65">
            Questions about a piece, sizing, or an order? We'd love to hear from you.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              icon: Instagram,
              label: 'Instagram',
              value: '@katarinadaily',
              href: 'https://instagram.com',
            },
            {
              icon: ShoppingBag,
              label: 'Shopee',
              value: 'Katarina Daily Store',
              href: 'https://shopee.co.id/',
            },
            {
              icon: Mail,
              label: 'Email',
              value: 'hello@katarinadaily.com',
              href: 'mailto:hello@katarinadaily.com',
            },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.12}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center gap-4 border border-dark/10 bg-primary-50 px-6 py-12 text-center transition-all duration-500 ease-elegant hover:border-secondary"
              >
                <item.icon size={22} strokeWidth={1.25} className="text-secondary" />
                <p className="text-[11px] uppercase tracking-editorial text-dark/50">
                  {item.label}
                </p>
                <p className="font-heading text-lg text-dark transition-colors duration-500 group-hover:text-secondary">
                  {item.value}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

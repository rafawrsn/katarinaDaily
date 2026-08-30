import { Link } from 'react-router-dom';
import { Instagram, ShoppingBag } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark text-primary">
      <div className="container-editorial py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h2 className="font-heading text-2xl tracking-wide">Katarina Daily</h2>
            <p className="mt-3 text-sm font-light text-primary/70 tracking-wide">
              Special Design Minimalist Outfit
            </p>
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-primary/60">
              Korean minimalist fashion with special embroidery details, self-manufactured for your
              everyday style.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-editorial text-primary/50">Explore</h3>
            <ul className="mt-5 space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Shop', path: '/shop' },
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-light text-primary/80 transition-colors duration-500 hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-editorial text-primary/50">Follow</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-light text-primary/80 transition-colors duration-500 hover:text-secondary"
                >
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://shopee.co.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-light text-primary/80 transition-colors duration-500 hover:text-secondary"
                >
                  <ShoppingBag size={16} /> Shopee
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-8 text-xs font-light text-primary/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Katarina Daily. All rights reserved.</p>
          <p className="tracking-wide-lg">Korean Minimalist · Special Embroidery</p>
        </div>
      </div>
    </footer>
  );
}

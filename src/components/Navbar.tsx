import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-elegant ${
        scrolled
          ? 'bg-primary/90 backdrop-blur-md border-b border-dark/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container-editorial flex items-center justify-between">
        <Link
          to="/"
          className="font-heading text-2xl tracking-wide text-dark"
          aria-label="Katarina Daily home"
        >
          Katarina Daily
        </Link>

        <ul className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative text-[11px] uppercase tracking-editorial transition-colors duration-500 ${
                    active ? 'text-secondary' : 'text-dark hover:text-secondary'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-secondary transition-all duration-500 ease-elegant ${
                      active ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden text-dark"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-primary/95 backdrop-blur-md border-t border-dark/5"
          >
            <ul className="container-editorial flex flex-col gap-6 py-8">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`text-sm uppercase tracking-editorial ${
                        active ? 'text-secondary' : 'text-dark'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-paper/95 backdrop-blur-md py-2 sm:py-2.5 border-b border-[#E8DCD5]/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
          : 'bg-paper/95 md:bg-paper/90 backdrop-blur-md py-2.5 sm:py-3 border-b border-[#E8DCD5] shadow-sm'
      }`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo - compact on mobile */}
        <Link
          href="/"
          className="group flex items-center no-underline focus-visible:outline-offset-4 flex-shrink-0 min-w-0"
          aria-label="Monarca Caça Vazamentos"
        >
          <Image
            src="/images/logo.png"
            alt="Logotipo da Monarca"
            width={180}
            height={100}
            priority
            className="w-[64px] h-[64px] sm:w-[70px] sm:h-[70px] md:w-[76px] md:h-[76px] flex-shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop Primary Navigation (Active on xl screens >= 1200px) */}
        <nav className="hidden xl:flex items-center gap-7 2xl:gap-8" aria-label="Navegação principal">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              className={`font-body text-15 py-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
                SERVICES.some((service) => pathname === `/${service.slug}/`)
                  ? 'text-[#222222] font-semibold'
                  : 'text-[#222222]/80 hover:text-[#6F6F6F] font-medium'
              }`}
              aria-expanded={servicesDropdownOpen}
            >
          <span>Serviços</span>
              <span
                className={`w-1.5 h-1.5 border-r border-b border-[#222222]/60 transition-transform duration-200 ${
                  servicesDropdownOpen ? '-rotate-135 -translate-y-0.5' : 'rotate-45 translate-y-[-2px]'
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Panel with Pure White Background and Smooth Shadow */}
            {servicesDropdownOpen && (
              <div className="absolute top-full -left-4 pt-2 w-64 z-50 animate-fade-in">
                <div className="p-2 bg-paper border border-[#E8DCD5] shadow-[0_12px_36px_rgba(17,17,17,0.08)] rounded-2xl">
                  <div className="space-y-0.5">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}/`}
                        className={`block px-3.5 py-2 text-14 font-body transition-all duration-200 rounded-xl ${
                          pathname === `/${s.slug}/`
                            ? 'bg-[#FFF5EF] text-[#222222] font-semibold shadow-xs'
                            : 'text-[#222222]/85 hover:bg-[#FFF5EF]/50 hover:text-[#6F6F6F] hover:translate-x-1'
                        }`}
                      >
                        <span className="block font-medium">{s.navLabel}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/sobre/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname === '/sobre/'
                ? 'text-[#222222] font-semibold'
                : 'text-[#222222]/80 hover:text-[#6F6F6F] font-medium'
            }`}
          >
            Sobre
          </Link>

          <Link
            href="/avaliacoes/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname?.startsWith('/avaliacoes')
                ? 'text-[#222222] font-semibold'
                : 'text-[#222222]/80 hover:text-[#6F6F6F] font-medium'
            }`}
          >
            Avaliações
          </Link>

          <Link
            href="/dicas/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname?.startsWith('/dicas')
                ? 'text-[#222222] font-semibold'
                : 'text-[#222222]/80 hover:text-[#6F6F6F] font-medium'
            }`}
          >
            Dicas hidráulicas
          </Link>

          <Link
            href="/contato/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname === '/contato/'
                ? 'text-[#222222] font-semibold'
                : 'text-[#222222]/80 hover:text-[#6F6F6F] font-medium'
            }`}
          >
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Link
            href="/contato/"
            className="hidden xl:inline-flex h-10 w-[176px] items-center justify-center rounded-md border border-[#FF681F] bg-[#FF681F] px-3 font-body text-13 font-semibold text-white transition-colors hover:border-[#F4511E] hover:bg-[#F4511E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF681F] whitespace-nowrap"
          >
            <span>Solicitar atendimento</span>
          </Link>

          <Button
            href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
            variant="forest"
            size="sm"
            className="hidden xl:inline-flex h-9 w-[160px] items-center justify-center gap-2 px-2 text-12 sm:text-13 font-semibold whitespace-nowrap"
          >
            <span>Ligar 24 horas</span>
          </Button>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#222222] focus-visible:outline-offset-2 flex items-center justify-center cursor-pointer rounded-lg hover:bg-[#FFF5EF] transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-[2px] bg-[#222222] transition-transform duration-250 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-[2px] bg-[#222222] transition-opacity duration-200 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-[2px] bg-[#222222] transition-transform duration-250 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </header>

      {/* Mobile / Tablet Drawer Menu */}
      <div
        id="mobile-navigation"
        aria-label="Navegação móvel"
        aria-hidden={!mobileMenuOpen}
        className={`xl:hidden fixed inset-x-0 top-[95px] sm:top-[110px] md:top-[121px] bottom-0 bg-paper border-t border-[#E8DCD5] overflow-y-auto overscroll-contain px-4 sm:px-6 py-5 sm:py-6 flex flex-col justify-between z-[999] transition-all duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-4">
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((open) => !open)}
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-list"
              className="flex min-h-12 w-full items-center justify-between py-2 text-left font-body text-13 font-bold uppercase tracking-wider text-[#222222]"
            >
              <span>Serviços</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className={`mr-1 h-4 w-4 text-[#222222]/70 transition-transform duration-200 ${
                  mobileServicesOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div id="mobile-services-list" className="grid grid-cols-1 gap-1.5 pb-2 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}/`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className={`flex min-h-11 items-center rounded-md px-3 font-body text-15 transition-colors ${
                      pathname === `/${s.slug}/`
                        ? 'bg-[#FFE2D1] font-semibold text-[#222222]'
                        : 'text-[#222222] hover:bg-[#FFF5EF] hover:text-[#6F6F6F]'
                    }`}
                  >
                    {s.navLabel}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#E8DCD5] flex flex-col space-y-3">
            <Link
              href="/sobre/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname === '/sobre/' ? 'text-[#222222] font-semibold' : 'text-[#222222] hover:text-[#6F6F6F]'
              }`}
            >
              Sobre
            </Link>
            <Link
              href="/avaliacoes/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
              pathname?.startsWith('/avaliacoes') ? 'text-[#222222] font-semibold' : 'text-[#222222] hover:text-[#6F6F6F]'
              }`}
            >
              Avaliações
            </Link>
            <Link
              href="/contato/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 font-semibold text-[#222222] hover:underline`}
            >
              Solicitar atendimento
            </Link>
            <Link
              href="/dicas/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname?.startsWith('/dicas') ? 'text-[#222222] font-semibold' : 'text-[#222222] hover:text-[#6F6F6F]'
              }`}
            >
              Dicas hidráulicas
            </Link>
            <Link
              href="/contato/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname === '/contato/' ? 'text-[#222222] font-semibold' : 'text-[#222222] hover:text-[#6F6F6F]'
              }`}
            >
              Contato
            </Link>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-[#E8DCD5] flex flex-col gap-3 pb-8">
          <Button
            href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
            variant="forest"
            size="lg"
            className="w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Ligar 24 horas
          </Button>
          <a
            href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="text-center font-body text-15 text-[#222222] py-2 font-semibold hover:text-[#6F6F6F] transition-colors"
          >
            Telefone: {CLINIC_INFO.contact.phone}
          </a>
        </div>
      </div>
    </>
  );
}

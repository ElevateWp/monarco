import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';

export default function Footer() {
  return (
    <footer className="w-full bg-forest text-paper border-t border-mist/20 pt-16 md:pt-24 pb-12">
      <div className="max-w-site mx-auto px-6 md:px-12">
        {/* Top section: store summary and contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-mist/20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#111111] rounded-xl p-1 flex items-center justify-center flex-shrink-0 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="Logotipo da Monarca"
                  width={60}
                  height={60}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-24 md:text-30 font-medium leading-tight">
                  Monarca Caça Vazamentos
                </span>
                <span className="font-body text-13 text-paper/70 font-medium">
                  Caça vazamentos · Desentupimento
                </span>
              </div>
            </div>
            <p className="font-body text-16 text-paper/80 leading-relaxed max-w-xl">
              Caça vazamentos, desentupimento e manutenção geral 24 horas em Caieiras e região.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-13 text-paper/60">
              <span>{CLINIC_INFO.contact.phone}</span>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-12 flex flex-col justify-between">
            <div className="p-6 bg-paper/5 border border-mist/20 rounded-none shadow-sm">
              <span className="font-body text-13 text-lime block mb-2 font-semibold uppercase tracking-wider">
                Fale com a nossa equipe
              </span>
              <p className="font-body text-15 text-paper/90 mb-4">
                Precisa de ajuda com vazamentos ou entupimentos? Ligue para a equipe, 24 horas.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-15 font-semibold text-lime hover:underline"
                >
                  Telefone: {CLINIC_INFO.contact.phone}
                </a>
                <Link
                  href="/contato/"
                  className="font-body text-13 text-paper/80 underline underline-offset-4 hover:text-paper"
                >
                  Solicitar atendimento
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Complete Internal Linking Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-mist/20">
          {/* Column 1: technical Treatments */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Serviços
            </span>
            <ul className="space-y-2.5 font-body text-15">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}/`}
                    className="text-paper/80 hover:text-lime transition-colors"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: technical Team */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Avaliações
            </span>
            <ul className="space-y-2.5 font-body text-15">
              <li>
                <Link href="/avaliacoes/" className="text-paper/80 hover:text-lime transition-colors">
                  Leia avaliações de clientes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The company */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Empresa
            </span>
            <ul className="space-y-2.5 font-body text-15">
              <li>
                <Link href="/sobre/" className="text-paper/80 hover:text-lime transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/dicas/" className="text-paper/80 hover:text-lime transition-colors">
                  Dicas hidráulicas
                </Link>
              </li>
              <li>
                <Link href="/orcamento/" className="text-paper/80 hover:text-lime transition-colors">
                  Solicitar atendimento
                </Link>
              </li>
              <li>
                <Link href="/contato/" className="text-paper/80 hover:text-lime transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-paper/80 hover:text-lime transition-colors">
                  Ligar 24 horas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Dados de contato
            </span>
            <div className="space-y-3 font-body text-15 text-paper/80">
              <div>
                <span className="text-paper/50 block text-13">Telefone:</span>
                <a
                  href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime transition-colors font-medium"
                >
                  {CLINIC_INFO.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-13 text-paper/60">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.legalName}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span>Atendimento 24 horas</span>
            <span>Monarca Caça Vazamentos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import ProcedurePin from '@/components/sections/treatment/ProcedurePin';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';

const categoryImages: Record<string, { src: string; alt: string }> = {
  'estruturas-metalicas': { src: '/images/stock-roof-structure.jpg', alt: 'Estrutura metálica para cobertura, imagem ilustrativa' },
  'telhados-coberturas': { src: '/images/stock-steel-beams.jpg', alt: 'Vigas metálicas para uma cobertura, imagem ilustrativa' },
  'engenharia-montagem': { src: '/images/stock-welding-workshop.jpg', alt: 'Trabalho de fabricação em oficina, imagem ilustrativa' },
  'fabricacao-metalica': { src: '/images/stock-industrial-welder.jpg', alt: 'Profissional trabalhando com metal, imagem ilustrativa' },
  'montagem-industrial': { src: '/images/stock-welding-brazil.jpg', alt: 'Montagem metálica, imagem ilustrativa' },
  'reformas-manutencao': { src: '/images/stock-metal-worker.jpg', alt: 'Trabalho em estrutura metálica, imagem ilustrativa' },
};

const serviceDetails: Record<string, { intro: string; focus: string; planning: string[]; execution: string[] }> = {
  'estruturas-metalicas': {
    intro: 'Estruturas metálicas podem atender a diferentes necessidades de construção, ampliação e adequação de espaços. O formato, as dimensões e as etapas são definidos de acordo com as características do projeto.',
    focus: 'A conversa inicial ajuda a entender o uso previsto, o espaço disponível e o resultado esperado para a estrutura.',
    planning: ['Uso e finalidade da estrutura', 'Medidas e características do local', 'Acesso para fabricação, transporte e montagem', 'Escopo, etapas e prazo a combinar'],
    execution: ['Alinhamento das informações e necessidades', 'Definição do escopo aplicável ao projeto', 'Combinação das etapas e condições do serviço'],
  },
  'telhados-coberturas': {
    intro: 'Uma cobertura precisa ser avaliada considerando o espaço, o uso do imóvel e as condições observadas no local. A BR GUEDES conversa com você para compreender a necessidade e orientar a definição do serviço.',
    focus: 'Conte se a demanda é para uma cobertura nova, uma adequação ou uma manutenção. A avaliação depende das condições de cada local.',
    planning: ['Tipo e dimensões aproximadas da área', 'Uso previsto para o espaço coberto', 'Sinais observados e pontos que precisam de atenção', 'Condições de acesso e prazo desejado'],
    execution: ['Levantamento das necessidades da cobertura', 'Alinhamento do que será incluído no serviço', 'Organização das etapas e do prazo com a equipe'],
  },
  'engenharia-montagem': {
    intro: 'Serviços de engenharia e montagem começam pela compreensão do projeto e das condições do local. O escopo e a sequência de trabalho são conversados com a equipe antes da execução.',
    focus: 'Compartilhe desenhos, medidas ou referências disponíveis para explicar o projeto. A equipe poderá indicar quais informações ajudam a iniciar a avaliação.',
    planning: ['Objetivo e escopo esperado', 'Desenhos, medidas ou referências disponíveis', 'Condições do local e de acesso', 'Etapas e prazo desejados'],
    execution: ['Análise das informações compartilhadas', 'Alinhamento do escopo e das responsabilidades', 'Programação das etapas conforme o projeto'],
  },
  'fabricacao-metalica': {
    intro: 'A fabricação metálica pode envolver componentes e estruturas com dimensões e aplicações diferentes. As especificações e o escopo precisam ser definidos de acordo com a necessidade apresentada.',
    focus: 'Quanto mais claras forem as medidas, a aplicação e as referências do componente, mais objetiva será a conversa inicial sobre o projeto.',
    planning: ['Aplicação e finalidade da peça ou estrutura', 'Medidas e referências disponíveis', 'Quantidade e características solicitadas', 'Forma de entrega ou necessidade de montagem'],
    execution: ['Conferência das especificações apresentadas', 'Definição dos itens incluídos na proposta', 'Combinação de prazo e sequência do serviço'],
  },
  'montagem-industrial': {
    intro: 'A montagem industrial exige coordenação com o projeto e com as condições do local. A equipe conversa sobre os componentes envolvidos, o acesso e a sequência prevista para o serviço.',
    focus: 'Informações sobre o local, os componentes e a programação ajudam a planejar as etapas de montagem.',
    planning: ['Descrição dos componentes e do serviço', 'Informações ou desenhos do projeto', 'Condições de acesso e organização do local', 'Programação e prazo desejados'],
    execution: ['Entendimento da demanda e dos materiais envolvidos', 'Definição da sequência do serviço', 'Alinhamento das condições de execução com o cliente'],
  },
  'reformas-manutencao': {
    intro: 'Reformas e manutenção podem atender a diferentes necessidades em estruturas e coberturas. O primeiro passo é explicar o que foi observado e quais pontos precisam de avaliação.',
    focus: 'Descreva a necessidade e, se possível, compartilhe fotos feitas de um local seguro. A equipe poderá conversar sobre a avaliação e os próximos passos.',
    planning: ['Área e elementos que precisam de atenção', 'Descrição dos sinais ou necessidades observadas', 'Fotos de referência feitas com segurança', 'Acesso ao local e prazo desejado'],
    execution: ['Compreensão dos pontos relatados', 'Avaliação do escopo possível para o serviço', 'Combinação das etapas e condições com a equipe'],
  },
};

export default function ProductCategoryPage({ slug }: { slug: string }) {
  const category = SERVICES.find((item) => item.slug === slug);
  if (!category) return null;
  const image = categoryImages[slug] || categoryImages['estruturas-metalicas'];
  const details = serviceDetails[slug] || serviceDetails['estruturas-metalicas'];
  const relatedServices = SERVICES.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <main className="w-full bg-paper">
      <section className="border-b border-mist bg-paper-secondary py-14 md:py-20">
        <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-10 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Breadcrumbs items={[{ name: category.name, path: `/${slug}/` }]} />
            <AnimateOnScroll animation="fade-right">
              <span className="mb-3 mt-8 block font-body text-13 font-medium uppercase tracking-wider text-brand">BR GUEDES · Volta Redonda, RJ</span>
              <h1 className="font-display text-41 text-forest-ink md:text-55">{category.name}</h1>
              <p className="mt-5 max-w-xl font-body text-17 leading-relaxed text-forest-light">{category.shortDescription}</p>
              <p className="mt-4 max-w-xl font-body text-15 leading-relaxed text-forest-light">{details.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} variant="forest" size="lg">Ligar para a empresa</Button>
                <Link href="/contact/" className="inline-flex min-h-12 items-center rounded-pill border border-mist px-6 font-body text-15 text-forest-ink hover:border-brand">Solicitar informações</Link>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="zoom-in" duration={0.8}>
            <div className="relative aspect-[4/3] overflow-hidden border border-mist bg-paper shadow-sm">
              <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <span className="absolute bottom-3 right-3 bg-paper/90 px-3 py-1 font-body text-12 text-forest-ink">Imagem ilustrativa</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-site gap-10 px-6 md:px-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <AnimateOnScroll animation="fade-right">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Sobre o serviço</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Uma solução definida para cada projeto</h2>
            <p className="mt-5 font-body text-17 leading-relaxed text-forest-light">{category.clinicalExplanation}</p>
            <p className="mt-4 font-body text-15 leading-relaxed text-forest-light">{details.focus}</p>
            <p className="mt-4 font-body text-15 leading-relaxed text-forest-light">A BR GUEDES atende em Volta Redonda, no Rio de Janeiro. Entre em contato para compartilhar as informações disponíveis e entender os próximos passos para o seu projeto.</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" delay={0.1}>
            <div className="border border-mist bg-paper-secondary p-6 md:p-8">
              <h3 className="font-display text-21 text-forest-ink">Para quem este serviço pode ser indicado</h3>
              <ul className="mt-5 space-y-3">
                {category.whoNeeds.map((item) => <li key={item} className="flex gap-3 font-body text-15 leading-relaxed text-forest-light"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />{item}</li>)}
              </ul>
              <div className="mt-6 border-t border-mist pt-5">
                <p className="font-body text-13 font-medium uppercase tracking-wider text-brand">Converse com a equipe se você precisa</p>
                <ul className="mt-3 space-y-2">
                  {category.indications.map((item) => <li key={item.condition} className="font-body text-15 leading-relaxed text-forest-light"><strong className="text-forest-ink">{item.condition}:</strong> {item.explanation}</li>)}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-paper-secondary py-14 md:py-20">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">O que considerar</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Informações que ajudam no planejamento</h2>
            <p className="mt-4 max-w-3xl font-body text-15 leading-relaxed text-forest-light">Cada projeto tem características próprias. Reunir alguns detalhes antes de entrar em contato pode ajudar a equipe a compreender melhor a sua necessidade.</p>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {details.planning.map((item, index) => (
              <AnimateOnScroll key={item} animation="fade-up" delay={index * 0.08}>
                <div className="flex h-full gap-4 border border-mist bg-paper p-5 md:p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-softBlue font-display text-17 text-forest-navy">0{index + 1}</span>
                  <p className="font-body text-15 leading-relaxed text-forest-ink">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <AnimateOnScroll animation="fade-right">
              <h3 className="font-display text-26 text-forest-ink">Benefícios de alinhar o escopo</h3>
              <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">Uma conversa clara no início ajuda a organizar as expectativas e a combinar como o trabalho será conduzido.</p>
              <ul className="mt-5 space-y-3">{category.benefits.map((item) => <li key={item} className="flex gap-3 font-body text-15 leading-relaxed text-forest-light"><span className="text-brand">✓</span>{item}</li>)}</ul>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" delay={0.1}>
              <h3 className="font-display text-26 text-forest-ink">Pontos para conversar com a equipe</h3>
              <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">Na avaliação, explique o resultado esperado e pergunte quais etapas, condições e informações se aplicam ao seu caso.</p>
              <ul className="mt-5 space-y-3">{details.execution.map((item) => <li key={item} className="flex gap-3 font-body text-15 leading-relaxed text-forest-light"><span className="text-brand">→</span>{item}</li>)}</ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <ProcedurePin steps={category.procedureSteps} title={`Etapas de ${category.name.toLowerCase()}`} subtitle="Como funciona" className="bg-paper" />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Organização do projeto</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Planejamento, execução e orçamento</h2>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {category.recoveryTimeline.map((item, index) => (
              <AnimateOnScroll key={item.period} animation="fade-up" delay={index * 0.1}>
                <article className="h-full border border-mist p-6 md:p-8">
                  <span className="font-body text-13 font-medium uppercase tracking-wider text-brand">{item.period}</span>
                  <h3 className="mt-3 font-display text-21 text-forest-ink">O que esperar</h3>
                  <p className="mt-2 font-body text-15 leading-relaxed text-forest-light">{item.expectedSensations}</p>
                  <h3 className="mt-5 font-display text-17 text-forest-ink">Como se preparar</h3>
                  <p className="mt-2 font-body text-15 leading-relaxed text-forest-light">{item.careProtocol}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-8 grid gap-8 bg-navy px-6 py-8 text-paper md:grid-cols-2 md:p-10">
            <AnimateOnScroll animation="fade-right">
              <span className="font-body text-13 font-medium uppercase tracking-wider text-lime">Orçamento transparente</span>
              <h3 className="mt-3 font-display text-26">{category.costTransparency.baseRange}</h3>
              <p className="mt-3 font-body text-15 leading-relaxed text-paper/75">{category.costTransparency.note}</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" delay={0.1}>
              <h3 className="font-display text-21">O valor pode depender de</h3>
              <ul className="mt-3 space-y-2">{category.costTransparency.factors.map((item) => <li key={item} className="font-body text-15 text-paper/80">• {item}</li>)}</ul>
              <p className="mt-5 font-body text-13 font-medium uppercase tracking-wider text-paper">Alinhe também</p>
              <ul className="mt-2 space-y-2">{category.costTransparency.whatIsIncluded.map((item) => <li key={item} className="font-body text-15 text-paper/80">• {item}</li>)}</ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="bg-paper-secondary py-14 md:py-20">
        <div className="mx-auto grid max-w-site gap-10 px-6 md:px-12 lg:grid-cols-[.75fr_1.25fr]">
          <AnimateOnScroll animation="fade-right">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Perguntas frequentes</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Dúvidas sobre {category.name.toLowerCase()}</h2>
            <p className="mt-4 font-body text-15 leading-relaxed text-forest-light">Veja respostas iniciais e fale com a equipe para receber informações sobre o seu projeto.</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" delay={0.1}>
            <Accordion items={category.faqs.map((faq) => ({ question: faq.question, answer: faq.answer, relatedLink: faq.relatedSlug ? { href: `/${faq.relatedSlug}/`, label: 'Conheça outro serviço' } : undefined }))} />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Outras soluções</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Conheça outros serviços</h2>
          </AnimateOnScroll>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {relatedServices.map((service, index) => (
              <AnimateOnScroll key={service.slug} animation="fade-up" delay={index * 0.1}>
                <Link href={`/${service.slug}/`} className="group block h-full border border-mist bg-paper p-6 transition-colors hover:border-brand">
                  <span className="font-body text-13 font-medium uppercase tracking-wider text-brand">BR GUEDES</span>
                  <h3 className="mt-3 font-display text-21 text-forest-ink group-hover:text-brand">{service.name}</h3>
                  <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">{service.shortDescription}</p>
                  <span className="mt-5 inline-block font-body text-13 font-medium text-forest-navy">Saiba mais →</span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-12 text-paper md:py-16">
        <AnimateOnScroll animation="fade-up" className="mx-auto flex max-w-site flex-col justify-between gap-6 px-6 sm:flex-row sm:items-center md:px-12">
          <div>
            <h2 className="font-display text-26 md:text-33">Vamos conversar sobre seu projeto?</h2>
            <p className="mt-2 font-body text-15 text-paper/75">Entre em contato com a BR GUEDES em Volta Redonda.</p>
          </div>
          <Button href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} variant="lime" size="lg">Ligar para a equipe</Button>
        </AnimateOnScroll>
      </section>
    </main>
  );
}

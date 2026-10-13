export interface DentistProfile {
  id: string; slug: string; name: string; title: string; qualifications: string; specialization: string;
  experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[];
  specialties: string[]; image: string; warmImage: string;
}

export interface ServiceDetail {
  slug: string; name: string; navLabel: string; tagline: string; shortDescription: string; clinicalExplanation: string;
  whoNeeds: string[]; benefits: string[]; indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string; legalName: string; tagline: string; establishedYear?: number;
  primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string };
  identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: 'BR GUEDES Engenharia e Montagem', legalName: 'BR GUEDES Engenharia e Montagem',
  tagline: 'Soluções em serviços de engenharia, estruturas metálicas e coberturas.',
  primaryLocation: {
    street: 'Avenida Almirante Adalberto de Barros Nunes, 5501 - Siderlândia', suite: '',
    city: 'Volta Redonda', state: 'Rio de Janeiro', postalCode: '27274-200', country: 'BR',
    directions: 'Av. Alm. Adalberto de Barros Nunes, 5501 - Siderlândia, Volta Redonda - RJ, 27274-200, Brasil',
    landmarks: 'FVJ8+8J, Siderlândia, Volta Redonda - RJ, Brasil',
  },
  contact: { phone: '+55 24 98880-7841', emergencyPhone: '+55 24 98880-7841', whatsapp: '+55 24 98880-7841', email: '' },
  identityHighlights: ['Estruturas metálicas', 'Telhados e coberturas', 'Montagem e engenharia'],
  schedule: [
    { day: 'Segunda-feira', hours: '8h–18h' }, { day: 'Terça-feira', hours: '8h–18h' },
    { day: 'Quarta-feira', hours: '8h–18h' }, { day: 'Quinta-feira', hours: '8h–18h' },
    { day: 'Sexta-feira', hours: '8h–17h' }, { day: 'Sábado', hours: 'Fechado' }, { day: 'Domingo', hours: 'Fechado' },
  ],
  verifiedStats: [
    { value: 4, suffix: ',9', label: 'Nota no Google', description: 'Nota média baseada em 60 avaliações no Google.' },
    { value: 60, suffix: '', label: 'Avaliações no Google', description: 'Avaliações públicas de clientes no Google.' },
  ],
  accreditations: [],
};

export const DENTISTS: DentistProfile[] = [{
  id: 'br-guedes-equipe', slug: 'equipe-br-guedes', name: 'BR GUEDES Engenharia e Montagem',
  title: 'Engenharia, estruturas metálicas e coberturas', qualifications: 'Volta Redonda, Rio de Janeiro',
  specialization: 'Fabricação e montagem de estruturas metálicas', experienceYears: 0,
  bio: 'A BR GUEDES Engenharia e Montagem atua com soluções em serviços, estruturas metálicas e telhados.',
  philosophy: 'Compromisso com a qualidade e com o que foi combinado em cada projeto.', education: [], memberships: [],
  specialties: ['Estruturas metálicas', 'Telhados e coberturas', 'Fabricação e montagem'],
  image: '/images/stock-roof-structure.jpg', warmImage: '/images/stock-roof-structure.jpg',
}];

export interface CustomerTestimonial { name: string; rating: number; quote: string; age: string; source: string }

export const TESTIMONIALS: CustomerTestimonial[] = [
  { name: 'Aluísio da Silva Barbosa', rating: 5, quote: 'A empresa trabalhou com profissionalismo. O telhado ficou ótimo e o serviço foi muito bem-feito. Cumpriram o que foi combinado em contrato. O engenheiro Bruno é muito responsável. Recomendo a empresa.', age: 'há 5 meses', source: 'Avaliação no Google' },
  { name: 'Adolfo Schmidt', rating: 5, quote: 'A equipe é educada, trabalha com dedicação e vontade de fazer tudo certo. O trabalho fica sempre limpo.', age: 'há 2 anos', source: 'Avaliação no Google' },
  { name: 'Andréia Cristina da Silva', rating: 5, quote: 'Profissionais excelentes. Concluíram o serviço antes do prazo, e ficou tudo perfeito. A empresa é fácil de contatar, respeitosa com seus clientes e comprometida com o trabalho.', age: 'há 1 ano', source: 'Avaliação no Google' },
];

const imageSet = ['/images/stock-roof-structure.jpg', '/images/stock-steel-beams.jpg', '/images/stock-welding-brazil.jpg', '/images/stock-industrial-welder.jpg', '/images/stock-metal-worker.jpg', '/images/stock-welding-workshop.jpg'];
const makeFaq = (serviceName: string) => [
  { question: `Como solicitar um orçamento para ${serviceName.toLowerCase()}?`, answer: 'Entre em contato pelo telefone ou formulário e conte um pouco sobre o projeto. Se possível, envie medidas, fotos feitas com segurança ou referências para ajudar a equipe a entender a necessidade.' },
  { question: 'O que devo informar no primeiro contato?', answer: 'Explique o objetivo do serviço, o local, as dimensões aproximadas, o prazo desejado e qualquer desenho ou referência disponível. A equipe poderá indicar se precisa de mais informações.' },
  { question: 'Qual é o prazo para execução?', answer: 'O prazo depende do escopo, das condições do local e da programação do serviço. A equipe informa as possibilidades após conhecer os detalhes do projeto.' },
  { question: 'O valor do serviço é fixo?', answer: 'O orçamento é preparado considerando as características de cada projeto, como dimensões, materiais, condições do local e escopo. Consulte a equipe para receber uma proposta adequada à sua necessidade.' },
  { question: 'A BR GUEDES atende em Volta Redonda?', answer: 'A empresa está localizada em Siderlândia, Volta Redonda, Rio de Janeiro. Consulte diretamente a equipe sobre a disponibilidade para o endereço e o tipo de serviço desejado.' },
];

const makeService = (slug: string, name: string, tagline: string, description: string, imageIndex: number): ServiceDetail => ({
  slug, name, navLabel: name, tagline, shortDescription: description, clinicalExplanation: description,
  whoNeeds: ['Projetos de estruturas e coberturas', 'Construções e reformas que precisam de soluções metálicas'],
  benefits: ['Atendimento para entender as necessidades do projeto', 'Orientação sobre as etapas do serviço', 'Alinhamento do escopo antes da execução'],
  indications: [{ condition: 'Projeto sob medida', explanation: 'Converse com a equipe para apresentar as características e necessidades do local.' }],
  procedureSteps: [
    { stepNumber: 1, title: 'Conversa inicial', duration: 'A combinar', description: 'Conte à equipe sobre o projeto e o tipo de serviço desejado.', clinicalDetails: 'Informações de medidas, local e prazo ajudam na avaliação inicial.' },
    { stepNumber: 2, title: 'Avaliação do projeto', duration: 'Após o contato', description: 'A equipe entende o escopo e orienta sobre as próximas etapas.', clinicalDetails: 'Cada proposta depende das condições e necessidades do projeto.' },
    { stepNumber: 3, title: 'Execução do serviço', duration: 'Conforme combinado', description: 'O trabalho é realizado de acordo com o escopo alinhado.', clinicalDetails: 'Detalhes de prazo e execução são confirmados diretamente com a empresa.' },
  ],
  recoveryTimeline: [
    { period: 'Planejamento', expectedSensations: 'Definição das necessidades e do escopo do projeto.', careProtocol: 'Compartilhe medidas, referências e informações do local.' },
    { period: 'Execução', expectedSensations: 'Etapas e prazo variam conforme o serviço contratado.', careProtocol: 'Combine com a equipe as condições de acesso e organização do local.' },
  ],
  costTransparency: { baseRange: 'Orçamento sob consulta.', factors: ['Tipo e dimensão do projeto', 'Materiais e condições do local', 'Escopo e prazo desejados'], whatIsIncluded: ['Escopo proposto', 'Alinhamento das etapas do serviço'], note: 'Valores, prazos e disponibilidade são informados pela equipe após conhecer o projeto.' },
  beforeAfterCase: { category: name, clinicalContext: 'Imagem ilustrativa de estrutura metálica.', beforeLabel: 'Estrutura metálica', afterLabel: 'Estrutura metálica', beforeImage: imageSet[imageIndex % imageSet.length], afterImage: imageSet[(imageIndex + 1) % imageSet.length], timeframe: 'Imagem ilustrativa' },
  assignedDentistId: 'br-guedes-equipe', faqs: makeFaq(name),
});

export const SERVICES: ServiceDetail[] = [
  makeService('estruturas-metalicas', 'Estruturas metálicas', 'Fabricação e montagem de estruturas metálicas.', 'Soluções em estruturas metálicas para projetos de diferentes portes. Consulte a equipe para apresentar as necessidades do seu projeto.', 0),
  makeService('telhados-coberturas', 'Telhados e coberturas', 'Soluções para telhados e coberturas.', 'Serviços relacionados a telhados e coberturas, com escopo e etapas definidos conforme cada projeto.', 1),
  makeService('engenharia-montagem', 'Engenharia e montagem', 'Serviços de engenharia e montagem.', 'Apoio em serviços de engenharia e montagem. Entre em contato para conversar sobre as características do seu projeto.', 2),
  makeService('fabricacao-metalica', 'Fabricação metálica', 'Fabricação de componentes e estruturas metálicas.', 'Converse com a BR GUEDES sobre fabricação metálica e as especificações do seu projeto.', 3),
  makeService('montagem-industrial', 'Montagem industrial', 'Montagem de estruturas e componentes.', 'Serviços de montagem para projetos e instalações. Consulte a empresa para entender as possibilidades.', 4),
  makeService('reformas-manutencao', 'Reformas e manutenção', 'Serviços de reforma e manutenção.', 'Converse com a equipe sobre reformas, manutenção e soluções para estruturas e coberturas.', 5),
];

export interface EmergencyCondition { id: string; title: string; urgency: string; symptoms: string[]; immediateAction: string[]; clinicTreatment: string }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];

export interface BlogPost {
  slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string;
  excerpt: string; leadImage: string; relatedServiceSlug: string;
  content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] };
}
export const BLOG_POSTS: BlogPost[] = [
  { slug: 'planejamento-de-estrutura-metalica', title: 'O que considerar ao planejar uma estrutura metálica', category: 'Estruturas metálicas', readTime: '3 min de leitura', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'br-guedes-equipe', excerpt: 'Conheça alguns pontos para organizar as informações do projeto antes de solicitar uma avaliação.', leadImage: imageSet[0], relatedServiceSlug: 'estruturas-metalicas', content: { intro: 'Um bom planejamento começa com as necessidades do espaço, o uso previsto e as dimensões disponíveis. Reunir essas informações ajuda a iniciar a conversa sobre a estrutura metálica.', sections: [{ heading: 'Reúna as informações do local', body: 'Anote as medidas disponíveis, as condições de acesso e o uso que a estrutura terá. Fotografias de referência também podem ajudar a explicar a ideia.' }, { heading: 'Converse sobre escopo e etapas', body: 'Cada projeto tem características próprias. Entre em contato com a BR GUEDES para conversar sobre o escopo, as etapas e o prazo.' }] } },
  { slug: 'cuidados-com-telhados-e-coberturas', title: 'Cuidados com telhados e coberturas', category: 'Telhados e coberturas', readTime: '3 min de leitura', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'br-guedes-equipe', excerpt: 'Acompanhar as condições visíveis da cobertura pode ajudar a identificar quando é hora de buscar orientação profissional.', leadImage: imageSet[1], relatedServiceSlug: 'telhados-coberturas', content: { intro: 'Telhados e coberturas estão expostos ao tempo e podem precisar de avaliação ao longo dos anos. Observe sinais visíveis sem subir no telhado ou se expor a riscos.', sections: [{ heading: 'Observe sinais com segurança', body: 'Manchas de umidade, peças deslocadas ou danos aparentes podem indicar que uma avaliação é necessária. Registre o que notar a partir de um local seguro.' }, { heading: 'Peça orientação', body: 'Explique o que observou e compartilhe imagens feitas do chão. A equipe poderá conversar sobre os próximos passos.' }] } },
];

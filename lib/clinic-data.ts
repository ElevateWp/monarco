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
  name: 'Monarca Caça Vazamentos', legalName: 'Monarca Caça Vazamentos Desentupidora e Manutenção Geral',
  tagline: 'Caça vazamentos, desentupimento e manutenção geral em Caieiras e região.',
  primaryLocation: {
    street: 'Rua Tomás Parizotto, 354', suite: '', city: 'Caieiras', state: 'São Paulo', postalCode: '07718-000', country: 'BR',
    directions: 'Vera Tereza, Caieiras - SP, Brasil', landmarks: 'M69R+9J Vera Tereza, Caieiras - São Paulo, Brasil',
  },
  contact: { phone: '+55 11 97547-5490', emergencyPhone: '+55 11 97547-5490', whatsapp: '+55 11 97547-5490', email: '' },
  identityHighlights: ['Caça vazamentos', 'Desentupimento', 'Encanador 24 horas', 'Manutenção hidráulica e geral'],
  schedule: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'].map((day) => ({ day, hours: '24 hours' })),
  verifiedStats: [], accreditations: [],
};

export const DENTISTS: DentistProfile[] = [{
  id: 'equipe-monarca', slug: 'equipe-monarca', name: 'Equipe Monarca',
  title: 'Caça vazamentos, desentupimento e manutenção', qualifications: 'Atendimento 24 horas',
  specialization: 'Serviços hidráulicos residenciais e comerciais', experienceYears: 0,
  bio: 'A Monarca Caça Vazamentos atende emergências hidráulicas, localização de vazamentos, desentupimento e serviços de manutenção geral em Caieiras e região.',
  philosophy: 'Atendimento ágil e cuidadoso para entender o problema e orientar a solução adequada.', education: [], memberships: [],
  specialties: ['Localização de vazamentos', 'Desentupimento', 'Reparos hidráulicos', 'Manutenção geral'],
  image: '/images/logo.png', warmImage: '/images/logo.png',
}];

export interface CustomerTestimonial { name: string; rating: number; quote: string; age: string; source: string }
export const TESTIMONIALS: CustomerTestimonial[] = [
  { name: 'Tatiane Alves', rating: 5, quote: 'Tive um vazamento sério no apartamento e fui atendida rapidamente. A equipe foi prestativa e cuidadosa. Serviço excelente.', age: '4 meses atrás', source: 'Avaliação no Google' },
  { name: 'Apollo Mota Moura', rating: 5, quote: 'Profissional impecável, atendimento rápido, muito cuidadoso e preço justo.', age: '6 meses atrás', source: 'Avaliação no Google' },
  { name: 'Paulo Perê', rating: 5, quote: 'Profissional educado, chegou muito rápido num domingo e resolveu o problema hidráulico por um preço justo.', age: 'Avaliação editada', source: 'Avaliação no Google' },
  { name: 'A C', rating: 5, quote: 'Excelente profissional. Trabalho cuidadoso e rápido, com preço justo.', age: '8 meses atrás', source: 'Avaliação no Google' },
];

const imageSet = ['/images/logo.png'];
const makeFaq = (serviceName: string) => [
  { question: `A Monarca atende ${serviceName.toLowerCase()} em emergências?`, answer: 'O atendimento funciona 24 horas. Ligue para informar o endereço e explicar o que está acontecendo.' },
  { question: 'Em quais regiões vocês atendem?', answer: 'A Monarca fica em Vera Tereza, Caieiras. Ligue para confirmar o atendimento no seu endereço.' },
  { question: 'Como solicitar uma visita?', answer: 'Ligue para +55 11 97547-5490 e informe o endereço, o tipo de problema e quando começou.' },
  { question: 'O orçamento depende do serviço?', answer: 'O valor varia conforme o problema, o local e o serviço necessário. Entre em contato para explicar a situação e combinar a avaliação.' },
];

const makeService = (slug: string, name: string, tagline: string, description: string, imageIndex: number): ServiceDetail => ({
  slug, name, navLabel: name, tagline, shortDescription: description, clinicalExplanation: description,
  whoNeeds: ['Residências com vazamento, infiltração ou aumento inesperado na conta de água', 'Imóveis com ralos, pias ou tubulações entupidas', 'Quem precisa de reparos hidráulicos ou manutenção geral'],
  benefits: ['Atendimento 24 horas para emergências', 'Avaliação cuidadosa do problema', 'Serviços hidráulicos e manutenção geral'],
  indications: [{ condition: 'Atendimento residencial e comercial', explanation: 'Informe o endereço e os sinais observados para confirmar a disponibilidade do serviço.' }],
  procedureSteps: [
    { stepNumber: 1, title: 'Contato e descrição do problema', duration: 'Atendimento 24 horas', description: 'Conte onde está o problema, quando começou e quais sinais você observou.', clinicalDetails: 'Se possível, informe se há água aparente, umidade, mau cheiro ou escoamento lento.' },
    { stepNumber: 2, title: 'Avaliação no local', duration: 'A combinar', description: 'A equipe verifica a situação para identificar o serviço necessário.', clinicalDetails: 'O método depende do tipo de instalação e do problema encontrado.' },
    { stepNumber: 3, title: 'Reparo ou desentupimento', duration: 'Conforme o serviço', description: 'Após a avaliação, a equipe explica as opções e combina o trabalho.', clinicalDetails: 'Prazo e valor dependem das condições observadas no local.' },
  ],
  recoveryTimeline: [
    { period: 'Antes da visita', expectedSensations: 'Descreva os sintomas e a localização aproximada do problema.', careProtocol: 'Se houver vazamento ativo, feche o registro de água se for seguro fazê-lo.' },
    { period: 'Durante o atendimento', expectedSensations: 'O tempo varia conforme a origem e a extensão do problema.', careProtocol: 'A equipe orienta os cuidados e próximos passos após avaliar o local.' },
  ],
  costTransparency: { baseRange: 'Valor sob consulta.', factors: ['Tipo e localização do problema', 'Acesso às tubulações ou ao ponto do vazamento', 'Materiais e serviço necessários'], whatIsIncluded: ['Avaliação da situação', 'Alinhamento do serviço e do valor antes da execução'], note: 'Ligue para explicar o que aconteceu e combinar a avaliação.' },
  beforeAfterCase: { category: name, clinicalContext: 'Imagem ilustrativa de serviços técnicos.', beforeLabel: 'Avaliação do problema', afterLabel: 'Serviço concluído', beforeImage: imageSet[imageIndex % imageSet.length], afterImage: imageSet[(imageIndex + 1) % imageSet.length], timeframe: 'Imagem ilustrativa' },
  assignedDentistId: 'equipe-monarca', faqs: makeFaq(name),
});

export const SERVICES: ServiceDetail[] = [
  makeService('caca-vazamentos', 'Caça vazamentos', 'Localização cuidadosa de vazamentos.', 'Investigação de vazamentos e infiltrações em residências e imóveis comerciais.', 0),
  makeService('desentupimento', 'Desentupimento', 'Desobstrução de tubulações e ralos.', 'Serviços de desentupimento para pias, ralos, vasos sanitários e tubulações.', 1),
  makeService('encanador-24-horas', 'Encanador 24 horas', 'Atendimento hidráulico para emergências.', 'Atendimento 24 horas para emergências hidráulicas e problemas que precisam de avaliação rápida.', 2),
  makeService('reparos-hidraulicos', 'Reparos hidráulicos', 'Conserto de vazamentos e instalações.', 'Reparos em torneiras, registros, tubulações e instalações hidráulicas.', 3),
  makeService('manutencao-hidraulica', 'Manutenção hidráulica', 'Cuidados e manutenção das instalações.', 'Manutenção de sistemas hidráulicos residenciais e comerciais.', 4),
  makeService('manutencao-geral', 'Manutenção geral', 'Serviços de manutenção para o imóvel.', 'Serviços de manutenção geral para cuidar de necessidades do imóvel.', 5),
];

export interface EmergencyCondition { id: string; title: string; urgency: string; symptoms: string[]; immediateAction: string[]; clinicTreatment: string }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];

export interface BlogPost {
  slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string;
  excerpt: string; leadImage: string; relatedServiceSlug: string;
  content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] };
}
export const BLOG_POSTS: BlogPost[] = [
  { slug: 'sinais-de-vazamento-em-casa', title: 'Sinais de vazamento que merecem atenção', category: 'Caça vazamentos', readTime: '3 min de leitura', publishDate: '2026-10-14', lastUpdated: '2026-10-14', authorId: 'equipe-monarca', excerpt: 'Manchas de umidade, goteiras e aumento no consumo podem indicar um vazamento.', leadImage: imageSet[0], relatedServiceSlug: 'caca-vazamentos', content: { intro: 'Nem todo vazamento fica visível. Observar mudanças no imóvel e no consumo de água pode ajudar a perceber o problema mais cedo.', sections: [{ heading: 'Observe manchas e umidade', body: 'Manchas persistentes, pintura estufada e cheiro de umidade podem indicar água escapando em uma parede, teto ou piso.' }, { heading: 'Fique atento ao consumo', body: 'Se a conta de água subir sem uma mudança no uso, vale investigar. Se houver vazamento ativo, feche o registro se for seguro e entre em contato com um profissional.' }] } },
  { slug: 'como-evitar-entupimentos', title: 'Cuidados simples para evitar entupimentos', category: 'Desentupimento', readTime: '3 min de leitura', publishDate: '2026-10-14', lastUpdated: '2026-10-14', authorId: 'equipe-monarca', excerpt: 'Alguns hábitos ajudam a reduzir resíduos acumulados em pias, ralos e tubulações.', leadImage: imageSet[1], relatedServiceSlug: 'desentupimento', content: { intro: 'Gordura, restos de comida e objetos inadequados podem se acumular nas tubulações e dificultar o escoamento.', sections: [{ heading: 'Cuide da pia da cozinha', body: 'Evite despejar óleo e gordura no ralo. Espere esfriar e descarte em recipiente apropriado.' }, { heading: 'Proteja ralos e vasos', body: 'Use telas nos ralos para reter cabelos e resíduos. No vaso sanitário, descarte apenas papel higiênico e itens próprios para o encanamento.' }] } },
];

// Dados centralizados — altere aqui telefone, links e textos de contato.

const PHONE_E164 = '5511941814027'

export const wa = (message?: string) =>
  `https://wa.me/${PHONE_E164}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const site = {
  name: 'Shin Conceito Institute',
  professional: 'Dra. Patrícia Silva',
  area: 'Estética e Envelhecimento',
  city: 'Salto • São Paulo',
  phoneDisplay: '(11) 94181-4027',
  phoneHref: 'tel:+5511941814027',
  instagramHandle: '@eu.patriciasilva_hof',
  instagram:
    'https://www.instagram.com/eu.patriciasilva_hof?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==',
  whatsapp: wa(),
  whatsappAgendar: wa('Olá, gostaria de agendar uma avaliação na Shin Conceito Institute.'),
  whatsappConhecer: wa('Olá, gostaria de conhecer melhor os atendimentos da Shin Conceito Institute.'),
  address: {
    line1: 'Rua Nove de Julho, 709, Centro',
    line2: 'Salto, SP, 13322-000',
    building: 'Condomínio Edifício Novo Centro',
  },
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Rua+Nove+de+Julho+709+Centro+Salto+SP',
  mapsEmbed:
    'https://www.google.com/maps?q=Rua+Nove+de+Julho,+709+-+Centro,+Salto+-+SP,+13322-000&output=embed',
  reviewsCount: 22,
}

export const nav = [
  { id: 'inicio', label: 'Início' },
  { id: 'tratamentos', label: 'Tratamentos' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'dra-patricia', label: 'Dra. Patrícia' },
  { id: 'clinica', label: 'A clínica' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'onde-estamos', label: 'Onde estamos' },
] as const

export const testimonials = [
  {
    name: 'Kelly Silva',
    text: 'Excelente profissional, capacitada, cuidadosa, entrega o melhor resultado.',
  },
  {
    name: 'Patricia Guedes de Oliveira',
    text: 'Os resultados são incríveis, e a experiência é sempre maravilhosa.',
  },
  {
    name: 'Andressa Fernandes',
    text: 'Maravilhosa como profissional como pessoa. Trabalho impecável. Recomendo muito.',
  },
]

export type ServiceKey =
  | 'avaliacao'
  | 'harmonizacao'
  | 'bioestimulacao'
  | 'biorregeneracao'
  | 'toxina'
  | 'preenchimento'
  | 'skinbooster'
  | 'microagulhamento'
  | 'limpeza'
  | 'semAgulhas'

// Serviços da Shin Conceito Institute (sem preços, protocolos ou promessas de resultado).
export type Category = 'Avaliação' | 'Facial' | 'Pele'

export const services: { key: ServiceKey; category: Category; title: string; tag: string; text: string }[] = [
  {
    key: 'avaliacao',
    category: 'Avaliação',
    title: 'Avaliação Individualizada',
    tag: 'Primeiro passo',
    text: 'Uma análise estratégica para entender seus traços, sua história e seus objetivos, e definir um planejamento personalizado.',
  },
  {
    key: 'harmonizacao',
    category: 'Facial',
    title: 'Harmonização Facial Natural',
    tag: 'Face',
    text: 'Uma abordagem que busca valorizar o equilíbrio facial, respeitando os traços e as características individuais.',
  },
  {
    key: 'bioestimulacao',
    category: 'Pele',
    title: 'Bioestimulação Estratégica',
    tag: 'Estímulo',
    text: 'Cuidados voltados ao estímulo de processos naturais da pele, com planejamento individualizado.',
  },
  {
    key: 'biorregeneracao',
    category: 'Pele',
    title: 'Biorregeneração da Pele',
    tag: 'Pele',
    text: 'Uma abordagem direcionada ao cuidado e à qualidade da pele, considerando suas necessidades e particularidades.',
  },
  {
    key: 'toxina',
    category: 'Facial',
    title: 'Toxina Botulínica',
    tag: 'Feminina & masculina',
    text: 'Aplicação com foco em naturalidade, para mulheres e homens, conforme avaliação individualizada.',
  },
  // ⚠ Confirmar com a Dra. Patrícia se estes tratamentos fazem parte do atendimento antes de publicar.
  {
    key: 'preenchimento',
    category: 'Facial',
    title: 'Preenchimento Labial',
    tag: 'Lábios',
    text: 'Contorno e hidratação dos lábios com resultado delicado, respeitando as proporções do rosto.',
  },
  {
    key: 'skinbooster',
    category: 'Pele',
    title: 'Skinbooster',
    tag: 'Hidratação',
    text: 'Hidratação profunda que contribui para uma pele com mais viço e luminosidade.',
  },
  {
    key: 'microagulhamento',
    category: 'Pele',
    title: 'Microagulhamento',
    tag: 'Textura',
    text: 'Estímulo da pele voltado à melhora da textura e do aspecto de marcas, conforme indicação.',
  },
  {
    key: 'limpeza',
    category: 'Pele',
    title: 'Limpeza de Pele',
    tag: 'Cuidado',
    text: 'Higienização profunda com cuidado e conforto, preparando a pele para os demais tratamentos.',
  },
  {
    key: 'semAgulhas',
    category: 'Pele',
    title: 'Tratamentos sem Agulhas',
    tag: 'Conforto',
    text: 'Opções para cuidar da pele sem agulhas, para quem não se sente confortável com elas.',
  },
]

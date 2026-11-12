// Fotos reais da clínica ficam em src/assets/img (`src`).
// `id` aponta para foto do Unsplash; hoje todas as fotos usam `src` (arquivos reais).
import resDerretimento from '../assets/img/resultado-derretimento.webp'
import resTesta from '../assets/img/resultado-testa.webp'
import resLabios from '../assets/img/resultado-labios.webp'
import resFirmeza from '../assets/img/resultado-firmeza.webp'
import resContorno from '../assets/img/resultado-contorno.webp'
import resPele from '../assets/img/resultado-pele.webp'
import svAvaliacao from '../assets/img/servico-avaliacao.webp'
import svHarmonizacao from '../assets/img/servico-harmonizacao.webp'
import svBioestimulacao from '../assets/img/servico-bioestimulacao.webp'
import svBiorregeneracao from '../assets/img/servico-biorregeneracao.webp'
import svToxina from '../assets/img/servico-toxina.webp'
import svPreenchimento from '../assets/img/servico-preenchimento.webp'
import svSkinbooster from '../assets/img/servico-skinbooster.webp'
import svMicroagulhamento from '../assets/img/servico-microagulhamento.webp'
import svLimpeza from '../assets/img/servico-limpeza.webp'
import svSemAgulhas from '../assets/img/servico-sem-agulhas.webp'
import procAplicacao from '../assets/img/procedimento-aplicacao.webp'
import procMarcacao from '../assets/img/procedimento-marcacao.webp'
import clinicaAtendimento from '../assets/img/clinica-atendimento.webp'
import ambSala from '../assets/img/ambiente-sala.jpg'
import ambBancada from '../assets/img/ambiente-bancada.jpg'
import ambVitrine from '../assets/img/ambiente-vitrine.jpg'
import ambCertificados from '../assets/img/ambiente-certificados.jpg'

export type Photo = { id?: string; src?: string; alt: string; pos?: string }
export type GalleryPhoto = Photo & { title: string; text: string }

export const unsplash = (id: string, w: number, q = 72) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`

export const photos = {
  // Catálogo de serviços
  avaliacao: { src: svAvaliacao, alt: 'Rosto de paciente visto de perfil, durante a avaliação facial' },
  harmonizacao: { src: svHarmonizacao, alt: 'Rosto de paciente após o tratamento, com traços naturais', pos: '50% 35%' },
  bioestimulacao: { src: svBioestimulacao, alt: 'Paciente de olhos fechados, com marcações na pele do rosto e aplicadores durante o procedimento' },
  biorregeneracao: { src: svBiorregeneracao, alt: 'Paciente sorrindo, com a pele uniforme após o tratamento' },
  toxina: { src: svToxina, alt: 'Testa de paciente, lisa, após a aplicação' },
  preenchimento: { src: svPreenchimento, alt: 'Aplicação nos lábios feita com luvas e seringa', pos: '50% 40%' },
  skinbooster: { src: svSkinbooster, alt: 'Pele do rosto de paciente com viço, após o tratamento' },
  microagulhamento: { src: svMicroagulhamento, alt: 'Pele do rosto de paciente com textura uniforme, após o tratamento' },
  limpeza: { src: svLimpeza, alt: 'Pele do rosto de paciente vista de perfil' },
  semAgulhas: { src: svSemAgulhas, alt: 'Boca e queixo de paciente, com a pele cuidada' },
  // Experiência e agendamento
  ambiente: { src: ambSala, alt: 'Sala de atendimento da clínica, com cadeira de procedimento branca, luminária e quadros de harmonização facial na parede', pos: '50% 60%' },
  clinicaSala: { src: ambBancada, alt: 'Bancada da clínica com produtos de skincare e bandeja com copos e balas para as pacientes', pos: '50% 75%' },
  clinicaRecepcao: { src: ambVitrine, alt: 'Vitrine iluminada com produtos Anna Pegova, ao lado de parede ripada de madeira e uma planta', pos: '50% 45%' },
  agendamento: { src: ambCertificados, alt: 'Certificados da Dra. Patrícia Silva emoldurados, com a frase "Aqui tem Deus em cada detalhe" à frente' },
} satisfies Record<string, Photo>

// Galeria "Cuidado em cada detalhe": procedimentos e atendimento
export const gallery: GalleryPhoto[] = [
  { src: procAplicacao, pos: '60% 40%', alt: 'Paciente deitada de olhos fechados, com marcações e aplicadores no rosto, durante o procedimento', title: 'Técnica e precisão', text: 'Procedimentos com cuidado em cada detalhe.' },
  { src: clinicaAtendimento, pos: '50% 28%', alt: 'Dra. Patrícia Silva, de jaleco branco, abraçada a uma paciente, as duas sorrindo', title: 'Escuta atenta', text: 'Tempo para entender o que você deseja.' },
  { src: procMarcacao, pos: '70% 50%', alt: 'Marcações de planejamento feitas à caneta na região dos glúteos e coxas de uma paciente', title: 'Planejamento', text: 'Cada área é marcada antes do procedimento.' },
]

// Seção "Resultados". `ar` é a proporção da imagem (largura ÷ altura): mantém a foto inteira, sem cortes.
// `layout`: lado a lado, empilhado, ou `pronto` quando a foto já traz as etiquetas Antes/Depois.
// ⚠ Confirmar com a Dra. Patrícia os títulos e a autorização de cada paciente antes de publicar.
export type Result = { photo: Photo; title: string; ar: number; layout: 'lado' | 'empilhado' | 'pronto' }

export const results: Result[] = [
  { title: 'Derretimento facial', ar: 1.298, layout: 'pronto', photo: { src: resDerretimento, alt: 'Antes e depois de rosto feminino: à direita, a pele aparece mais uniforme e o contorno mais definido' } },
  { title: 'Linhas da testa', ar: 0.99, layout: 'empilhado', photo: { src: resTesta, alt: 'Antes e depois da testa: em cima, com linhas de expressão marcadas; embaixo, com a pele lisa' } },
  { title: 'Lábios', ar: 0.74, layout: 'empilhado', photo: { src: resLabios, alt: 'Antes e depois dos lábios de um homem: embaixo, os lábios aparecem com mais volume' } },
  { title: 'Firmeza', ar: 1.434, layout: 'lado', photo: { src: resFirmeza, alt: 'Antes e depois de rosto feminino, com olhos cobertos: à direita, a pele aparece mais firme e com mais viço' } },
  { title: 'Contorno', ar: 1.44, layout: 'lado', photo: { src: resContorno, alt: 'Antes e depois de rosto feminino, com olhos cobertos: à direita, o contorno aparece mais definido' } },
  { title: 'Qualidade da pele', ar: 1.528, layout: 'lado', photo: { src: resPele, alt: 'Antes e depois de rosto feminino, com olhos cobertos: à direita, a pele aparece mais uniforme' } },
]

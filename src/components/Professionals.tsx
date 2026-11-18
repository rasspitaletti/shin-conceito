import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { site, wa } from '../data/site'
import { SectionLabel } from './SectionLabel'
import { Notch } from './Notch'
import portrait from '../assets/img/patricia-retrato.jpg'
import doctorPortrait from '../assets/img/medico-retrato.jpg'
import doctorOffice from '../assets/img/medico-consultorio.jpg'

const DOCTOR_NAME = 'Dr. Frederico Aguiar'

type Pro = {
  id: string
  name: string
  role: string
  bio: string[]
  areas: string[]
  cta: string
  message: string
  photo: ReactNode
}

const pros: Pro[] = [
  {
    id: 'dra-patricia',
    name: 'Dra. Patrícia Silva',
    role: 'Enfermeira · Estética e Cosmetologia Avançada',
    bio: [
      'A Dra. Patrícia Silva é enfermeira com formação em Estética e Cosmetologia Avançada, com atuação em harmonização facial natural, bioestimulação estratégica e biorregeneração da pele.',
      'Sua abordagem une conhecimento científico, planejamento individualizado e respeito às características de cada pessoa, valorizando a identidade e a naturalidade.',
    ],
    areas: ['Harmonização Facial Natural', 'Bioestimulação Estratégica', 'Biorregeneração da Pele'],
    cta: 'Agendar com a Dra. Patrícia',
    message: 'Olá, Dra. Patrícia! Gostaria de agendar uma avaliação na Shin Conceito Institute.',
    photo: (
      <>
        <Frame>
          <img
            data-parallax
            src={portrait}
            alt="Dra. Patrícia Silva, responsável pela Shin Conceito Institute"
            loading="lazy"
            width={900}
            height={900}
            className="absolute -top-[6%] left-0 h-[112%] w-full object-cover object-[50%_25%]"
          />
        </Frame>
        <div className="glass absolute bottom-5 left-5 z-[3] rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)] sm:left-7">
          <p className="text-[0.7rem] uppercase tracking-[0.08em] text-ink/75">Atendimento</p>
          <p className="mt-1 text-[1.05rem] leading-tight">individualizado</p>
        </div>
      </>
    ),
  },
  {
    id: 'medico',
    name: DOCTOR_NAME,
    role: 'Médico · Medicina de Família e Comunidade',
    bio: [
      'Médico pós-graduado em Medicina de Família e Comunidade (MFC) pela UNIFESP, oferece atendimento humanizado e integral, com foco na pessoa, não apenas na doença.',
      'Suas consultas são voltadas para Atenção Primária, Saúde Mental, promoção da saúde e bem-estar, incluindo investigação clínica e avaliação hormonal individualizada, com prevenção, diagnóstico preciso e acompanhamento contínuo.',
    ],
    areas: ['Atenção Primária', 'Saúde Mental', 'Avaliação Hormonal', 'Promoção da Saúde'],
    cta: 'Agendar consulta médica',
    message: `Olá! Gostaria de agendar uma consulta com o ${DOCTOR_NAME} na Shin Conceito Institute.`,
    photo: (
      <>
        <Frame>
          <img
            data-parallax
            src={doctorPortrait}
            alt={`${DOCTOR_NAME}, de terno escuro, sentado no consultório da Shin Conceito Institute`}
            loading="lazy"
            width={719}
            height={1280}
            className="absolute -top-[6%] left-0 h-[112%] w-full object-cover object-[50%_12%]"
          />
        </Frame>
        {/* segunda foto, de jaleco, sobreposta no canto */}
        <div className="absolute -bottom-6 right-4 z-[3] aspect-[3/4] w-[34%] overflow-hidden rounded-[1.1rem] shadow-[var(--shadow-lift)] ring-[5px] ring-tan transition-transform duration-700 ease-[var(--ease-soft)] group-hover:-translate-y-1.5 sm:right-6">
          <img
            src={doctorOffice}
            alt={`${DOCTOR_NAME} de jaleco azul e estetoscópio, sorrindo`}
            loading="lazy"
            width={504}
            height={896}
            className="h-full w-full object-cover object-[50%_22%]"
          />
        </div>
        <div className="glass absolute bottom-5 left-5 z-[3] max-w-[55%] rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)] sm:left-7">
          <p className="text-[0.7rem] uppercase tracking-[0.08em] text-ink/75">Médico</p>
          <p className="mt-1 text-[1.05rem] leading-tight">Cuidado integral</p>
          <p className="mt-0.5 text-[0.82rem] leading-tight text-ink/75">Saúde e bem-estar</p>
        </div>
      </>
    ),
  },
]

/** Moldura da foto principal: mesma proporção nos dois cards, zoom sutil no hover. */
function Frame({ children }: { children: ReactNode }) {
  return (
    <>
      <div aria-hidden="true" className="absolute -bottom-4 -left-4 h-full w-full rounded-[1.8rem] border border-ink/30 sm:-bottom-5 sm:-left-5" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-sand">
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-[var(--ease-soft)] group-hover:scale-[1.03]">
          {children}
        </div>
        <Notch corner="tr" bg="text-tan" w="40%" h="3.6rem" />
        <span className="absolute right-3 top-2.5 z-[3] text-[0.7rem] font-medium uppercase tracking-[0.08em] text-ink sm:right-5 sm:top-3.5">
          Salto • SP
        </span>
      </div>
    </>
  )
}

export function Professionals() {
  return (
    <section id="profissionais" className="section-y bg-tan" aria-labelledby="pro-title">
      <div className="container-x">
        <div data-reveal className="grid items-end gap-8 lg:grid-cols-[1fr_26rem] lg:gap-12">
          <div>
            <SectionLabel n="01">Nossos profissionais</SectionLabel>
            <h2 id="pro-title" className="title mt-6 text-[length:var(--text-h2)]">
              Quem cuida <span className="accent accent-dark">de você.</span>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-ink/75">
            Na {site.name}, estética e cuidado médico caminham juntos, com atendimento próximo e planejado para cada
            pessoa.
          </p>
        </div>

        <div data-stagger className="mt-14 grid gap-20 md:mt-20 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {pros.map((p) => (
            <article key={p.id} id={p.id} aria-labelledby={`${p.id}-nome`} className="group flex flex-col">
              <div className="relative ml-4 sm:ml-5">{p.photo}</div>

              <div className="mt-12 flex items-center gap-4 border-y border-ink/10 py-5">
                <span className="h-12 w-px bg-gold" aria-hidden="true" />
                <div>
                  <h3 id={`${p.id}-nome`} className="text-[1.5rem] font-light leading-none tracking-[-0.03em]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[0.82rem] text-ink/75">{p.role}</p>
                </div>
              </div>

              <div className="mt-7 space-y-4 text-[1rem] leading-relaxed text-ink/75">
                {p.bio.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {p.areas.map((a) => (
                  <li key={a} className="rounded-full border border-ink/12 bg-white/70 px-4 py-2 text-[0.8rem]">
                    {a}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <a href={wa(p.message)} target="_blank" rel="noopener noreferrer" className="btn btn-dark max-sm:w-full">
                  {p.cta}
                  <ArrowRight size={16} strokeWidth={1.5} className="btn-icon" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs text-ink/75">{site.area} · {site.city}</p>
      </div>
    </section>
  )
}

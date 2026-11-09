import { ArrowRight } from 'lucide-react'
import { site, wa } from '../data/site'
import { SectionLabel } from './SectionLabel'
import { Notch } from './Notch'
import portrait from '../assets/img/patricia-retrato.webp'

const areas = ['Harmonização Facial Natural', 'Bioestimulação Estratégica', 'Biorregeneração da Pele']

export function About() {
  return (
    <section id="dra-patricia" className="section-y bg-tan" aria-labelledby="sobre-title">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* fotos reais da Dra. Patrícia */}
        <div data-reveal className="relative">
          <div aria-hidden="true" className="absolute -bottom-4 -left-4 h-full w-full rounded-[1.8rem] border border-ink/30 sm:-bottom-5 sm:-left-5" />
          <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.8rem] bg-sand">
            <img
              data-parallax
              src={portrait}
              alt="Dra. Patrícia Silva, responsável pela Shin Conceito Institute"
              loading="lazy"
              width={1139}
              height={1286}
              className="absolute -top-[6%] left-0 h-[112%] w-full object-cover object-[50%_25%]"
            />
            <Notch corner="tr" bg="text-tan" w="40%" h="3.6rem" />
            <span className="absolute right-3 top-2.5 z-[3] text-[0.7rem] font-medium uppercase tracking-[0.08em] text-ink sm:right-5 sm:top-3.5">
              Salto • SP
            </span>
          </div>
          <div className="glass absolute bottom-5 left-5 rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)] sm:left-8">
            <p className="text-[0.7rem] uppercase tracking-[0.08em] text-ink/75">Atendimento</p>
            <p className="mt-1 text-[1.05rem] leading-tight">individualizado</p>
          </div>
        </div>

        {/* texto editorial */}
        <div data-reveal>
          <SectionLabel n="03">Quem cuida de você</SectionLabel>
          <h2 id="sobre-title" className="title mt-6 text-[length:var(--text-h2)]">
            Conhecimento e sensibilidade <span className="accent accent-dark">para cuidar da sua beleza.</span>
          </h2>

          <div className="mt-9 flex items-center gap-4 border-y border-ink/10 py-5">
            <span className="h-12 w-px bg-gold" aria-hidden="true" />
            <div>
              <p className="text-[1.5rem] font-light leading-none tracking-[-0.03em]">Dra. Patrícia Silva</p>
              <p className="mt-2 text-[0.82rem] text-ink/75">Enfermeira · Estética e Cosmetologia Avançada</p>
            </div>
          </div>

          <div className="mt-7 space-y-4 text-[1rem] leading-relaxed text-ink/75">
            <p>
              A Dra. Patrícia Silva é enfermeira com formação em Estética e Cosmetologia Avançada, com atuação em
              harmonização facial natural, bioestimulação estratégica e biorregeneração da pele.
            </p>
            <p>
              Sua abordagem une conhecimento científico, planejamento individualizado e respeito às características de
              cada pessoa, valorizando a identidade e a naturalidade.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {areas.map((a) => (
              <li key={a} className="rounded-full border border-ink/12 bg-white/70 px-4 py-2 text-[0.8rem]">
                {a}
              </li>
            ))}
          </ul>

          <a
            href={wa('Olá, Dra. Patrícia! Gostaria de agendar uma avaliação na Shin Conceito Institute.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark mt-10"
          >
            Agendar com a Dra. Patrícia
            <ArrowRight size={16} strokeWidth={1.5} className="btn-icon" />
          </a>
          <p className="mt-4 text-xs text-ink/75">{site.area} · {site.city}</p>
        </div>
      </div>
    </section>
  )
}

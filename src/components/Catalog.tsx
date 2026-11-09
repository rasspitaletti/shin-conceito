import { useMemo, useState } from 'react'
import { CalendarDays, ChevronDown, ClipboardList, Droplet, Droplets, Feather, Gem, Heart, ScanFace, Smile, Sparkles, Waves } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services, wa, type Category, type ServiceKey } from '../data/site'
import { photos } from '../data/photos'
import { Img } from './Img'
import { SectionLabel } from './SectionLabel'
import { WhatsAppIcon } from './BrandIcons'

const icons: Record<ServiceKey, LucideIcon> = {
  avaliacao: ClipboardList,
  harmonizacao: ScanFace,
  bioestimulacao: Sparkles,
  biorregeneracao: Droplets,
  toxina: Gem,
  preenchimento: Smile,
  skinbooster: Droplet,
  microagulhamento: Waves,
  limpeza: Heart,
  semAgulhas: Feather,
}

const INITIAL = 4

const filters: ('Todos' | Category)[] = ['Todos', 'Facial', 'Pele', 'Avaliação']

/** Catálogo de tratamentos com filtros (formato de cards com foto, categoria e agendamento). */
export function Catalog() {
  const [active, setActive] = useState<'Todos' | Category>('Todos')
  const [showAll, setShowAll] = useState(false)
  const count = (f: 'Todos' | Category) => (f === 'Todos' ? services.length : services.filter((s) => s.category === f).length)
  const filtered = useMemo(() => (active === 'Todos' ? services : services.filter((s) => s.category === active)), [active])
  const list = showAll ? filtered : filtered.slice(0, INITIAL)
  const hidden = filtered.length - list.length

  return (
    <section id="tratamentos" className="section-y" aria-labelledby="cat-title">
      <div className="container-x">
        <div data-reveal className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel n="01">Catálogo</SectionLabel>
            <h2 id="cat-title" className="title mt-6 text-[length:var(--text-h2)]">
              Nossos <span className="accent accent-dark">tratamentos</span>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted lg:justify-self-end lg:text-right">
            Cada indicação nasce de uma avaliação individualizada com a Dra. Patrícia Silva, de acordo com as
            necessidades de cada pessoa.
          </p>
        </div>

        {/* filtros */}
        <div className="mt-12 flex flex-wrap items-center gap-2.5">
          <div role="tablist" aria-label="Filtrar tratamentos" className="flex flex-wrap gap-2.5">
            {filters.map((f) => {
              const on = active === f
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(f)}
                  className={`flex h-11 items-center gap-2 rounded-full border px-5 text-[0.78rem] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                    on ? 'border-green bg-green text-cream' : 'border-ink/20 text-ink hover:border-ink/50'
                  }`}
                >
                  {f}
                  <span className={`text-[0.66rem] ${on ? 'text-sage-soft' : 'text-muted'}`}>{count(f)}</span>
                </button>
              )
            })}
          </div>
          <p className="ml-auto hidden text-sm text-muted sm:block">{filtered.length} tratamentos</p>
        </div>

        {/* cards */}
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((sv) => {
            const Icon = icons[sv.key]
            return (
              <li key={sv.key} className="min-w-0">
                <article className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-white shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <div className="img-zoom relative h-52 overflow-hidden bg-olive">
                    <Img photo={photos[sv.key]} width={640} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="h-full w-full object-cover" />
                    <span className="glass absolute right-3 top-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.66rem] font-medium uppercase tracking-[0.12em] text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                      {sv.category}
                    </span>
                    <span className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-xl bg-green/90 text-cream backdrop-blur-sm">
                      <Icon size={19} strokeWidth={1.3} aria-hidden="true" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted">
                      {sv.tag}
                    </p>
                    <h3 className="title mt-3 text-[1.6rem] normal-case leading-[1.05] tracking-normal">{sv.title}</h3>
                    <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">{sv.text}</p>

                    <div className="mt-auto flex items-center gap-2.5 pt-6">
                      <a
                        href={wa(`Olá, gostaria de agendar ${sv.title} na Shin Conceito Institute.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark flex-1 !min-h-11 !px-4 text-[0.74rem] uppercase tracking-[0.14em]"
                        style={{ background: 'var(--color-green)' }}
                      >
                        <CalendarDays size={15} strokeWidth={1.4} /> Agendar
                      </a>
                      <a
                        href={wa(`Olá, gostaria de saber mais sobre ${sv.title} na Shin Conceito Institute.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Tirar dúvidas sobre ${sv.title} pelo WhatsApp`}
                        className="round h-11 w-11 shrink-0 border border-ink/20 text-ink hover:border-green hover:bg-green hover:text-cream"
                      >
                        <WhatsAppIcon size={17} />
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>

        {(hidden > 0 || showAll) && filtered.length > INITIAL && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                if (showAll) document.getElementById('tratamentos')?.scrollIntoView({ behavior: 'smooth' })
                setShowAll((v) => !v)
              }}
              aria-expanded={showAll}
              className="btn btn-line !min-h-12 !px-7 text-[0.76rem] uppercase tracking-[0.14em]"
            >
              {showAll ? 'Mostrar menos' : `Ver todos os tratamentos (${filtered.length})`}
              <ChevronDown size={16} strokeWidth={1.5} className={`transition-transform duration-500 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

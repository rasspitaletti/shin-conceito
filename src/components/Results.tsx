import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { results, type Result } from '../data/photos'
import { site } from '../data/site'
import { Img } from './Img'
import { SectionLabel } from './SectionLabel'

const chip = 'glass-dark absolute rounded-full px-3 py-1 text-[0.66rem] font-medium uppercase tracking-[0.12em] text-cream'

function Labels({ layout }: { layout: Result['layout'] }) {
  if (layout === 'pronto') return null
  const side = layout === 'lado'
  return (
    <>
      <span className={`${chip} ${side ? 'bottom-3 left-3' : 'left-3 top-3'}`}>Antes</span>
      <span className={`${chip} ${side ? 'bottom-3 left-[calc(50%+0.75rem)]' : 'left-3 top-[calc(50%+0.75rem)]'}`}>Depois</span>
    </>
  )
}

/** Antes e depois. As fotos de cada linha têm a mesma altura e aparecem inteiras, sem cortes. */
export function Results() {
  return (
    <section id="resultados" aria-labelledby="res-title">
      <div className="frame dark-texture overflow-hidden text-cream">
        <div className="container-x section-y">
          <div data-reveal className="grid items-end gap-8 lg:grid-cols-[1fr_24rem] lg:gap-12">
            <div>
              <SectionLabel n="02" light>Resultados</SectionLabel>
              <h2 id="res-title" className="mega mt-7 text-[clamp(2.1rem,1.2rem+3.6vw,4.4rem)]">
                <span className="block">Menos exagero.</span>
                <span className="block">Mais equilíbrio.</span>
                <span className="accent block">Mais identidade.</span>
              </h2>
            </div>
            <p className="max-w-md leading-relaxed text-cream/70">
              Com o passar do tempo, podem surgir alterações na firmeza, no contorno e na qualidade da pele. Cada plano
              nasce de uma avaliação individualizada, para cuidar disso respeitando os seus traços.
            </p>
          </div>

          {[results.slice(0, 3), results.slice(3)].map((row, i) => (
            <ul key={i} data-stagger className={`flex flex-col gap-7 md:flex-row md:gap-4 ${i ? 'mt-7 md:mt-8' : 'mt-14'}`}>
              {row.map((r) => (
                <li
                  key={r.title}
                  style={{ '--ar': r.ar } as CSSProperties}
                  className="w-full min-w-0 max-md:mx-auto max-md:max-w-[30rem] md:[flex:var(--ar)_1_0%]"
                >
                  <figure>
                    <div className="relative aspect-(--ar) overflow-hidden rounded-[1.4rem] bg-olive">
                      <Img photo={r.photo} sizes="(min-width:768px) 40vw, 100vw" className="h-full w-full object-cover" />
                      <Labels layout={r.layout} />
                    </div>
                    <figcaption className="title mt-3 text-[1.35rem] leading-tight">{r.title}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          ))}

          <div data-reveal className="mt-14 flex flex-col justify-between gap-7 border-t border-cream/10 pt-10 lg:flex-row lg:items-center">
            <div>
              <p className="title text-[clamp(1.5rem,1.2rem+1.3vw,2.2rem)]">
                Sua transformação começa <span className="accent">antes do primeiro procedimento.</span>
              </p>
              <p className="mt-3 max-w-xl text-[0.85rem] leading-relaxed text-cream/60">
                Resultados individuais. Cada pessoa responde de uma forma, e a indicação depende de avaliação.
              </p>
            </div>
            <a href={site.whatsappAgendar} target="_blank" rel="noopener noreferrer" className="btn btn-sand shrink-0 self-start lg:self-auto">
              Agendar avaliação
              <ArrowRight size={16} strokeWidth={1.5} className="btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

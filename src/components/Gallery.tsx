import { gallery } from '../data/photos'
import { site } from '../data/site'
import { Img } from './Img'
import { SectionLabel } from './SectionLabel'

// mosaico no desktop: uma foto larga e duas altas
const span = ['lg:col-span-2 lg:row-span-2', 'lg:col-span-1 lg:row-span-2', 'lg:col-span-1 lg:row-span-2']

/** Galeria: procedimentos e atendimento, cada foto com um pequeno texto. */
export function Gallery() {
  return (
    <section className="pb-[var(--space-section)]" aria-labelledby="galeria-title">
      <div className="container-x">
        <div data-reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Cuidados estéticos</SectionLabel>
            <h2 id="galeria-title" className="title mt-6 max-w-2xl text-[length:var(--text-h2)]">
              Cuidado em <span className="accent accent-dark">cada detalhe</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              Da chegada ao pós-atendimento, cada momento é pensado para que você se sinta acolhida, segura e à vontade.
            </p>
          </div>
          <a href={site.whatsappConhecer} target="_blank" rel="noopener noreferrer" className="btn btn-dark self-start md:self-auto">
            Quero saber mais
          </a>
        </div>

        {/* mobile: carrossel com rolagem lateral; desktop: mosaico */}
        <ul
          data-stagger
          className="-mx-[clamp(1.25rem,0.7rem+2.6vw,2.75rem)] mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-[clamp(1.25rem,0.7rem+2.6vw,2.75rem)] pb-2 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-flow-dense lg:auto-rows-[270px] lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:px-0"
        >
          {gallery.map((p, i) => (
            <li
              key={p.title}
              className={`img-zoom group relative h-[360px] w-[74%] shrink-0 snap-start overflow-hidden rounded-[1.4rem] bg-olive sm:w-[44%] lg:h-auto lg:w-auto ${span[i]}`}
            >
              <Img photo={p} width={800} sizes="(min-width:1024px) 30vw, 74vw" className="h-full w-full object-cover" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest/75 via-forest/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                <p className="title text-[1.35rem] leading-tight">{p.title}</p>
                <p className="mt-1.5 max-w-[16rem] text-[0.85rem] leading-snug text-cream/80">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

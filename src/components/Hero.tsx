import { ArrowRight, FlaskConical, Leaf, UserRound } from 'lucide-react'
import { site } from '../data/site'
import heroImg from '../assets/img/hero-beleza.webp'
import heroMobile from '../assets/img/hero-beleza-mobile.webp'
import portrait from '../assets/img/patricia-retrato.jpg'
import { Emblem } from './Logo'

const trust = [
  { icon: Leaf, label: 'Beleza\nnatural' },
  { icon: FlaskConical, label: 'Base\ncientífica' },
  { icon: UserRound, label: 'Plano\nindividual' },
]

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="pt-[var(--frame)]">
      <div className="frame dark-texture relative isolate min-h-[calc(100svh-2*var(--frame))] overflow-hidden text-cream">
        {/* mobile e tablet: foto reta e centralizada atrás do título */}
        <div className="absolute inset-x-0 top-0 -z-10 h-[72%] [mask-image:linear-gradient(to_bottom,black_55%,transparent)] lg:hidden">
          <img src={heroMobile} alt="Retrato de mulher com pele natural e iluminada" width={1497} height={1062} fetchPriority="high" className="h-full w-full object-cover object-[16%_28%]" />
          <div aria-hidden="true" className="absolute inset-0 bg-forest/55" />
        </div>

        {/* desktop: foto à direita, atrás do título */}
        <div data-hero-img className="absolute inset-0 -z-10 hidden lg:left-[36%] lg:block">
          <img src={heroImg} alt="Retrato de mulher com pele natural e iluminada" width={2250} height={885} fetchPriority="high" className="h-full w-full object-cover object-[78%_30%]" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-forest from-[36%] via-forest/40 via-[52%] to-transparent lg:block" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 hidden h-40 bg-gradient-to-b from-forest/70 to-transparent lg:block" />

        <div className="container-x relative flex min-h-[calc(100svh-2*var(--frame))] flex-col pb-8 pt-[calc(var(--header-h)+2.5rem)] lg:min-h-[calc(100svh-2*var(--frame))] lg:!px-[clamp(1.25rem,0.7rem+2.6vw,3.5rem)] lg:pt-[calc(var(--header-h)+2.75rem)]">
          <p data-hero-fade className="mb-7 flex items-center gap-4 text-[0.66rem] uppercase tracking-[0.2em] text-gold-soft sm:text-[0.72rem]">
            Shin Conceito Institute · Salto
          </p>
          <h1 id="hero-title" className="mega -mt-[0.12em] text-[length:var(--text-mega)]">
            <span className="block overflow-hidden pb-[0.04em] pt-[0.12em]"><span data-hero-line className="block text-cream">Beleza que</span></span>
            <span className="block overflow-hidden pb-[0.04em] pt-[0.12em]"><span data-hero-line className="block text-cream">respeita</span></span>
            <span className="block overflow-hidden pb-[0.04em] pt-[0.12em]"><span data-hero-line className="accent block">sua essência</span></span>
          </h1>

          <p data-hero-fade className="narrow mt-8 max-w-md text-[0.8rem] text-cream/85 sm:text-[0.88rem]">
            Ciência, naturalidade e<br />cuidado individualizado.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a data-hero-btn href={site.whatsappAgendar} target="_blank" rel="noopener noreferrer" className="btn btn-sand">
              Agendar avaliação
              <ArrowRight size={16} strokeWidth={1.5} className="btn-icon" />
            </a>
            <a data-hero-btn href="#tratamentos" className="btn btn-line-light">
              Ver tratamentos
            </a>
          </div>

          <div className="mt-auto flex flex-col gap-8 pt-10 lg:pt-14 lg:flex-row lg:items-end lg:justify-between">
            <ul data-hero-fade className="flex gap-7 sm:gap-10">
              {trust.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <Icon size={19} strokeWidth={1.2} className="shrink-0 text-gold-soft" aria-hidden="true" />
                  <span className="whitespace-pre-line text-[0.68rem] leading-tight text-cream/75">{label}</span>
                </li>
              ))}
            </ul>

            {/* cartões de vidro, como os da referência */}
            <div data-hero-fade className="flex flex-col gap-3 sm:flex-row lg:mr-2">
              <a
                href="#dra-patricia"
                className="glass-dark group flex items-center gap-4 rounded-[1.3rem] p-2.5 pr-5 transition hover:bg-moss/80"
              >
                <img src={portrait} alt="" width={72} height={72} className="h-[72px] w-[72px] rounded-[0.9rem] object-cover object-[50%_22%]" />
                <span>
                  <span className="block text-[0.95rem] leading-tight">Dra. Patrícia Silva</span>
                  <span className="mt-1 block text-[0.72rem] leading-snug text-cream/65">Estética &amp; Envelhecimento</span>
                  <span className="mt-2 flex items-center gap-1 text-[0.72rem] text-sage-soft">
                    Conheça <ArrowRight size={13} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </a>
              <a
                href="#depoimentos"
                className="glass-dark hidden items-center gap-4 sm:flex rounded-[1.3rem] p-2.5 pr-5 transition hover:bg-moss/80"
              >
                <span className="grid h-[72px] w-[72px] place-items-center rounded-[0.9rem] bg-forest/60">
                  <Emblem className="h-12 w-12" />
                </span>
                <span>
                  <span className="block text-[1.9rem] font-light leading-none tracking-[-0.04em]">{site.reviewsCount}</span>
                  <span className="mt-1 block text-[0.72rem] leading-snug text-cream/65">avaliações no Google</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

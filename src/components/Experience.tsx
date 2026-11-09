import { Ear, FlaskConical, Leaf, Route } from 'lucide-react'
import { photos } from '../data/photos'
import { Img } from './Img'
import { Notch } from './Notch'
import { SectionLabel } from './SectionLabel'

const items = [
  { icon: Ear, title: 'Escuta atenta', text: 'O cuidado começa por entender sua história e o que você deseja.' },
  { icon: Route, title: 'Planejamento individualizado', text: 'Cada plano é desenhado conforme a avaliação de cada pessoa.' },
  { icon: Leaf, title: 'Naturalidade', text: 'Valorizar seus traços, sem padronizar rostos.' },
  { icon: FlaskConical, title: 'Ciência e segurança', text: 'Conhecimento técnico como base de cada decisão.' },
]

/** Diferenciais e experiência de atendimento. */
export function Experience() {
  return (
    <section id="clinica" aria-labelledby="exp-title">
      <div className="frame green-texture overflow-hidden text-cream">
        <div className="container-x section-y">
          <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div data-reveal>
              <SectionLabel n="04" light>Experiência Shin</SectionLabel>
              <h2 id="exp-title" className="mega mt-7 text-[clamp(2.6rem,1.4rem+5vw,5.8rem)]">
                <span className="block">Um cuidado</span>
                <span className="block">que vai além</span>
                <span className="accent block">da estética</span>
              </h2>
              <p className="mt-8 max-w-md leading-relaxed text-cream/70">
                Cada pessoa possui sua própria história, seus traços e sua identidade. Na Shin Conceito Institute, o
                cuidado começa pela escuta e pelo respeito à individualidade.
              </p>
            </div>

            <div data-reveal className="relative aspect-[4/4.4] overflow-hidden rounded-[1.8rem] bg-olive">
              <Img photo={photos.ambiente} width={900} sizes="(min-width:1024px) 40vw, 100vw" parallax className="absolute -top-[6%] left-0 h-[112%] w-full object-cover" />
              <Notch corner="bl" bg="text-green" w="46%" h="3.6rem" />
            </div>
          </div>

          <div data-reveal className="mt-14 grid gap-3 md:grid-cols-[1.55fr_1fr] lg:mt-20">
            <figure className="img-zoom relative h-[clamp(14rem,30vw,26rem)] overflow-hidden rounded-[1.4rem] bg-olive">
              <Img photo={photos.clinicaSala} width={1100} sizes="(min-width:768px) 60vw, 100vw" className="h-full w-full object-cover" />
              <figcaption className="glass-dark absolute left-4 top-4 max-w-[220px] rounded-2xl p-4 text-[0.95rem] leading-snug">
                Um espaço pensado para o seu bem-estar.
              </figcaption>
            </figure>
            <div className="img-zoom relative h-[clamp(14rem,30vw,26rem)] overflow-hidden rounded-[1.4rem] bg-olive">
              <Img photo={photos.clinicaRecepcao} width={800} sizes="(min-width:768px) 40vw, 100vw" className="h-full w-full object-cover" />
            </div>
          </div>

          <ul data-stagger className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {items.map(({ icon: Icon, title, text }) => (
              <li key={title} className="group rounded-[1.4rem] border border-cream/10 bg-green-mid/70 p-6 transition-colors duration-500 hover:bg-green-mid">
                <Icon size={24} strokeWidth={1.1} className="text-gold-soft transition-transform duration-500 group-hover:-translate-y-0.5" aria-hidden="true" />
                <h3 className="title mt-8 text-[1.45rem]">{title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-cream/60">{text}</p>
              </li>
            ))}
          </ul>

          <blockquote data-reveal className="mt-20 border-t border-cream/10 pt-12 lg:mt-28">
            <p className="title max-w-5xl text-[clamp(1.9rem,1.2rem+3vw,3.9rem)]">
              A sua beleza não precisa ser transformada. <span className="accent">Ela merece ser valorizada.</span>
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

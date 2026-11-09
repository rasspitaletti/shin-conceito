import { ArrowRight } from 'lucide-react'
import { site } from '../data/site'
import { photos } from '../data/photos'
import { Img } from './Img'
import { Notch } from './Notch'
import { WhatsAppIcon } from './BrandIcons'

export function CtaBooking() {
  return (
    <section aria-labelledby="cta-title" className="pb-[var(--frame)]">
      <div className="frame green-texture relative isolate overflow-hidden text-cream">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div data-reveal className="container-x !mx-0 flex flex-col justify-center py-16 sm:py-20 lg:!px-[clamp(1.25rem,0.7rem+2.6vw,3.5rem)] lg:py-28">
            <p className="eyebrow text-gold-soft">Agende sua avaliação</p>
            <h2 id="cta-title" className="mega mt-7 text-[clamp(2.5rem,1.3rem+4.6vw,5.4rem)]">
              <span className="block">Sua beleza</span>
              <span className="block">merece um</span>
              <span className="accent block">cuidado único</span>
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-cream/70">
              Conheça uma abordagem que une ciência, naturalidade e respeito à sua identidade.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={site.whatsappAgendar} target="_blank" rel="noopener noreferrer" className="btn btn-sand">
                <WhatsAppIcon size={17} /> Agendar minha avaliação
                <ArrowRight size={16} strokeWidth={1.5} className="btn-icon" />
              </a>
              <a href={site.phoneHref} className="btn btn-line-light">
                {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="relative min-h-[340px] p-3 lg:p-4">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[1.6rem] bg-olive">
              <Img photo={photos.agendamento} width={900} sizes="(min-width:1024px) 40vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
              <Notch corner="tl" bg="text-green" w="42%" h="3.4rem" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

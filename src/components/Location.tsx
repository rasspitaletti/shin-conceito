import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { site } from '../data/site'
import { SectionLabel } from './SectionLabel'
import { InstagramIcon, WhatsAppIcon } from './BrandIcons'

export function Location() {
  const info = [
    {
      icon: MapPin,
      label: 'Endereço',
      body: (
        <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="underline decoration-ink/20 underline-offset-4 transition hover:decoration-ink">
          {site.address.line1}
          <br />
          {site.address.line2}
          <br />
          {site.address.building}
        </a>
      ),
    },
    {
      icon: Phone,
      label: 'Telefone e WhatsApp',
      body: (
        <a href={site.phoneHref} className="transition hover:text-olive">
          {site.phoneDisplay}
        </a>
      ),
    },
    { icon: Clock, label: 'Atendimento', body: <span>Com horário agendado. Consulte a disponibilidade pelo WhatsApp.</span> },
  ]

  return (
    <section id="onde-estamos" className="pb-[var(--space-section)]" aria-labelledby="loc-title">
      <div className="container-x">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal className="flex flex-col rounded-[2rem] bg-white p-7 sm:p-10">
            <SectionLabel n="06">Localização</SectionLabel>
            <h2 id="loc-title" className="title mt-6 text-[length:var(--text-h2)]">
              Onde <span className="accent accent-dark">estamos</span>
            </h2>
            <p className="mt-4 text-muted">{site.name}, com a {site.professional}, no Centro de Salto, SP.</p>

            <dl className="mt-9 space-y-5">
              {info.map(({ icon: Icon, label, body }) => (
                <div key={label} className="flex gap-4 border-t border-ink/8 pt-5">
                  <span className="round h-10 w-10 shrink-0 bg-paper">
                    <Icon size={17} strokeWidth={1.3} aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-[0.72rem] uppercase tracking-[0.08em] text-muted">{label}</dt>
                    <dd className="mt-1 leading-relaxed">{body}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-auto flex flex-wrap gap-2.5 pt-10">
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                <Navigation size={15} strokeWidth={1.5} /> Como chegar
              </a>
              <a href={site.whatsappConhecer} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                <WhatsAppIcon size={16} /> WhatsApp
              </a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                <InstagramIcon size={16} /> Instagram
              </a>
            </div>
          </div>

          <div data-reveal className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-sand shadow-[var(--shadow-soft)] lg:min-h-[560px]">
            <iframe
              title="Mapa: Rua Nove de Julho, 709, Centro, Salto, SP"
              src={site.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 [filter:grayscale(0.35)_sepia(0.15)]"
              allowFullScreen
            />
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glass absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl p-4 sm:left-auto sm:max-w-sm"
            >
              <span>
                <span className="block text-[0.95rem]">Rua Nove de Julho, 709</span>
                <span className="text-[0.78rem] text-muted">Centro · Salto, SP</span>
              </span>
              <span className="round h-10 w-10 bg-forest text-cream">
                <Navigation size={15} strokeWidth={1.5} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

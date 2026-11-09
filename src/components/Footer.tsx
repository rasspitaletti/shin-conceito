import { nav, site } from '../data/site'
import { InstagramIcon, WhatsAppIcon } from './BrandIcons'
import logoLight from '../assets/img/logo-completo-claro.png'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="pb-[var(--frame)]">
      <div className="frame bg-ink text-cream/70">
        <div className="container-x grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:py-20">
          <div>
            <img src={logoLight} alt="Shin Conceito Institute, Dra. Patrícia Silva" loading="lazy" className="h-32 w-auto" />
          </div>
          <div>
            <p className="eyebrow text-gold-soft">Navegação</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="transition hover:text-cream">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-gold-soft">Endereço</p>
            <address className="mt-5 text-sm not-italic leading-relaxed">
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="transition hover:text-cream">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.building}
              </a>
            </address>
          </div>
          <div>
            <p className="eyebrow text-gold-soft">Contato</p>
            <a href={site.phoneHref} className="mt-5 block text-sm transition hover:text-cream">{site.phoneDisplay}</a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm transition hover:text-cream">{site.instagramHandle}</a>
            <div className="mt-6 flex gap-2.5">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="round border border-cream/15 hover:bg-cream hover:text-ink">
                <WhatsAppIcon size={17} />
              </a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="round border border-cream/15 hover:bg-cream hover:text-ink">
                <InstagramIcon size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="container-x overflow-hidden">
          <p aria-hidden="true" className="mega select-none whitespace-nowrap text-[clamp(2.6rem,9.2vw,8.6rem)] leading-[0.82] text-cream/[0.07]">
            Shin Conceito
          </p>
        </div>

        <div className="border-t border-cream/10">
          <div className="container-x flex flex-col gap-2 py-6 text-xs text-cream/45 sm:flex-row sm:justify-between">
            <p>© {year} Shin Conceito Institute, Dra. Patrícia Silva. Todos os direitos reservados.</p>
            <p>{site.area} · {site.city}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

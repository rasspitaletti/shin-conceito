import { site, testimonials } from '../data/site'
import { SectionLabel } from './SectionLabel'

function GoogleMark({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.5c2.1-1.9 3.3-4.7 3.3-8z" />
      <path fill="#34A853" d="M12 23c3 0 5.4-1 7.2-2.7l-3.5-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.2v2.8A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.2a11 11 0 0 0 0 9.8z" />
      <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.1-3.1A11 11 0 0 0 2.2 7.1l3.6 2.8C6.7 7.3 9.1 5.4 12 5.4z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-y" aria-labelledby="dep-title">
      <div className="container-x">
        <div data-reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionLabel n="05">Depoimentos</SectionLabel>
            <h2 id="dep-title" className="title mt-6 max-w-3xl text-[length:var(--text-h2)]">
              Confiança construída <span className="accent accent-dark">em cada experiência.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-full bg-white py-2.5 pl-3 pr-6 shadow-[var(--shadow-soft)]">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-paper">
              <GoogleMark size={18} />
            </span>
            <span>
              <span className="block text-[1.5rem] font-light leading-none tracking-[-0.04em]">{site.reviewsCount}</span>
              <span className="text-[0.75rem] text-muted">avaliações no Google</span>
            </span>
          </div>
        </div>

        <ul data-stagger className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col rounded-[1.6rem] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[2rem] font-light leading-none tracking-[-0.05em] text-gold">#{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex items-center gap-1.5 text-[0.72rem] text-muted">
                    <GoogleMark /> Avaliação no Google
                  </span>
                </div>
                <blockquote className="mt-10 flex-1 text-[1.25rem] font-light leading-snug tracking-[-0.02em]">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-ink/8 pt-5">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-[0.75rem] text-cream" aria-hidden="true">
                    {t.name.charAt(0)}
                  </span>
                  <span className="text-[0.88rem] font-medium">{t.name}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { nav, site } from '../data/site'
import { Logo } from './Logo'
import { InstagramIcon, WhatsAppIcon } from './BrandIcons'
import { useActiveSection } from '../hooks/useActiveSection'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(nav.map((n) => n.id))
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // sobre o hero (escuro) o header é claro; depois vira vidro claro
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('inicio')
      const limit = hero ? hero.offsetTop + hero.offsetHeight - 90 : 400
      setScrolled(window.scrollY > limit)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // menu: trava scroll, Esc fecha, foco preso no painel
  useEffect(() => {
    if (!open) return
    // trava o fundo (funciona também no iPhone)
    const y = window.scrollY
    const body = document.body.style
    const prev = { position: body.position, top: body.top, width: body.width, overflow: body.overflow }
    Object.assign(body, { position: 'fixed', top: `-${y}px`, width: '100%', overflow: 'hidden' })
    const panel = panelRef.current
    const focusables = () => Array.from(panel?.querySelectorAll<HTMLElement>('a, button') ?? [])
    focusables()[0]?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return setOpen(false)
      if (e.key !== 'Tab') return
      const els = focusables()
      const first = els[0]
      const last = els[els.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      Object.assign(document.body.style, prev)
      window.scrollTo(0, y)
      document.removeEventListener('keydown', onKey)
      toggleRef.current?.focus()
    }
  }, [open])

  const light = !scrolled
  const linkTone = light ? 'text-cream/70 hover:text-cream' : 'text-muted hover:text-ink'

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
          scrolled ? 'glass border-x-0 border-t-0 border-b-ink/5 shadow-[0_10px_30px_-22px_rgb(21_23_18/0.45)]' : 'border-b border-transparent'
        }`}
      >
        <div className="container-x mt-[var(--frame)] flex h-[var(--header-h)] items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-[clamp(1.25rem,0.7rem+2.6vw,3.5rem)]">
          {/* navegação em colunas (desktop) */}
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="grid w-max grid-flow-col grid-cols-3 grid-rows-2 gap-x-9 gap-y-1.5">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? 'true' : undefined}
                    className={`nav-link text-[0.78rem] transition-colors duration-300 ${
                      active === item.id ? (light ? 'text-cream' : 'text-ink') : linkTone
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#inicio" className="shrink-0 justify-self-center" aria-label="Shin Conceito Institute, início">
            <Logo light={light} />
          </a>

          <div className="flex items-center gap-2.5 justify-self-end">
            <a
              href={site.whatsappAgendar}
              target="_blank"
              rel="noopener noreferrer"
              className={`nav-link mr-3 hidden text-[0.78rem] font-medium uppercase tracking-[0.06em] sm:inline-block ${light ? 'text-cream' : 'text-ink'}`}
            >
              Agendar
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Dra. Patrícia Silva"
              className={`round hidden border md:grid ${light ? 'border-cream/25 text-cream hover:bg-cream hover:text-ink' : 'border-ink/15 text-ink hover:bg-forest hover:text-cream'}`}
            >
              <InstagramIcon size={17} />
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="menu"
              className={`round ${light ? 'bg-cream text-ink hover:bg-white' : 'bg-forest text-cream hover:bg-olive'}`}
            >
              <span className="flex w-4 flex-col gap-[4px]" aria-hidden="true">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu */}
      <div
        id="menu"
        className={`fixed inset-0 z-[60] overflow-hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-forest/50 backdrop-blur-sm transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className={`dark-texture absolute right-0 top-0 flex h-[100dvh] w-full flex-col overflow-y-auto overscroll-contain px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-[calc(1rem+env(safe-area-inset-top))] text-cream shadow-2xl transition-transform duration-[700ms] ease-[var(--ease-soft)] sm:right-[var(--frame)] sm:top-[var(--frame)] sm:h-[calc(100dvh-2*var(--frame))] sm:max-w-[460px] sm:rounded-[1.6rem] sm:px-7 ${
            open ? 'translate-x-0' : 'translate-x-[110%]'
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo light />
            <button type="button" onClick={() => setOpen(false)} aria-label="Fechar menu" className="round bg-cream text-ink hover:bg-white">
              <X size={18} strokeWidth={1.4} />
            </button>
          </div>

          <nav aria-label="Menu" className="mt-8 sm:mt-12">
            <ul>
              {nav.map((item, i) => (
                <li
                  key={item.id}
                  style={{ transitionDelay: open ? `${140 + i * 55}ms` : '0ms' }}
                  className={`transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between gap-4 border-b border-cream/10 py-3.5 sm:py-4"
                  >
                    <span className="title text-[clamp(1.55rem,1.1rem+2.4vw,2.1rem)] transition-colors group-hover:text-gold-soft">{item.label}</span>
                    <span className="text-[0.7rem] text-gold-soft">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto space-y-3 pt-8">
            <a href={site.whatsappAgendar} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn btn-sand w-full">
              Agendar avaliação <ArrowUpRight size={16} strokeWidth={1.5} className="btn-icon" />
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-line-light !px-3">
                <WhatsAppIcon size={16} /> WhatsApp
              </a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-line-light !px-3">
                <InstagramIcon size={16} /> Instagram
              </a>
            </div>
            <p className="pt-2 text-center text-xs text-sage">{site.address.line1} · Salto, SP</p>
          </div>
        </div>
      </div>
    </>
  )
}

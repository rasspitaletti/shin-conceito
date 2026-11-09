import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { site } from '../data/site'
import { InstagramIcon, WhatsAppIcon } from './BrandIcons'

/** Desktop/tablet: botões flutuantes. Mobile: barra fixa inferior (os flutuantes ficam ocultos). */
export function ContactShortcuts() {
  // no desktop, os botões flutuantes aparecem depois do hero
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <div className={`fixed bottom-6 right-6 z-40 hidden flex-col gap-3 transition-all duration-500 md:flex ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir Instagram"
          className="glass grid h-12 w-12 place-items-center rounded-full text-ink shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-0.5 hover:bg-white"
        >
          <InstagramIcon size={19} />
        </a>
        <a
          href={site.whatsappConhecer}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
          className="group flex h-14 items-center gap-0 overflow-hidden rounded-full bg-forest pl-[18px] pr-[18px] text-cream shadow-[0_14px_30px_-12px_rgb(21_23_18/0.7)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-olive"
        >
          <WhatsAppIcon size={20} />
          <span className="max-w-0 whitespace-nowrap text-[0.8rem] font-medium opacity-0 transition-all duration-500 group-hover:ml-3 group-hover:max-w-40 group-hover:opacity-100">
            Agendar
          </span>
        </a>
      </div>

      <nav
        aria-label="Atalhos de contato"
        className="glass fixed inset-x-3 bottom-[calc(0.6rem+env(safe-area-inset-bottom))] z-40 grid grid-cols-3 overflow-hidden rounded-2xl shadow-[0_10px_30px_-12px_rgb(35_26_22/0.4)] md:hidden"
      >
        <a href={site.whatsappConhecer} target="_blank" rel="noopener noreferrer" className="flex h-14 flex-col items-center justify-center gap-1 bg-forest text-cream active:bg-olive">
          <WhatsAppIcon size={18} />
          <span className="text-[0.66rem] font-medium">WhatsApp</span>
        </a>
        <a href={site.phoneHref} className="flex h-14 flex-col items-center justify-center gap-1 text-ink active:bg-white">
          <Phone size={17} strokeWidth={1.4} />
          <span className="text-[0.66rem] font-medium">Ligar</span>
        </a>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex h-14 flex-col items-center justify-center gap-1 border-l border-ink/10 text-ink active:bg-white">
          <InstagramIcon size={18} />
          <span className="text-[0.66rem] font-medium">Instagram</span>
        </a>
      </nav>
    </>
  )
}

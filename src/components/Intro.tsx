import { useState } from 'react'
import logo from '../assets/img/logo-completo-claro.png'

/** Abertura curta do site. A animação fica em useAnimations; não aparece com movimento reduzido nem em link com âncora. */
export function Intro() {
  const [show] = useState(
    () => !window.location.hash && window.matchMedia('(prefers-reduced-motion: no-preference)').matches,
  )
  if (!show) return null
  return (
    <div data-intro aria-hidden="true" className="dark-texture pointer-events-none fixed inset-0 z-[100] grid place-items-center">
      <div data-intro-content className="flex flex-col items-center gap-6">
        <img data-intro-logo src={logo} alt="" decoding="sync" className="h-40 w-auto sm:h-48" />
        <span data-intro-line className="h-px w-24 origin-center bg-gold-soft" />
      </div>
    </div>
  )
}

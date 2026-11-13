import wordmark from '../assets/img/logo-wordmark.png'
import wordmarkLight from '../assets/img/logo-wordmark-claro.png'

const leaf = 'M0 0C4-3 5-9 0-15C-5-9-4-3 0 0Z'
const leaves: [number, number, number][] = [
  [13, 64, -4], [13.5, 71, -38], [14.5, 78, 38], [17, 85, -48], [20.5, 91, 48], [25.5, 97, -58],
]

/** Emblema em linha dourada: oval, perfil feminino e ramo de folhas, como na arte do topo. */
export function Emblem({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 110" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="emblem-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e0b874" />
          <stop offset=".45" stopColor="#c8994f" />
          <stop offset="1" stopColor="#8f6527" />
        </linearGradient>
      </defs>
      <g stroke="url(#emblem-gold)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="55" cy="52" rx="34" ry="46" transform="rotate(14 55 52)" />
        <path d="M47 9C62 12 70 24 69 36C69 39 72 43 74 46C73 48 71 48 70 49C71 51 71 52 69 53C70 54 70 56 68 57C68 60 69 62 67 64C63 67 57 66 54 70C50 75 47 83 46 94" />
        <path d="M31 104C19 97 12 83 13 64" strokeWidth="1.8" />
      </g>
      <g fill="url(#emblem-gold)">
        {leaves.map(([x, y, r]) => (
          <path key={`${x}${y}`} d={leaf} transform={`translate(${x} ${y}) rotate(${r}) scale(.95)`} />
        ))}
      </g>
    </svg>
  )
}

/** Logo da clínica (emblema + lettering). `light` para fundos escuros. */
export function Logo({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <span className={`relative flex items-center gap-2.5 ${className}`}>
      <Emblem className="h-10 w-10 md:h-11 md:w-11" />
      <span className="relative h-[27px] w-[98px] md:h-[30px] md:w-[109px]">
        <img src={wordmarkLight} alt="" width={618} height={171} className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${light ? 'opacity-100' : 'opacity-0'}`} />
        <img src={wordmark} alt="Shin Conceito Institute" width={618} height={171} className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${light ? 'opacity-0' : 'opacity-100'}`} />
      </span>
    </span>
  )
}

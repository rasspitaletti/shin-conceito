import emblem from '../assets/img/logo-emblema.png'
import emblemLight from '../assets/img/logo-emblema-claro.png'
import wordmark from '../assets/img/logo-wordmark.png'
import wordmarkLight from '../assets/img/logo-wordmark-claro.png'

/** Logo oficial da clínica (emblema + lettering). `light` para fundos escuros. */
export function Logo({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <span className={`relative flex items-center gap-2.5 ${className}`}>
      <span className="relative h-10 w-10 md:h-11 md:w-11">
        <img src={emblemLight} alt="" width={382} height={386} className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${light ? 'opacity-100' : 'opacity-0'}`} />
        <img src={emblem} alt="" width={382} height={386} className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${light ? 'opacity-0' : 'opacity-100'}`} />
      </span>
      <span className="relative h-[27px] w-[98px] md:h-[30px] md:w-[109px]">
        <img src={wordmarkLight} alt="" width={618} height={171} className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${light ? 'opacity-100' : 'opacity-0'}`} />
        <img src={wordmark} alt="Shin Conceito Institute" width={618} height={171} className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${light ? 'opacity-0' : 'opacity-100'}`} />
      </span>
    </span>
  )
}

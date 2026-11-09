type Corner = 'tr' | 'tl' | 'br' | 'bl'

type Props = {
  /** canto do recorte */
  corner?: Corner
  /** cor do fundo onde o card está (classe de texto, ex.: "text-paper") */
  bg: string
  /** largura e altura do recorte */
  w?: string
  h?: string
  r?: string
}

const flip: Record<Corner, string> = {
  tr: '',
  tl: '-scale-x-100',
  br: '-scale-y-100',
  bl: '-scale-x-100 -scale-y-100',
}

/**
 * Recorte "em degrau" nos cantos dos cards (linguagem da referência).
 * Pinta o recorte com a cor do fundo da seção e suaviza os cantos internos.
 */
export function Notch({ corner = 'tr', bg, w = '38%', h = '3.4rem', r = '1.5rem' }: Props) {
  const curve = `radial-gradient(circle at 0 100%, transparent calc(${r} - 0.5px), currentColor ${r})`
  return (
    <span aria-hidden="true" className={`pointer-events-none absolute inset-0 z-[2] ${flip[corner]} ${bg}`}>
      <span className="absolute right-0 top-0 bg-current" style={{ width: w, height: h, borderBottomLeftRadius: r }} />
      <span className="absolute top-0" style={{ right: w, width: r, height: r, background: curve }} />
      <span className="absolute right-0" style={{ top: h, width: r, height: r, background: curve }} />
    </span>
  )
}

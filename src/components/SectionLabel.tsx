import type { ReactNode } from 'react'

/** Rótulo de seção no estilo "#01 — texto" da referência. */
export function SectionLabel({ n, children, light = false }: { n?: string; children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${light ? 'text-sage-soft' : 'text-muted'}`}>
      {n && <span className={`font-medium ${light ? 'text-gold-soft' : 'text-gold'}`}>#{n}</span>}
      {children}
    </p>
  )
}

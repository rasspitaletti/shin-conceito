import { useState } from 'react'
import type { CSSProperties } from 'react'
import { unsplash, type Photo } from '../data/photos'

type Props = {
  photo: Photo
  /** largura base em px (o srcset gera 1x/1.5x/2x) */
  width?: number
  sizes?: string
  className?: string
  style?: CSSProperties
  priority?: boolean
  parallax?: boolean
}

/** Foto local ou responsiva do Unsplash, com fallback elegante se não carregar. */
export function Img({ photo, width = 900, sizes = '100vw', className = '', style, priority, parallax }: Props) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div
        role="img"
        aria-label={photo.alt}
        className={`${className} bg-[radial-gradient(120%_90%_at_70%_20%,#a07a55_0%,#6b4c35_45%,#3a2a1f_100%)]`}
        style={style}
      />
    )
  }
  if (photo.src) {
    return (
      <img
        src={photo.src}
        alt={photo.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setFailed(true)}
        data-parallax={parallax || undefined}
        className={className}
        style={{ objectPosition: photo.pos, ...style }}
      />
    )
  }
  const id = photo.id!
  const widths = [Math.round(width * 0.6), width, Math.round(width * 1.5), width * 2]
  return (
    <img
      src={unsplash(id, width)}
      srcSet={widths.map((w) => `${unsplash(id, w)} ${w}w`).join(', ')}
      sizes={sizes}
      alt={photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      onError={() => setFailed(true)}
      data-parallax={parallax || undefined}
      className={className}
      style={{ objectPosition: photo.pos, ...style }}
    />
  )
}

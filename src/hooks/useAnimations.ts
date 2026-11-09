import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Animações globais com GSAP + ScrollTrigger.
 * O conteúdo é visível por padrão; as animações só rodam se o usuário
 * não pediu redução de movimento (prefers-reduced-motion).
 */
export function useAnimations() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Abertura: o logo aparece, o painel sobe e o hero entra enquanto ele sai
      const intro = document.querySelector('[data-intro]')
      if (intro) {
        gsap
          .timeline({ onComplete: () => void gsap.set(intro, { display: 'none' }) })
          .from('[data-intro-logo]', { opacity: 0, y: 14, duration: 0.55, ease: 'power3.out' })
          .from('[data-intro-line]', { scaleX: 0, duration: 0.6, ease: 'power2.inOut' }, 0.15)
          .to('[data-intro-content]', { opacity: 0, y: -24, duration: 0.3, ease: 'power2.in' }, 0.95)
          .to(intro, { yPercent: -100, duration: 0.7, ease: 'expo.inOut' }, 1)
      }

      // Hero
      const tl = gsap.timeline({ delay: intro ? 1.35 : 0, defaults: { ease: 'power3.out' } })
      tl.from('[data-hero-img]', { opacity: 0, scale: 1.06, duration: 1.6, ease: 'power2.out' })
        .from('[data-hero-line]', { yPercent: 110, duration: 1.1, stagger: 0.09 }, 0.15)
        .from('[data-hero-fade]', { opacity: 0, y: 14, duration: 0.9, stagger: 0.1 }, 0.55)
        .from('[data-hero-btn]', { opacity: 0, y: 16, duration: 0.8, stagger: 0.1 }, 0.75)

      // Revelação de blocos
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        })
      })

      // Grupos em sequência (bento, cards, galeria)
      gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
        gsap.from(group.children, {
          opacity: 0,
          y: 36,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: group, start: 'top 82%', once: true },
        })
      })

      // Parallax muito sutil em fotos
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: 'none',
            scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      })
    })

    // Recalcula posições depois que as imagens carregam
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)

    return () => {
      window.removeEventListener('load', refresh)
      mm.revert()
    }
  }, [])
}

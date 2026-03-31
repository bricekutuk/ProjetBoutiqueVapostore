import { useEffect, useRef } from 'react'

export default function VapeBackground({ children }: { children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let animId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: any[] = []
    let acc = 0

    const spawn = () => {
      const r = 40 + Math.random() * 80
      particles.push({
        x: Math.random() * canvas.width,
        y: -r, r,
        vx: (Math.random() - 0.5) * 0.5,
        vy: 0.3 + Math.random() * 0.5,
        wobble: Math.random() * Math.PI * 2,
        alpha: 0,
        maxAlpha: 0.06 + Math.random() * 0.1,
        life: 0,
        maxLife: 260 + Math.random() * 160,
        hue: 270 + Math.random() * 30,
      })
    }

    const loop = () => {
      acc += 0.8
      while (acc >= 1) { spawn(); acc -= 1 }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life++
        p.wobble += 0.007
        p.x += p.vx + Math.sin(p.wobble) * 0.5
        p.y += p.vy
        p.r += 0.15

        const lr = p.life / p.maxLife
        p.alpha = lr < 0.12 ? (lr / 0.12) * p.maxAlpha
          : lr > 0.65 ? p.maxAlpha * (1 - (lr - 0.65) / 0.35)
          : p.maxAlpha

        if (p.life >= p.maxLife) { particles.splice(i, 1); continue }

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r)
        g.addColorStop(0,    `hsla(${p.hue},10%,88%,${p.alpha})`)
        g.addColorStop(0.5,  `hsla(${p.hue},10%,88%,${p.alpha * 0.5})`)
        g.addColorStop(1,    `hsla(${p.hue},10%,88%,0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      }

      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 0 }}>{children}</div>
    </div>
  )
}
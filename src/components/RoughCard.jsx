import { useEffect, useRef } from 'react'
import rough from 'roughjs'

export default function RoughCard({ children, className = '', style = {} }) {
  const containerRef = useRef(null)
  const svgRef = useRef(null)

  const draw = () => {
    const el = containerRef.current
    const svg = svgRef.current
    if (!el || !svg) return

    const w = el.offsetWidth
    const h = el.offsetHeight
    if (!w || !h) return

    // Clear previous drawing
    while (svg.firstChild) svg.removeChild(svg.firstChild)
    svg.setAttribute('width', w)
    svg.setAttribute('height', h)

    const rc = rough.svg(svg)
    const rect = rc.rectangle(4, 4, w - 8, h - 8, {
      roughness: 2.6,
      bowing: 1.2,
      stroke: '#1c1c1c',
      strokeWidth: 1.8,
      fill: 'none',
    })
    svg.appendChild(rect)
  }

  useEffect(() => {
    // Small delay to allow layout paint before measuring
    const timer = setTimeout(draw, 30)

    const ro = new ResizeObserver(() => draw())
    if (containerRef.current) ro.observe(containerRef.current)

    return () => {
      clearTimeout(timer)
      ro.disconnect()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`rough-card relative bg-white ${className}`}
      style={style}
    >
      {/* SVG border overlay */}
      <svg
        ref={svgRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'visible',
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '1.5rem' }}>
        {children}
      </div>
    </div>
  )
}

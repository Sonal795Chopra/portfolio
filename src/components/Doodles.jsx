export function Star({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* hand-drawn 6-point star via rough strokes */}
      <path
        d="M16 3 L17.5 13.5 L28 10 L19.5 17 L27 26 L16 20.5 L5 26 L12.5 17 L4 10 L14.5 13.5 Z"
        stroke="#1c1c1c"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        style={{ filter: 'url(#roughen)' }}
      />
    </svg>
  )
}

export function Sparkle({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* 4-point sparkle */}
      <path
        d="M14 2 C14 2 13.5 10 14 14 C14.5 10 14 2 14 2Z"
        stroke="#1c1c1c"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 14 C14 14 14.5 22 14 26 C13.5 22 14 14 14 14Z"
        stroke="#1c1c1c"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M2 14 C2 14 10 13.5 14 14 C10 14.5 2 14 2 14Z"
        stroke="#1c1c1c"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 14 C14 14 22 14.5 26 14 C22 13.5 14 14 14 14Z"
        stroke="#1c1c1c"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* diagonal arms */}
      <path
        d="M5.5 5.5 C5.5 5.5 10.5 10 14 14"
        stroke="#1c1c1c"
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M22.5 5.5 C22.5 5.5 17.5 10 14 14"
        stroke="#1c1c1c"
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M5.5 22.5 C5.5 22.5 10.5 18 14 14"
        stroke="#1c1c1c"
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M22.5 22.5 C22.5 22.5 17.5 18 14 14"
        stroke="#1c1c1c"
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  )
}

export function ArrowDown({ size = 36, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 4 C17.8 4 18.2 26 18 30"
        stroke="#1c1c1c"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 22 C9 22 17.8 31 18 30 C18.2 31 27 22 27 22"
        stroke="#1c1c1c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowCurved({ size = 52, className = '' }) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 52 42"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 8 C4 8 20 2 36 14 C42 19 44 28 40 34"
        stroke="#1c1c1c"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M34 26 C34 26 40 34 40 34 C40 34 32 36 30 38"
        stroke="#1c1c1c"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function Squiggle({ width = 80, className = '' }) {
  return (
    <svg
      width={width}
      height={20}
      viewBox="0 0 80 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 10 C10 4, 18 16, 26 10 C34 4, 42 16, 50 10 C58 4, 66 16, 78 10"
        stroke="#1c1c1c"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
    </svg>
  )
}

import { cn } from "@/lib/utils"

/** Shared HN sigil — frameless monogram with diagonal accent */
export const BRAND_MARK_VIEWBOX = "0 0 48 48"

/** Interlocking H+N cut by a gold diagonal slash */
export function BrandMarkPaths({
  strokeScale = 1,
}: {
  strokeScale?: number
}) {
  const w = 2.6 * strokeScale

  return (
    <>
      <path
        d="M7 6 V44"
        stroke="currentColor"
        strokeWidth={w}
        strokeLinecap="square"
        fill="none"
      />

      <path
        d="M23 6 V44"
        stroke="currentColor"
        strokeWidth={w}
        strokeLinecap="square"
        fill="none"
      />

      <path
        d="M7 25 H23"
        stroke="currentColor"
        strokeWidth={w}
        strokeLinecap="square"
        fill="none"
      />

      <path
        d="M29 44 V6"
        stroke="currentColor"
        strokeWidth={w}
        strokeLinecap="square"
        fill="none"
      />

      <path
        d="M29 6 L41 44"
        stroke="currentColor"
        strokeWidth={w}
        strokeLinecap="square"
        fill="none"
      />

      <path
        d="M41 44 V6"
        stroke="currentColor"
        strokeWidth={w}
        strokeLinecap="square"
        fill="none"
      />

      {/* Signature diagonal slash */}
      <path
        d="M6 30 L42 16"
        stroke="var(--accent-primary)"
        strokeWidth={w * 1.15}
        strokeLinecap="square"
        fill="none"
      />
    </>
  )
}

type BrandMarkProps = {
  size?: number
  className?: string
  weight?: "nav" | "hero"
}

export function BrandMark({
  size,
  className,
  weight = "nav",
}: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={BRAND_MARK_VIEWBOX}
      fill="none"
      className={cn(
        "logo-mark-svg shrink-0 text-[var(--text-primary)]",
        !size && "h-full w-full",
        className
      )}
      aria-hidden
    >
      <BrandMarkPaths strokeScale={weight === "hero" ? 1.15 : 1} />
    </svg>
  )
}

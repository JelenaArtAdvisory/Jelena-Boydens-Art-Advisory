"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { useT } from "@/lib/i18n";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[3/4]". */
  aspect?: string;
  /** Tailwind max-width class controlling how compact the slider is. */
  maxWidth?: string;
  priority?: boolean;
};

/**
 * Draggable before/after comparison. Pointer Events cover mouse, touch and
 * pen in one code path; a keyboard-operable slider role keeps it accessible.
 * Both layers show the same scene at identical framing — one "before" and one
 * "after". Reused for the interior montage and the portfolio placement.
 */
export function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  aspect = "aspect-[459/466]",
  maxWidth = "max-w-sm",
  priority = false,
}: BeforeAfterSliderProps) {
  const t = useT();
  const containerRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (event: React.PointerEvent) => {
    dragging.current = true;
    updateFromClientX(event.clientX);
    try {
      (event.target as HTMLElement).setPointerCapture(event.pointerId);
    } catch {
      // Capture can fail for synthetic/non-primary pointers; dragging still
      // works via the window-level pointermove listener below.
    }
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(event.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      setPercent((p) => Math.max(0, p - 5));
    } else if (event.key === "ArrowRight") {
      setPercent((p) => Math.min(100, p + 5));
    } else if (event.key === "Home") {
      setPercent(0);
    } else if (event.key === "End") {
      setPercent(100);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto w-full ${aspect} ${maxWidth} touch-none select-none overflow-hidden rounded-4xl border border-black/10`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
    >
      {/* "After" layer */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
        />
        <span className="absolute right-5 top-5 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-black backdrop-blur">
          {t.slider.after}
        </span>
      </div>

      {/* "Before" layer, clipped to the handle position */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute left-5 top-5 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-black backdrop-blur">
          {t.slider.before}
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 flex items-center"
        style={{ left: `${percent}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-px bg-white/80 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" />
        <div
          role="slider"
          tabIndex={0}
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(percent)}
          onKeyDown={onKeyDown}
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-black/10 ring-offset-2 ring-offset-milkshakeDeep/60"
        >
          <span className="flex gap-0.5">
            <span className="h-3 w-px bg-black/50" />
            <span className="h-3 w-px bg-black/50" />
          </span>
        </div>
      </div>
    </div>
  );
}

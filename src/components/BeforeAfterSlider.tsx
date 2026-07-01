"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Draggable before/after comparison. Pointer Events cover mouse, touch and
 * pen in one code path; a keyboard-operable slider role keeps it accessible.
 * Layers are placeholder blocks for now — swap in real montage photography
 * later by replacing the two inner divs with next/image (see README.md).
 */
export function BeforeAfterSlider() {
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
      className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-4xl border border-black/10 sm:aspect-[16/10]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
    >
      {/* "After" layer — wall with a framed artwork */}
      <div className="absolute inset-0 flex items-center justify-center bg-offwhite">
        <div className="flex h-2/3 w-1/2 items-center justify-center rounded-2xl border-2 border-black/80 bg-cream shadow-soft">
          <span className="px-4 text-center text-[11px] font-medium uppercase tracking-widest text-muted">
            [ artwork montage ]
          </span>
        </div>
        <span className="absolute right-5 top-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-black">
          After
        </span>
      </div>

      {/* "Before" layer — empty wall, clipped to the handle position */}
      <div
        className="absolute inset-0 bg-[#EDE7DD]"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        <span className="absolute left-5 top-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-black">
          Before
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 flex items-center"
        style={{ left: `${percent}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-px bg-black" />
        <div
          role="slider"
          tabIndex={0}
          aria-label="Reveal the artwork montage over the empty wall"
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

"use client";

import { useLang, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Compact NL | EN switch. Dutch is the default; the choice is remembered.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  const options: Lang[] = ["nl", "en"];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-black/15 p-0.5 text-xs font-medium",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors duration-200",
            lang === option ? "bg-black text-white" : "text-muted hover:text-black",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

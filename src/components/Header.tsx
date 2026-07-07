"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { key: "about", href: "#about" },
  { key: "approach", href: "#approach" },
  { key: "portfolio", href: "#portfolio" },
  { key: "contact", href: "#contact" },
] as const;

export function Header() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile menu AND lift the scroll lock synchronously, so the
  // anchor link (e.g. #contact) can actually scroll the page on tap.
  function closeMenu() {
    document.body.style.overflow = "";
    setMenuOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-apple",
        scrolled || menuOpen
          ? "border-b border-black/10 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <Link href="#top" className="text-sm font-semibold tracking-tight text-black">
          Jelena Boydens <span className="text-muted font-normal">· Art Advisory</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="link-underline text-sm text-black">
              {t.nav[link.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LanguageToggle />
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform duration-300 ease-apple hover:scale-[1.03] hover:shadow-soft"
          >
            {t.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={cn(
              "block h-px w-5 bg-black transition-transform duration-300 ease-apple",
              menuOpen && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-black transition-transform duration-300 ease-apple",
              menuOpen && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden bg-white transition-[grid-template-rows] duration-300 ease-apple md:hidden",
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 border-t border-black/10 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-3 text-base text-black"
              >
                {t.nav[link.key]}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white"
            >
              {t.nav.cta}
            </Link>
            <LanguageToggle className="mt-4 self-start" />
          </nav>
        </div>
      </div>
    </header>
  );
}

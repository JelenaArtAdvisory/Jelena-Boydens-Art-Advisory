"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold tracking-tight text-black">
            Jelena Boydens <span className="text-muted font-normal">· Art Advisory</span>
          </p>
          <p className="mt-1 text-xs text-muted">
            &copy; {year} Jelena Boydens · {t.footer.vat} BE1035559627
          </p>
        </div>

        <Link href="/privacy" className="link-underline text-xs text-muted">
          {t.footer.privacy}
        </Link>
      </div>
    </footer>
  );
}

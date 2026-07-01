import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold tracking-tight text-black">
            Jelena Boydens <span className="text-muted font-normal">· Art Advisory</span>
          </p>
          <p className="mt-1 text-xs text-muted">
            &copy; {year} Jelena Boydens · VAT BE [ number ]
          </p>
        </div>

        <Link href="/privacy" className="link-underline text-xs text-muted">
          Privacy policy
        </Link>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Jelena Boydens Art Advisory",
};

// TODO: replace with a real privacy policy (GDPR-compliant, since the
// business and its clients are Belgium/EU-based) once legal text is ready.
export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-32 sm:px-8">
      <Link href="/" className="link-underline text-sm text-muted">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-heading text-4xl font-medium tracking-tight text-black">
        Privacy Policy
      </h1>
      <p className="mt-6 text-base leading-relaxed text-muted">
        [ Placeholder — this page needs a proper, GDPR-compliant privacy policy covering what
        data is collected via the contact form and the &ldquo;coming soon&rdquo; email sign-up,
        how it is stored, and how visitors can request its removal. ]
      </p>
    </main>
  );
}

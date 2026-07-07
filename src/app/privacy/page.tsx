import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacybeleid — Jelena Boydens Art Advisory",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}

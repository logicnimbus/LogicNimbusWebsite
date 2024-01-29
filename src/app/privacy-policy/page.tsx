import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Home() {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}

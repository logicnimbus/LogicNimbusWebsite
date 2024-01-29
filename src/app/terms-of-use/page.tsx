import TermsOfUse from "@/components/TermsOfUse";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms Of Use",
};

export default function Home() {
  return (
    <main>
      <TermsOfUse />
    </main>
  );
}

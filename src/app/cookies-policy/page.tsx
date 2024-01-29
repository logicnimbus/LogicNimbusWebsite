import CookiesPolicy from "@/components/CokkiesPolicy";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cookies Policy",
};

export default function Home() {
  return (
    <main>
      <CookiesPolicy />
    </main>
  );
}

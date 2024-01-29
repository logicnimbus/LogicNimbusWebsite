import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import EthicalAI from "@/components/EthicalAI";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import OurVision from "@/components/OurVision";
import Pricing from "@/components/Pricing";
import TailoredSolutions from "@/components/TailoredSolutions";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhatSetUsApart from "@/components/WhatSetUsApart";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LogicNimbus Pvt. Ltd. - AI based product company",
  description:
    "Discover cutting-edge AI solutions at LogicNimbus, where innovation meets intelligence. Explore our range of AI-based products designed to revolutionize industries and elevate business performance. Harness the power of artificial intelligence for unparalleled efficiency and stay ahead in the digital era. Elevate your enterprise with our state-of-the-art AI technology – transforming possibilities into realities.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <OurVision />
      <About />
      <WhatSetUsApart />
      <TailoredSolutions />
      <EthicalAI />
      <CallToAction />
      <Contact />
    </main>
  );
}

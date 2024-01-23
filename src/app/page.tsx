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
  title: "Play Next.js - SaaS Starter Kit and Boilerplate for Next.js",
  description:
    "Free Next.js SaaS Boilerplate and Starter Kit designed and built for SaaS startups. It comes with all necessary integrations, pages, and components you need to launch a feature-rich SaaS websites.",
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

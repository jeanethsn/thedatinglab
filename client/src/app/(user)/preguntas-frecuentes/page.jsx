"use client";
import Accordion from "@/app/components/accordion/Accordion";
import { HeroFaq } from "@/app/components/HeroFaq/HeroFaq.jsx";

export default function page() {
  return (
    <div>
      <HeroFaq />
      <Accordion />
    </div>
  );
}

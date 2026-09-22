"use client";

import { useState } from "react";

import Category, { type Language } from "@/components/Category/Category";
import Header from "@/components/Header/Header";

export default function Home() {
  const [language, setLanguage] = useState<Language>("ru");

  return (
    <div>
      <Header language={language} onLanguageChange={setLanguage} />
      <Category language={language} />
    </div>
  );
}

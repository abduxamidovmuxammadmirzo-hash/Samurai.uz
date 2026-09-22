"use client";

import { useState } from "react";

import type { Language } from "@/components/Category/Category";

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const languages: { value: Language; label: string }[] = [
  { value: "ru", label: "РУ" },
  { value: "uzLat", label: "UZ" },
  { value: "uzCy", label: "УЗ" },
];

const navLabels: Record<Language, string[]> = {
  ru: ["Главная", "О нас", "Контакты"],
  uzLat: ["Bosh sahifa", "Biz haqimizda", "Kontaktlar"],
  uzCy: ["Бош сахифа", "Биз ҳақимизда", "Контактлар"],
};

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-red-900 via-red-800 to-rose-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-4 lg:px-6 lg:py-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-red-500 sm:h-3 sm:w-3" />
          <h1 className="truncate bg-gradient-to-r from-white to-red-200 bg-clip-text text-base font-black tracking-wider text-transparent sm:text-xl lg:text-2xl">
            SAMURAI
          </h1>
        </div>

        <nav className="hidden items-center gap-4 xl:flex xl:gap-6">
          {navLabels[language].map((item, index) => (
            <a
              key={item}
              href="#"
              className="relative px-2 py-1 text-red-100 transition-colors duration-200 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-red-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {index === 0 ? item : item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-1.5 rounded-full border border-red-700/80 bg-red-950/40 p-1 md:flex">
            {languages.map((item) => {
              const active = language === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => onLanguageChange(item.value)}
                  className={`rounded-full px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] transition sm:px-3 sm:text-xs ${
                    active ? "bg-amber-500 text-[#20090d]" : "text-red-100 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-1 text-red-100 transition hover:bg-red-800 hover:text-white focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-red-900 bg-red-950 px-3 py-4 transition-all md:hidden sm:px-4">
          <ul className="flex flex-col space-y-2.5 font-medium">
            {navLabels[language].map((item) => (
              <li key={item}>
                <a href="#" className="block rounded-lg px-3 py-2 text-sm text-red-100 transition hover:bg-red-900 hover:text-white">
                  {item}
                </a>
              </li>
            ))}

            <li className="pt-2">
              <div className="flex flex-wrap gap-2">
                {languages.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => {
                      onLanguageChange(item.value);
                      setIsOpen(false);
                    }}
                    className={`rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                      language === item.value ? "bg-amber-500 text-[#20090d]" : "bg-red-900 text-red-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
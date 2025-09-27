"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  pt: {
    // Header
    "header.title": "Deividi Martin",
    "header.role": "Desenvolvedor FullStack",
    "header.description":
      " ",
    "header.email": "Email",
    "header.github": "GitHub",
    "header.linkedin": "LinkedIn",
    "header.downloadCV": "Download CV",

    // About
    "about.title": "Sobre",
    "about.paragraph1":
      "Sou apaixonado por transformar ideias em soluções reais. Atuo como Desenvolvedor Back-End Júnior com foco em Node.js, TypeScript e APIs REST, construindo aplicações que conectam dados, sistemas e pessoas.",
    "about.paragraph2":
      "Minha trajetória inclui projetos práticos: desde automações que integram ERPs a marketplaces, até sistemas completos de orçamento e e-commerce. Essa vivência me ensinou a pensar além do código — entender processos, otimizar rotinas e entregar valor para negócios reais.",
    "about.paragraph3":
      "Hoje meu foco está em back-end, arquitetura de APIs e bancos de dados, mas trago também experiência em front-end (Tailwind CSS, React), o que me permite dialogar bem em equipes multidisciplinares.",
    "about.technologies": "Tecnologias",

    // Projects
    "projects.title": "Principais Projetos",
    "projects.stockControl.title": "Controle de Estoque",
    "projects.stockControl.description":
      "Sistema completo de controle de estoque desenvolvido em Java com interface gráfica e banco de dados.",
    "projects.workshop.title": "Workshop Spring Boot JPA",
    "projects.workshop.description":
      "Projeto demonstrando conceitos avançados de Spring Boot com JPA e relacionamentos de entidades.",
    "projects.stockEngine.title": "StockEngine",
    "projects.stockEngine.description":
      "Engine de gerenciamento de estoque com arquitetura robusta e padrões de design.",

    // Education
    "education.title": "Formação Acadêmica",
    "education.algorithms.title": "Algoritmos e Programação",
    "education.oop.title": "Programação Orientada a Objetos",
    "education.webdev.title": "Desenvolvimento Web",
    "education.software.title": "Engenharia de Software I & II",

    // Courses
    "courses.title": "Cursos e Certificações",
    "courses.certificate": "Certificado",

    // Footer
    "footer.copyright": "© 2025 Deividi Martin. Desenvolvido com Next.js e Tailwind CSS.",

    // Theme toggle
    "theme.light": "Modo Claro",
    "theme.dark": "Modo Escuro",
    "theme.toggle": "Alternar tema",

    // Language toggle
    "language.portuguese": "Português",
    "language.english": "English",
  },
    en: {
    // Header
    "header.title": "Deividi Martin",
    "header.role": "Full-Stack Developer",
    "header.description":
      " ",
    "header.email": "Email",
    "header.github": "GitHub",
    "header.linkedin": "LinkedIn",
    "header.downloadCV": "Download CV",

    // About
    "about.title": "About",
    "about.paragraph1":
      "I’m passionate about turning ideas into real solutions. I work as a Junior Back-End Developer focused on Node.js, TypeScript and REST APIs, building applications that connect data, systems and people.",
    "about.paragraph2":
      "My journey includes practical projects: from automations integrating ERPs with marketplaces to complete budgeting and e-commerce systems. This experience taught me to think beyond code — understanding processes, optimizing routines and delivering value to real businesses.",
    "about.paragraph3":
      "Today my focus is on back-end, API architecture and databases, but I also bring front-end experience (Tailwind CSS, React), which allows me to communicate effectively in multidisciplinary teams.",
    "about.technologies": "Technologies",

    // Projects (mantém como já está)
    "projects.title": "Main Projects",
    "projects.stockControl.title": "Stock Control",
    "projects.stockControl.description":
      "Complete stock control system developed in Java with graphical interface and database.",
    "projects.workshop.title": "Workshop Spring Boot JPA",
    "projects.workshop.description":
      "Project demonstrating advanced Spring Boot concepts with JPA and entity relationships.",
    "projects.stockEngine.title": "StockEngine",
    "projects.stockEngine.description": "Stock management engine with robust architecture and design patterns.",

    // Education
    "education.title": "Academic Background",
    "education.algorithms.title": "Algorithms and Programming",
    "education.oop.title": "Object-Oriented Programming",
    "education.webdev.title": "Web Development",
    "education.software.title": "Software Engineering I & II",

    // Courses
    "courses.title": "Courses and Certifications",
    "courses.certificate": "Certificate",

    // Footer
    "footer.copyright": "© 2025 Deividi Martin. Built with Next.js and Tailwind CSS.",

    // Theme toggle
    "theme.light": "Light Mode",
    "theme.dark": "Dark Mode",
    "theme.toggle": "Toggle theme",

    // Language toggle
    "language.portuguese": "Português",
    "language.english": "English",
  },

}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

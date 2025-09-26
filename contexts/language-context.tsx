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
    "header.role": "Desenvolvedor Backend",
    "header.description":
      "Especializado em desenvolvimento backend com Java e Spring Boot, criando soluções robustas e escaláveis.",
    "header.email": "Email",
    "header.github": "GitHub",
    "header.linkedin": "LinkedIn",
    "header.downloadCV": "Download CV",

    // About
    "about.title": "Sobre",
    "about.paragraph1":
      "Com sólida compreensão de programação Backend e habilidades práticas em Java, estou preparado para enfrentar desafios complexos de desenvolvimento. Minha experiência inclui desenvolvimento Backend, criação de interfaces gráficas, interação com Banco de Dados e manipulação de arquivos.",
    "about.paragraph2":
      "Atualmente, estou aprimorando minhas competências em Spring Boot para oferecer soluções mais robustas e eficientes. Tenho conhecimento em sistemas de controle de versão e metodologias tanto ágeis quanto tradicionais.",
    "about.paragraph3":
      "Essas habilidades, aliadas a uma proficiência em IDEs modernas, me permitem transformar conceitos em soluções tangíveis e escaláveis.",
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
    "header.role": "Backend Developer",
    "header.description":
      "Specialized in backend development with Java and Spring Boot, creating robust and scalable solutions.",
    "header.email": "Email",
    "header.github": "GitHub",
    "header.linkedin": "LinkedIn",
    "header.downloadCV": "Download CV",

    // About
    "about.title": "About",
    "about.paragraph1":
      "With solid understanding of Backend programming and practical skills in Java, I'm prepared to face complex development challenges. My experience includes Backend development, GUI creation, Database interaction, and file manipulation.",
    "about.paragraph2":
      "Currently, I'm enhancing my Spring Boot competencies to offer more robust and efficient solutions. I have knowledge in version control systems and both agile and traditional methodologies.",
    "about.paragraph3":
      "These skills, combined with proficiency in modern IDEs, allow me to transform concepts into tangible and scalable solutions.",
    "about.technologies": "Technologies",

    // Projects
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

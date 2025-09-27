"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Linkedin, Download } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// ===== Tech Icons com Shields.io =====
const techCategories: Record<string, { name: string; badges: string[] }> = {
  frontend: {
    name: "Front-end",
    badges: [
      "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white",
    ],
  },
  backend: {
    name: "Back-end",
    badges: [
      "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
      "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
      "https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white",
      "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
    ],
  },
  devops: {
    name: "DevOps / Outros",
    badges: [
      "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
      "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
      "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
      "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
      "https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white",
    ],
  },
}

// ===== Header =====
export function Header() {
  const { t } = useLanguage()

  return (
    <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
      <div className="mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2 text-balance">{t("header.title")}</h1>
        <p className="text-xl text-muted-foreground mb-4">{t("header.role")}</p>
        <p className="text-base text-muted-foreground max-w-md leading-relaxed">{t("header.description")}</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Button variant="outline" size="sm" asChild>
            <a href="mailto:deividi_97@hotmail.com" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {t("header.email")}
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com/DeividiMartin"
              target="_blank"
              className="flex items-center gap-2"
              rel="noreferrer"
            >
              <Github className="w-4 h-4" />
              {t("header.github")}
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://www.linkedin.com/in/deividi-martin-4b02391a3/"
              target="_blank"
              className="flex items-center gap-2"
              rel="noreferrer"
            >
              <Linkedin className="w-4 h-4" />
              {t("header.linkedin")}
            </a>
          </Button>
        </div>
        <Button asChild className="w-fit">
          <a
            href="/assets/arquivos/DEIVIDI MARTIN RIBEIRO.pdf"
            download
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            {t("header.downloadCV")}
          </a>
        </Button>
      </div>
    </header>
  )
}

// ===== Technologies Section =====
export function TechnologiesSection() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold mb-4 text-foreground">{t("about.technologies")}</h3>
      {Object.keys(techCategories).map((cat) => (
        <div key={cat} className="flex flex-wrap gap-2 justify-center">
          {techCategories[cat].badges.map((badge, i) => (
            <img key={i} src={badge} alt={`${techCategories[cat].name} badge`} className="h-6" />
          ))}
        </div>
      ))}
    </div>
  )
}

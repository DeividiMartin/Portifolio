"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Database,
  Globe,
  Code,
  Server,
  GitBranch,
  FileCode,
  Layers,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { skills } from "@/lib/data"

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
          <a href="/assents/arquivos/DEIVIDI MARTIN RIBEIRO.pdf" download className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            {t("header.downloadCV")}
          </a>
        </Button>
      </div>
    </header>
  )
}

const techIcons: Record<string, React.ReactNode> = {
  Java: <Code className="w-4 h-4 text-orange-600" />,
  "Spring Boot": <Layers className="w-4 h-4 text-green-600" />,
  Python: <Code className="w-4 h-4 text-blue-600" />,
  JavaScript: <FileCode className="w-4 h-4 text-yellow-600" />,
  SQL: <Database className="w-4 h-4 text-blue-500" />,
  Git: <GitBranch className="w-4 h-4 text-orange-500" />,
  "HTML/CSS": <Globe className="w-4 h-4 text-red-500" />,
  "REST APIs": <Server className="w-4 h-4 text-purple-600" />,
  MySQL: <Database className="w-4 h-4 text-blue-600" />,
  PostgreSQL: <Database className="w-4 h-4 text-indigo-600" />,
}

export function TechnologiesSection() {
  const { t } = useLanguage()

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-foreground">{t("about.technologies")}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-sm flex items-center gap-2">
            {techIcons[skill]}
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

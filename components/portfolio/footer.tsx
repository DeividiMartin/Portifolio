"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border pt-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-muted-foreground text-sm">{t("footer.copyright")}</p>
        <div className="flex gap-4">
          <a
            href="mailto:deividi_97@hotmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/DeividiMartin"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
            rel="noreferrer"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/deividi-martin-4b02391a3/"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
            rel="noreferrer"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

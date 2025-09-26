"use client"

import { useLanguage } from "@/contexts/language-context"
import { TechnologiesSection } from "./header"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="mb-16">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">{t("about.title")}</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">{t("about.paragraph1")}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("about.paragraph2")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about.paragraph3")}</p>
          </div>
        </div>

        <TechnologiesSection />
      </div>
    </section>
  )
}

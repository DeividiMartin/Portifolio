"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { academicSubjects } from "@/lib/data"

export function EducationSection() {
  const { t, language } = useLanguage()
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null)

  const toggleSubject = (id: string) => {
    setExpandedSubject(expandedSubject === id ? null : id)
  }

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-8 text-foreground">{t("education.title")}</h2>
      <div className="space-y-4">
        {academicSubjects.map((subject) => (
          <Card key={subject.id} className="overflow-hidden">
            <button
              onClick={() => toggleSubject(subject.id)}
              className="w-full p-6 text-left hover:bg-card/80 transition-colors flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold text-foreground">{subject.title[language]}</h3>
              {expandedSubject === subject.id ? (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            {expandedSubject === subject.id && (
              <div className="px-6 pb-6">
                <ul className="space-y-2">
                  {subject.topics[language].map((topic, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}

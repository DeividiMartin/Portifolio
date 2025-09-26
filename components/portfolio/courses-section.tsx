"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { courses } from "@/lib/data"

export function CoursesSection() {
  const { t, language } = useLanguage()

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-8 text-foreground">{t("courses.title")}</h2>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{course.title[language]}</h3>
                <p className="text-muted-foreground text-sm">{course.provider}</p>
              </div>
              {course.certificate !== "#" && (
                <Button variant="outline" size="sm" asChild>
                  <a href={course.certificate} target="_blank" className="flex items-center gap-2" rel="noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    {t("courses.certificate")}
                  </a>
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

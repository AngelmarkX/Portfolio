import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MapPin, Github } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 md:px-20 lg:px-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Get In Touch
          </h2>
          <p className="text-balance text-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="size-6 text-primary" />
              </div>
              <div>
                <p className="mb-1 font-medium text-foreground">Email</p>
                <a
                  href="mailto:miguel.zuluaga@ucp.edu.co"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  miguel.zuluaga@ucp.edu.co
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="size-6 text-primary" />
              </div>
              <div>
                <p className="mb-1 font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">
                  Colombia
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                <Github className="size-6 text-primary" />
              </div>
              <div>
                <p className="mb-1 font-medium text-foreground">GitHub</p>
                <a
                  href="https://github.com/AngelmarkX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  @AngelmarkX
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="gap-2">
            <a href="mailto:miguel.zuluaga@ucp.edu.co">
              <Mail className="size-4" />
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

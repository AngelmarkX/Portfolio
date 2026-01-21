import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

export function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20 md:px-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[350px_1fr]">
        <div className="relative mx-auto lg:mx-0">
          <div className="relative aspect-[2/3] w-72 overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted/10 lg:w-80">
            <img
              src={`${basePath}/images/profile.png`}
              alt="Miguel Angel - Profile Photo"
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* Decorative glow effect */}
          <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 blur-xl" />
        </div>

        <div>
          <h1 className="mb-4 font-sans text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Miguel Angel
          </h1>
          <p className="mb-6 font-mono text-lg text-primary md:text-xl">
            Full-Stack Developer
          </p>
          <p className="mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Passionate coder from Colombia with experience in JavaScript, React, Node.js, PHP, Laravel, Java, and MySQL. 
            Continuously learning and creating innovative solutions.
          </p>
          
          <div className="mb-12 flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <a href="#projects">
                View Projects
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/AngelmarkX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/miguel-angel-zuluaga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="size-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:miguel.zuluaga@ucp.edu.co"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'AppDonaciones',
    description: 'Proyecto de grado - Aplicación para gestionar donaciones con backend robusto.',
    tech: ['JavaScript', 'Node.js', 'React'],
    github: 'https://github.com/AngelmarkX/appDonaciones',
    stars: 1
  },
  {
    title: 'Backend AppDonaciones',
    description: 'Backend API para la aplicación de donaciones versión 1.',
    tech: ['JavaScript', 'Node.js', 'MySQL'],
    github: 'https://github.com/AngelmarkX/backend',
    stars: 1
  },
  {
    title: 'PokeApi',
    description: 'Aplicación interactiva usando la API de Pokémon.',
    tech: ['JavaScript', 'HTML', 'CSS', 'API'],
    github: 'https://github.com/AngelmarkX/PokeApi.github.io',
    demo: 'https://angelmarkx.github.io/PokeApi.github.io/'
  },
  {
    title: 'Proyecto Biblioteca TDS',
    description: 'Sistema de gestión de biblioteca desarrollado en Java.',
    tech: ['Java', 'MySQL'],
    github: 'https://github.com/AngelmarkX/ProyectoFinal'
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-20 md:px-20 lg:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="group transition-all hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="size-5" />
                        <span className="sr-only">GitHub repository</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="size-5" />
                        <span className="sr-only">Live demo</span>
                      </a>
                    )}
                  </div>
                </div>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Responsive Design']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'PHP', 'Laravel', 'Java', 'REST APIs']
  },
  {
    category: 'Database',
    skills: ['MySQL', 'Database Design', 'SQL']
  },
  {
    category: 'Tools & Other',
    skills: ['Git', 'GitHub', 'Problem Solving', 'Agile Development']
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="bg-card px-6 py-20 md:px-20 lg:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-l-2 border-primary pl-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            <span className="font-semibold text-accent">Fun fact:</span> I love videogames and I'm always excited to learn new technologies and take on challenging projects!
          </p>
        </div>
      </div>
    </section>
  )
}

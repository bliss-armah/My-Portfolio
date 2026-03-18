import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { works } from "../utils/data";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projectTags: Record<number, string[]> = {
  1: ["React", "TypeScript", "REST API"],
  2: ["React", "Node.js", "MongoDB"],
};

const Works = () => {
  return (
    <section id="project" className="py-28 lg:py-36">
      <div className="section-container">
        <div className="h-px bg-[hsl(var(--border))] mb-20" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--muted-foreground))] font-medium mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.05]">
              Recent projects
            </h2>
          </div>
          <p className="text-[hsl(var(--muted-foreground))] max-w-sm text-sm leading-relaxed">
            A selection of projects spanning full-stack applications, developer
            tools, and client work.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {works.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <Card className="overflow-hidden group hover:border-white/20 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-[hsl(var(--muted))]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[hsl(var(--background))]/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                <CardContent className="pt-5 pb-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h4 className="font-display text-base font-semibold text-white mb-1">
                        {project.title}
                      </h4>
                      <p className="text-xs text-[hsl(var(--muted-foreground))] m-0">{project.client}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2 m-0 leading-relaxed">
                    {project.content}
                  </p>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-0">
                  <div className="flex flex-wrap gap-1.5">
                    {(projectTags[project.id] ?? []).map((tag) => (
                      <Badge key={tag} variant="tech">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[hsl(var(--muted-foreground))] hover:text-white transition-colors rounded-md hover:bg-[hsl(var(--accent))]"
                      aria-label="GitHub"
                    >
                      <Github size={15} />
                    </a>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[hsl(var(--muted-foreground))] hover:text-white transition-colors rounded-md hover:bg-[hsl(var(--accent))]"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline">
            <Link to="/projects">View all projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Works;

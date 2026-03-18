import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaAws, FaPython,
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb,
  SiPostgresql, SiRedis, SiJira, SiTailwindcss, SiFastapi,
} from "react-icons/si";
import { Separator } from "./ui/separator";

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
  },
  {
    label: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Express", icon: <SiExpress />, color: "#ffffff" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
    ],
  },
  {
    label: "Cloud & Tools",
    skills: [
      { name: "AWS", icon: <FaAws />, color: "#FF9900" },
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
      { name: "Jira", icon: <SiJira />, color: "#0052CC" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 lg:py-36">
      <div className="section-container">
        <div className="h-px bg-[hsl(var(--border))] mb-20" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--muted-foreground))] font-medium mb-4">
              Tech Stack
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.05]">
              Tools I work with
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-0 divide-y divide-[hsl(var(--border))]">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: gi * 0.1 }}
              className="py-8 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 items-start"
            >
              <p className="text-sm font-medium text-[hsl(var(--muted-foreground))]/60 uppercase tracking-widest pt-1 m-0">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.04 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-sm text-[hsl(var(--muted-foreground))] hover:border-white/20 hover:text-white transition-all cursor-default"
                  >
                    <span className="text-base" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <Separator className="mt-0" />
      </div>
    </section>
  );
};

export default Skills;

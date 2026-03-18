import profile from "../assets/images/IMG_2368.jpg";
import { Navibar } from "../components";
import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import { Footer } from "../components";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navibar />

      {/* Hero header */}
      <div className="pt-[68px]">
        <div className="section-container py-16 md:py-24 border-b border-[hsl(var(--border))]">
          <p className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--muted-foreground))] font-medium mb-3">
            About
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.05]">
            About Me
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
              Communication & Collaboration
            </h2>

            <div className="space-y-5 mb-12">
              <p className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed">
                As a programmer, my communication skills are vital for effective
                collaboration. I excel in conveying complex technical concepts with
                clarity, patience, and adaptability. By actively listening and
                engaging with my peers, I create an inclusive environment where
                diverse perspectives are welcomed.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed">
                I leverage various communication channels — from face-to-face
                discussions to virtual platforms — to ensure effective information
                exchange. I foster positive relationships, promoting a supportive
                atmosphere where ideas are shared and clarified.
              </p>
            </div>

            <div className="h-px bg-[hsl(var(--border))] mb-12" />

            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
              Teamwork & Collaboration
            </h2>
            <div className="space-y-5">
              <p className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed">
                I am an engaged team member, contributing actively and effectively
                communicating with my peers. I excel in adapting to different
                perspectives, valuing diverse ideas, and working towards shared goals.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed">
                By leveraging the strengths and expertise of each team member, we
                foster creativity, innovation, and problem-solving. I am skilled in
                coordinating tasks, delegating responsibilities, and maintaining
                efficient communication channels in a supportive, inclusive environment.
              </p>
            </div>
          </motion.div>

          {/* Photo + stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[hsl(var(--border))] aspect-[4/5]">
              <img
                src={profile}
                alt="Bliss Armah"
                className="w-full h-full object-cover object-top"
                style={{ filter: "grayscale(100%) contrast(1.05)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))]/60 via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "3+", label: "Years" },
                { value: "10+", label: "Projects" },
                { value: "AWS", label: "Certified" },
              ].map((stat) => (
                <Card key={stat.label} className="px-4 py-4 text-center">
                  <div className="font-display text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5">{stat.label}</div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;

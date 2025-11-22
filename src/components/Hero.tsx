import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-glow" />
            <img
              src="/img_profile.jpg"
              alt="Mihnea-Andrei Velcea"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Hello, I'm <span className="text-gradient">Mihnea-Andrei Velcea</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Welcome to my personal website. I'm a passionate Computer Science student with a
              strong interest in AI and Software Engineering. Explore my work and learn more about
              my journey.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Learn More About Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-primary text-primary hover:bg-primary/10"
            >
              View Projects
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              size="icon"
              variant="ghost"
              className="hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a
                href="https://github.com/mihneave"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a
                href="https://linkedin.com/in/mihnea-andrei-velcea"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a href="mailto:mihneave2004@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-gradient">About Me</h2>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground/90">
              I am a passionate Computer Science student at the University of Bucharest, with a strong interest in AI and Software Engineering. My academic journey is complemented by my involvement with the Mathematics and Computer Science Student Association (ASMI), where I've gained practical experience in project management and team coordination. I am dedicated to solving complex problems and building innovative solutions.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-secondary/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-muted-foreground leading-relaxed">
                  BSc in Computer Science from the University of Bucharest, with relevant coursework in AI, Computer Vision, and NLP.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-secondary/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Skills</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Python, Java, C/C++, SQL, Git/Github, Docker, Machine Learning, Deep Learning, NLP, and MLOps.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-secondary/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Active volunteer at ASMI, contributing to project management, fundraising, and team coordination.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
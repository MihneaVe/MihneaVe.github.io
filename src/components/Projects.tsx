import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Deepfake Image Classification",
      description:
        "Competed in an image classification challenge to detect deepfake images. Designed and trained custom models from scratch, achieving 91% classification accuracy on the test set. Improved performance through ensemble learning, hyperparameter tuning, and data augmentation.",
      tags: ["PyTorch", "Pandas", "NumPy", "Pillow"],
      role: "Solo Developer",
    },
    {
      title: "Stochastic Process Simulation",
      description:
        "Developed an R-based simulation framework to model sequential stage completion times. Approximated expectations, probabilities, and distributions through large-scale Monte Carlo simulations. Built interactive Shiny applications to visualize probability distributions.",
      tags: ["R", "Shiny", "Monte Carlo Simulation", "MLE"],
      role: "Solo Developer",
    },
    {
      title: "Autonomous Agentic AI for Quantum Error Correction",
      description:
        'Engineered an autonomous Agentic AI pipeline to diagnose and correct quantum hardware errors. Trained a custom supervised learning model on synthetic circuit data, achieving 85% diagnostic accuracy. Developed a RAG system using a local Gemma-3 LLM to generate hardware-aware circuit patches.',
      tags: ["LangChain", "Gemma-3", "RAG", "PyTorch", "Agentic AI"],
      role: "Building the RAG & helping with the ML classifier",
      teamSize: "5 members",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-gradient">My Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I'm proud of. Each one represents a unique challenge and a learning opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                   <div className="text-xs text-muted-foreground pt-4">
                    {project.teamSize ? (
                      <p><strong>Team Size:</strong> {project.teamSize}</p>
                    ) : null}
                    <p><strong>Role:</strong> {project.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 inline-block">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Explore More</h3>
                <p className="text-muted-foreground max-w-md">
                  Check out my complete GitHub repository for more projects and contributions
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                  asChild
                >
                  <a
                    href="https://github.com/MihneaVe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    Visit My GitHub
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
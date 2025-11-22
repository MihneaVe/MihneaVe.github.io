import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-4">
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
                href="https://linkedin.com/in/mihneavelcea"
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
              <a href="mailto:contact@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mihnea-Andrei Velcea. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

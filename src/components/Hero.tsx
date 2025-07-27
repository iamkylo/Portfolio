import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-mint/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10 pt-60">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Animated Hi Person in Center */}
          <div className="flex flex-col items-center justify-center mb-6">
            <img src="/hi_12744409.png" alt="Hi icon" className="h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 animate-bounce mb-2" />
            <span className="text-xl md:text-2xl font-semibold text-accent">Welcome Back !!</span>
          </div>
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-reveal text-center">
            <span className="block text-foreground">Creative</span>
            <span className="block text-gradient">Developer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-reveal-delay text-center">
            I craft beautiful, functional experiences that bridge the gap between 
            design and technology. Let's build something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-12 text-reveal-delay w-full">
            <Button
              onClick={() => scrollToSection("#projects")}
              size="lg"
              className="btn-accent focus-ring"
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-0 text-reveal-delay w-full">
            <a
              href="https://github.com/iamkylo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-200 focus-ring rounded-sm p-2"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaushik-kumar-sahoo-a20a1928b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-200 focus-ring rounded-sm p-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:sahookaushik1797@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-200 focus-ring rounded-sm p-2"
              aria-label="Send Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll indicator */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
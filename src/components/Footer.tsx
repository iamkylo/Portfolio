import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/iamkylo",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kaushik-kumar-sahoo-a20a1928b/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:sahookaushik1797@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Personal Touch */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-radius bg-gradient-to-br from-accent to-mint flex items-center justify-center">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-lg">Portfolio</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                "The best way to predict the future is to create it." 
                <br />
                <span className="text-accent font-medium">— Peter Drucker</span>
              </p>
              
              <p className="text-sm text-muted-foreground">
                Crafted with passion using React, TypeScript, and Tailwind CSS. 
                Built to inspire and connect.
              </p>
            </div>

            {/* Quick Links & Social */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-accent">Quick Links</h4>
                <div className="flex flex-wrap gap-4">
                  {["About", "Skills", "Projects", "Contact"].map((link) => (
                    <button
                      key={link}
                      onClick={() => {
                        const element = document.querySelector(`#${link.toLowerCase()}`);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-muted-foreground hover:text-accent transition-colors duration-200 focus-ring rounded-sm px-1"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-accent">Connect</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-radius bg-muted hover:bg-accent hover:text-accent-foreground transition-colors duration-200 flex items-center justify-center focus-ring"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
         <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Kaushik Kumar Sahoo. 
              <Heart className="inline h-4 w-4 text-accent mx-1" />
              
            </p>
            
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span></span>
              <span>•</span>
              <span>Responsive design</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

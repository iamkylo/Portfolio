import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "C/C++", level: 88 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 }
      ]
    },
    {
      title: "Blockchain & Web3",
      skills: [
        { name: "Solidity", level: 80 },
        { name: "Smart Contracts", level: 78 },
        { name: "DApps Development", level: 75 },
        { name: "Web3.js", level: 80 }
      ]
    }
  ];

  const technologies = [
    "React.js", "Next.js", "Node.js", "Express.js", "React Native", "JavaScript",
    "C", "C++", "HTML5", "CSS3", "MongoDB", "Firebase", "SQL",
    "Solidity", "Smart Contracts", "DApps", "Hyperledger Fabric", "Web3.js",
    "ERC-20", "ERC-721", "PoW", "PoS", "Git", "GitHub", "VS Code",
    "REST APIs", "Google Maps API", "ShadCn", "Tailwind CSS"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise in full-stack development, blockchain technologies, 
              and modern web development practices.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies & CV Download */}
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Technologies & Tools</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-surface hover:bg-accent hover:text-accent-foreground transition-colors duration-200 border border-border"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CV Download Button */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="btn-accent focus-ring"
              >
                <a 
                  href="/Resume.pdf" 
                  download="Kaushik_Kumar_Sahoo_Resume.pdf"
                  className="inline-flex items-center gap-2"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="card-elegant p-8 max-w-3xl mx-auto">
              <h4 className="text-lg font-semibold mb-4 text-accent">Continuous Learning</h4>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about emerging technologies, particularly in blockchain and Web3 space. 
                Currently exploring advanced smart contract patterns, DeFi protocols, and 
                cross-chain development. Always eager to tackle new challenges!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
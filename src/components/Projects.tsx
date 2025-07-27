import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Suchna Sangam - Bridging the Information Gap for Isolated Regions",
      description: [
        "Designed and developed scalable backend infrastructure using Firebase for remote rural access.",
        "Created and managed REST API endpoints for frontend-backend communication.",
        //"Participated in R&D efforts to improve system scalability and data reliability."
      ],
      image: "/1.png",
      technologies: ["Firebase", "JavaScript", "REST APIs", "HTML", "CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/cloudnexuss/Suchnasangam",
      featured: true
    },
    {
      title: "ISMS –  Institute Student Management System",
      description: [
        "Developed the responsive design frontend of a student management portal using HTML5, CSS3 and JavaScript.",
        "Implemented modules for academic record management, attendance tracking, file uploads, and announcements.",
        //"Ensured responsive design and interactive UI components for better usability."
      ],
      image: "/2.png.jpg",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/iamkylo/ISMS",
      featured: true
    },
    {
      title: " Fill It [Web] - Smart Container Fulfillment for Logistic",
      description: "Fill It is a real-time logistics platform that connects customers with nearby drivers to fulfill partially filled liquid containers efficiently.",
      image: "/3.png",
      technologies: ["JavaScript", "Google Maps API"," HTML","CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/iamkylo/Fill-IT-Web",
      featured: false
    },
    {
      title: "Fill It [Cross-Platform App] - Smart Container Fulfillment for Logistic",
      description: "Maximize Your Export Potential",
      image: "/4.png",
      technologies: ["React-native","Map-Api"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/iamkylo/Fill-It-App",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  // A helper function to render descriptions, whether they are strings or arrays of strings (for bullet points)
  const renderDescription = (description, isFeatured) => {
    const textClasses = isFeatured 
      ? "text-muted-foreground leading-relaxed text-lg" 
      : "text-muted-foreground mb-4 text-sm leading-relaxed";
    
    if (Array.isArray(description)) {
      return (
        <ul className={`list-disc list-inside space-y-2 ${textClasses}`}>
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      );
    }
    return <p className={textClasses}>{description}</p>;
  };

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my passion for creating 
              meaningful digital experiences.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="card-elegant overflow-hidden group">
                    <div className="aspect-video bg-black flex items-center justify-center relative overflow-hidden p-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-mint/20 z-0" />
                      <img
                        src={project.image}
                        alt={project.title + ' screenshot'}
                        className="w-full h-full object-contain relative z-10 max-h-60 rounded shadow bg-black"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    {renderDescription(project.description, true)}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-accent/10 text-accent border-accent/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <Button
                      asChild
                      variant="outline"
                      className="border-border hover:bg-surface focus-ring"
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <Card key={index} className="card-elegant group">
                  <CardHeader className="p-0">
                    <div className="aspect-video bg-black flex items-center justify-center relative overflow-hidden rounded-t-radius-lg p-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-mint/20 z-0" />
                      <img
                        src={project.image}
                        alt={project.title + ' screenshot'}
                        className="w-full h-full object-contain relative z-10 max-h-48 rounded shadow bg-black"
                        loading="lazy"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-3">{project.title}</CardTitle>
                    {renderDescription(project.description, false)}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-surface text-muted-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-border hover:bg-surface focus-ring"
                      >
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <Github className="h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
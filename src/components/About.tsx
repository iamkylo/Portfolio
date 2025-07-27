import { Card, CardContent } from "@/components/ui/card";
import { Heart, Code, Palette, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Every project I work on is infused with genuine care and attention to detail."
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "I believe in writing clean, maintainable code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Design-Minded",
      description: "Beautiful interfaces aren't just nice to have—they're essential for great experiences."
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Technology should serve people, not the other way around."
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer who believes that great software is born 
              from the intersection of technical skill and human empathy.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden card-elegant bg-gradient-to-br from-accent/20 to-mint/20 p-2">
                  <img
                    src="/picofme.png"
                    alt="Professional headshot"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-mint rounded-full opacity-40 animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="card-elegant group hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-radius-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <value.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
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

export default About;
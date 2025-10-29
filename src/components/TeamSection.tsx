import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead Data Scientist",
      initials: "SC",
      bio: "10+ years in ML and fraud detection systems",
      color: "bg-primary"
    },
    {
      name: "Michael Rodriguez",
      role: "Machine Learning Engineer",
      initials: "MR",
      bio: "Expert in neural networks and deep learning",
      color: "bg-secondary"
    },
    {
      name: "Emily Thompson",
      role: "Banking Security Advisor",
      initials: "ET",
      bio: "15 years in financial security and compliance",
      color: "bg-accent"
    },
    {
      name: "David Park",
      role: "Data Engineer",
      initials: "DP",
      bio: "Specializes in big data and real-time processing",
      color: "bg-primary-light"
    }
  ];

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the experts behind our fraud detection technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <Avatar className={`w-24 h-24 mx-auto mb-4 ${member.color}`}>
                  <AvatarFallback className="text-2xl font-bold text-white">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3">
                  <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </button>
                  <button className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors">
                    <Mail className="w-4 h-4 text-secondary" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-card rounded-2xl p-8 border-2">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Our Mission
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're always looking for talented individuals passionate about using AI 
            to make financial transactions safer. If you're interested in contributing 
            to this project or collaborating with us, we'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Database, Shield, BarChart3, Cpu, GitBranch } from "lucide-react";

const TechnologySection = () => {
  const technologies = [
    {
      icon: Network,
      title: "Neural Networks",
      description: "Deep learning architectures for complex pattern detection",
      tags: ["Deep Learning", "Multi-layer"]
    },
    {
      icon: GitBranch,
      title: "Random Forest",
      description: "Ensemble learning method for robust classification",
      tags: ["Ensemble", "Decision Trees"]
    },
    {
      icon: BarChart3,
      title: "Anomaly Detection",
      description: "Statistical methods to identify unusual transaction patterns",
      tags: ["Statistics", "Outlier Detection"]
    },
    {
      icon: Cpu,
      title: "Gradient Boosting",
      description: "Advanced algorithms like XGBoost for high accuracy",
      tags: ["XGBoost", "Boosting"]
    },
    {
      icon: Database,
      title: "Feature Engineering",
      description: "Sophisticated data transformation and feature extraction",
      tags: ["Data Processing", "ML Pipeline"]
    },
    {
      icon: Shield,
      title: "Real-time Processing",
      description: "Stream processing for instant fraud detection",
      tags: ["Low Latency", "Streaming"]
    }
  ];

  const metrics = [
    { label: "Transaction Speed", value: "<50ms", icon: Zap },
    { label: "False Positives", value: "<0.5%", icon: Shield },
    { label: "Daily Transactions", value: "10M+", icon: Database },
    { label: "Model Updates", value: "24/7", icon: Cpu }
  ];

  return (
    <section id="technology" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technology & Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Powered by state-of-the-art machine learning algorithms and data science techniques
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-secondary"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <tech.icon className="w-7 h-7 text-secondary" />
                </div>
                <CardTitle className="text-xl">{tech.title}</CardTitle>
                <CardDescription className="text-base">
                  {tech.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-primary/5 rounded-xl p-8 border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-3">High Accuracy</h3>
            <p className="text-muted-foreground mb-4">
              Our models achieve industry-leading accuracy with minimal false positives
            </p>
            <div className="text-4xl font-bold text-primary">99.7%</div>
          </div>
          
          <div className="bg-secondary/5 rounded-xl p-8 border-2 border-secondary/20">
            <h3 className="text-2xl font-bold text-foreground mb-3">Low Latency</h3>
            <p className="text-muted-foreground mb-4">
              Real-time analysis ensures immediate fraud detection and prevention
            </p>
            <div className="text-4xl font-bold text-secondary">&lt;50ms</div>
          </div>
          
          <div className="bg-accent/5 rounded-xl p-8 border-2 border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-3">Compliance</h3>
            <p className="text-muted-foreground mb-4">
              Fully compliant with banking regulations and data privacy laws
            </p>
            <div className="text-4xl font-bold text-accent">100%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import missing icon
import { Zap } from "lucide-react";

export default TechnologySection;
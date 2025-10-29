import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, Lock, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced algorithms analyze patterns to identify fraudulent behavior in real-time"
    },
    {
      icon: TrendingUp,
      title: "Pattern Recognition",
      description: "Continuous learning from historical data to adapt to evolving fraud tactics"
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "Bank-grade encryption ensuring complete privacy and regulatory compliance"
    },
    {
      icon: Zap,
      title: "Real-Time Monitoring",
      description: "Instant alerts and automated responses to suspicious transaction activities"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About the Project
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our fraud detection system leverages cutting-edge artificial intelligence 
            to protect financial institutions and their customers from fraudulent transactions. 
            By analyzing millions of data points in milliseconds, we provide unparalleled security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                How It Works
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Data Collection</h4>
                    <p className="text-muted-foreground">Transaction data is securely collected and preprocessed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">AI Analysis</h4>
                    <p className="text-muted-foreground">Machine learning models analyze patterns and anomalies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Risk Assessment</h4>
                    <p className="text-muted-foreground">Each transaction receives a fraud probability score</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Action & Alert</h4>
                    <p className="text-muted-foreground">Automated response and notification to prevent fraud</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20 blur-2xl" />
                <div className="relative bg-card rounded-2xl p-8 shadow-xl border-2 border-primary/20">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">99.7%</div>
                    <div className="text-lg text-muted-foreground mb-6">Detection Accuracy</div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Precision</span>
                        <span className="font-semibold text-foreground">98.5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Recall</span>
                        <span className="font-semibold text-foreground">97.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">F1 Score</span>
                        <span className="font-semibold text-foreground">97.8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
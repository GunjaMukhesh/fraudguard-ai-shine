import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertCircle, CheckCircle, Activity } from "lucide-react";

const ModelInsightsSection = () => {
  const insights = [
    {
      title: "Fraud Detection Rate",
      value: "99.7%",
      change: "+2.3%",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      title: "False Positive Rate",
      value: "0.4%",
      change: "-0.2%",
      trend: "down",
      icon: AlertCircle,
      color: "text-yellow-500"
    },
    {
      title: "Transactions Analyzed",
      value: "10.2M",
      change: "+15%",
      trend: "up",
      icon: Activity,
      color: "text-blue-500"
    },
    {
      title: "Average Response Time",
      value: "42ms",
      change: "-8ms",
      trend: "down",
      icon: TrendingUp,
      color: "text-purple-500"
    }
  ];

  const fraudTypes = [
    { type: "Card Not Present", percentage: 35, detected: 2847 },
    { type: "Account Takeover", percentage: 25, detected: 2034 },
    { type: "Payment Fraud", percentage: 20, detected: 1627 },
    { type: "Identity Theft", percentage: 15, detected: 1220 },
    { type: "Other", percentage: 5, detected: 407 }
  ];

  return (
    <section id="insights" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Model Insights & Performance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-time analytics and performance metrics from our fraud detection system
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {insights.map((insight, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <insight.icon className={`w-8 h-8 ${insight.color}`} />
                  <span className={`text-sm font-semibold ${
                    insight.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {insight.change}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {insight.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {insight.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visualizations */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Fraud Types Distribution */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Fraud Types Detected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fraudTypes.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{item.type}</span>
                      <span className="text-sm text-muted-foreground">{item.detected} cases</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{item.percentage}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Model Performance */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Model Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Precision</span>
                    <span className="text-lg font-bold text-primary">98.5%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '98.5%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Recall</span>
                    <span className="text-lg font-bold text-secondary">97.2%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: '97.2%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">F1 Score</span>
                    <span className="text-lg font-bold text-accent">97.8%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '97.8%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">AUC-ROC</span>
                    <span className="text-lg font-bold text-primary-light">99.1%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary-light rounded-full" style={{ width: '99.1%' }} />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Our model continuously learns from new data, ensuring optimal performance 
                    and adaptation to emerging fraud patterns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Insights */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Continuous Improvement
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Model Training & Updates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">10M+</div>
              <div className="text-sm text-muted-foreground">Daily Transactions Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">$2.5B</div>
              <div className="text-sm text-muted-foreground">Fraud Prevented Annually</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelInsightsSection;
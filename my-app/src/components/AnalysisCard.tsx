import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertTriangle, XCircle, CheckCircle } from "lucide-react";

interface AnalysisResult {
  credibilityScore: number;
  trustLevel: 'high' | 'medium' | 'low';
  factors: {
    sources: number;
    factual: number;
    bias: number;
    clarity: number;
  };
  summary: string;
}

interface AnalysisCardProps {
  result: AnalysisResult;
  isLoading?: boolean;
}

export const AnalysisCard = ({ result, isLoading }: AnalysisCardProps) => {
  const getTrustIcon = (level: string) => {
    switch (level) {
      case 'high':
        return <CheckCircle className="h-5 w-5" />;
      case 'medium':
        return <AlertTriangle className="h-5 w-5" />;
      case 'low':
        return <XCircle className="h-5 w-5" />;
      default:
        return <Shield className="h-5 w-5" />;
    }
  };

  const getTrustColor = (level: string) => {
    switch (level) {
      case 'high':
        return 'text-trust-high';
      case 'medium':
        return 'text-trust-medium';
      case 'low':
        return 'text-trust-low';
      default:
        return 'text-muted-foreground';
    }
  };

  const getTrustBadgeVariant = (level: string) => {
    switch (level) {
      case 'high':
        return 'bg-trust-high text-trust-high-foreground';
      case 'medium':
        return 'bg-trust-medium text-trust-medium-foreground';
      case 'low':
        return 'bg-trust-low text-trust-low-foreground';
      default:
        return 'secondary';
    }
  };

  if (isLoading) {
    return (
      <Card className="shadow-soft animate-pulse">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-muted-foreground" />
            Analyzing...
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="h-4 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="h-4 bg-muted rounded w-2/3"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-soft border-l-4 border-l-primary">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={getTrustColor(result.trustLevel)}>
              {getTrustIcon(result.trustLevel)}
            </span>
            Credibility Analysis
          </div>
          <Badge className={getTrustBadgeVariant(result.trustLevel)}>
            {result.trustLevel.toUpperCase()}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Credibility Score</span>
            <span className="text-2xl font-bold">{result.credibilityScore}%</span>
          </div>
          <Progress 
            value={result.credibilityScore} 
            className="h-3"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Source Reliability</span>
              <span>{result.factors.sources}%</span>
            </div>
            <Progress value={result.factors.sources} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Factual Accuracy</span>
              <span>{result.factors.factual}%</span>
            </div>
            <Progress value={result.factors.factual} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Bias Detection</span>
              <span>{result.factors.bias}%</span>
            </div>
            <Progress value={result.factors.bias} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Content Clarity</span>
              <span>{result.factors.clarity}%</span>
            </div>
            <Progress value={result.factors.clarity} className="h-2" />
          </div>
        </div>

        <div className="pt-4 border-t">
          <h4 className="font-medium mb-2">Analysis Summary</h4>
          <p className="text-sm text-muted-foreground">{result.summary}</p>
        </div>
      </CardContent>
    </Card>
  );
};
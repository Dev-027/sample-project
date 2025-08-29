import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { NewsInput } from "@/components/NewsInput";
import { AnalysisCard } from "@/components/AnalysisCard";
import { useToast } from "@/components/ui/use-toast";

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

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  // Mock analysis function - in real app would call actual API
  const performAnalysis = async (content: string, type: 'text' | 'url'): Promise<AnalysisResult> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock analysis result based on content
    const score = Math.floor(Math.random() * 40) + 60; // 60-100 range
    let trustLevel: 'high' | 'medium' | 'low' = 'high';
    
    if (score < 70) trustLevel = 'low';
    else if (score < 85) trustLevel = 'medium';
    
    return {
      credibilityScore: score,
      trustLevel,
      factors: {
        sources: Math.floor(Math.random() * 30) + 70,
        factual: Math.floor(Math.random() * 25) + 75,
        bias: Math.floor(Math.random() * 35) + 65,
        clarity: Math.floor(Math.random() * 20) + 80,
      },
      summary: `Based on our comprehensive analysis using ${type === 'url' ? 'URL content extraction and' : ''} multiple verification parameters, this content shows ${trustLevel} credibility indicators. The analysis considered source reliability, fact-checking databases, bias detection algorithms, and content coherence metrics.`
    };
  };

  const handleAnalyze = async (content: string, type: 'text' | 'url') => {
    setIsLoading(true);
    setAnalysisResult(null);
    
    try {
      const result = await performAnalysis(content, type);
      setAnalysisResult(result);
      
      toast({
        title: "Analysis Complete",
        description: `Credibility score: ${result.credibilityScore}% (${result.trustLevel} trust level)`,
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Unable to analyze the content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16 space-y-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Analyze News Content</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Upload text content or provide a URL to get comprehensive credibility analysis 
              using our advanced AI detection algorithms.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <NewsInput onAnalyze={handleAnalyze} isLoading={isLoading} />
            
            <div>
              {isLoading && (
                <AnalysisCard 
                  result={{
                    credibilityScore: 0,
                    trustLevel: 'high',
                    factors: { sources: 0, factual: 0, bias: 0, clarity: 0 },
                    summary: ''
                  }}
                  isLoading={true}
                />
              )}
              
              {analysisResult && !isLoading && (
                <AnalysisCard result={analysisResult} />
              )}
              
              {!isLoading && !analysisResult && (
                <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center">
                  <div className="text-muted-foreground">
                    <div className="text-lg font-medium mb-2">Ready to Analyze</div>
                    <p className="text-sm">
                      Enter news content or URL in the form to get started with credibility analysis.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-muted/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 News Sleuth Studio. Advanced fake news detection powered by AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
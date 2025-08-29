import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, AlertTriangle, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              News Sleuth Studio
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Advanced AI-powered fake news detection and credibility analysis for the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Real-time Analysis</h3>
              <p className="text-sm opacity-80">
                Instant credibility scoring using advanced machine learning algorithms
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Multi-factor Verification</h3>
              <p className="text-sm opacity-80">
                Source reliability, bias detection, and factual accuracy assessment
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Trusted by Professionals</h3>
              <p className="text-sm opacity-80">
                Used by journalists, researchers, and fact-checkers worldwide
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Analysis
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">99.7%</div>
              <div className="text-sm opacity-80">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm opacity-80">Articles Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2.3s</div>
              <div className="text-sm opacity-80">Average Analysis Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-80">Detection Parameters</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
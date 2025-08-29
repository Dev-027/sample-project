import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FileText, Link } from "lucide-react";

interface NewsInputProps {
  onAnalyze: (content: string, type: 'text' | 'url') => void;
  isLoading?: boolean;
}

export const NewsInput = ({ onAnalyze, isLoading }: NewsInputProps) => {
  const [textContent, setTextContent] = useState("");
  const [urlContent, setUrlContent] = useState("");

  const handleAnalyzeText = () => {
    if (textContent.trim()) {
      onAnalyze(textContent, 'text');
    }
  };

  const handleAnalyzeUrl = () => {
    if (urlContent.trim()) {
      onAnalyze(urlContent, 'url');
    }
  };

  return (
    <Card className="shadow-medium">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5 text-primary" />
          Analyze News Content
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="text" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Text Content
            </TabsTrigger>
            <TabsTrigger value="url" className="flex items-center gap-2">
              <Link className="h-4 w-4" />
              Article URL
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="text" className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="news-text" className="text-sm font-medium">
                Paste the news article content below:
              </label>
              <Textarea
                id="news-text"
                placeholder="Enter or paste the news article content you want to analyze..."
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                className="min-h-[200px] resize-none"
              />
            </div>
            <Button
              onClick={handleAnalyzeText}
              disabled={!textContent.trim() || isLoading}
              className="w-full"
              variant="hero"
            >
              {isLoading ? "Analyzing..." : "Analyze Text Content"}
            </Button>
          </TabsContent>
          
          <TabsContent value="url" className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="news-url" className="text-sm font-medium">
                Enter the URL of the news article:
              </label>
              <Input
                id="news-url"
                type="url"
                placeholder="https://example.com/news-article"
                value={urlContent}
                onChange={(e) => setUrlContent(e.target.value)}
              />
            </div>
            <Button
              onClick={handleAnalyzeUrl}
              disabled={!urlContent.trim() || isLoading}
              className="w-full"
              variant="hero"
            >
              {isLoading ? "Analyzing..." : "Analyze Article URL"}
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
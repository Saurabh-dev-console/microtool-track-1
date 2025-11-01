import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Code } from "lucide-react";
import { Link } from "react-router-dom";

const ExampleTool = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Button>
        </Link>

        <div className="space-y-8">
          {/* Tool Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-accent">
                <Code className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground">Example Tool</h1>
                <p className="text-muted-foreground">A template for creating your own tools</p>
              </div>
            </div>
          </div>

          {/* Tool Content */}
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">About This Tool</h2>
                <p className="text-muted-foreground">
                  This is an example tool page. Replace this content with your actual tool implementation.
                  You can add interactive components, forms, outputs, and any functionality your tool needs.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">How to Add Your Tool</h2>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Add your tool info to <code className="bg-muted px-2 py-1 rounded">src/data/tools.ts</code></li>
                  <li>Create a new page in <code className="bg-muted px-2 py-1 rounded">src/pages/tools/</code></li>
                  <li>Add the route in <code className="bg-muted px-2 py-1 rounded">src/App.tsx</code></li>
                  <li>Your tool will automatically appear on the home page!</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Example Code</h2>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-muted-foreground">{`// Add to src/data/tools.ts
{
  id: "my-awesome-tool",
  name: "My Awesome Tool",
  description: "What this tool does",
  icon: "Sparkles",
  category: "Utilities",
  path: "/tools/my-awesome-tool"
}`}</code>
                </pre>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ExampleTool;

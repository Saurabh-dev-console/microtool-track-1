import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Code2, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About MicroTools Hub
            </h1>
            <p className="text-lg text-muted-foreground">
              Your one-stop destination for developer productivity tools
            </p>
          </div>

          {/* Mission Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              MicroTools Hub is dedicated to providing developers with a comprehensive collection of 
              micro tools that enhance productivity and streamline workflows. We believe that the right 
              tools at the right time can make all the difference in a developer's journey.
            </p>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Developer First</h3>
              <p className="text-sm text-muted-foreground">
                Built by developers, for developers. Every tool is crafted with the developer experience in mind.
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                All tools run locally in your browser. No server delays, no data transmission concerns.
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Purpose Built</h3>
              <p className="text-sm text-muted-foreground">
                Each tool is designed to do one thing and do it exceptionally well.
              </p>
            </Card>
          </div>

          {/* Story Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                MicroTools Hub started as a personal collection of utilities that we found ourselves 
                needing repeatedly in our daily development work. Instead of searching for online tools 
                or writing the same scripts over and over, we decided to create a centralized hub.
              </p>
              <p>
                Today, MicroTools Hub hosts over 100 carefully crafted tools, each designed to solve 
                specific problems developers face every day. From formatters and converters to generators 
                and validators, we've got you covered.
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

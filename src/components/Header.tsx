import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
            <Code2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MicroTools Hub
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            ABOUT
          </Link>
          <Link 
            to="/contact" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
};

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
// import logoPicture  from "./assets/logo.png";

const Header = () => {
  return (
    <header className="w-full bg-gradient-hero shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-primary-foreground font-semibold text-lg">
              Untethered<br />
              <span className="text-sm font-normal">Coaching LLC</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-primary-foreground hover:text-accent transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              to="/intake" 
              className="text-primary-foreground hover:text-accent transition-colors duration-300"
            >
              Intake
            </Link>
            <Link 
              to="/booking" 
              className="text-primary-foreground hover:text-accent transition-colors duration-300"
            >
              Booking
            </Link>
          </nav>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 w-64 bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-background/20"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
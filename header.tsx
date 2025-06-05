// src/components/layout/header.tsx

import { useState } from 'react';
import { Menu, X, Lightbulb, Bookmark, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from "react-router-dom";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resources', href: '#resources' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">SkillsHub</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/data-sourcing" className="text-sm font-medium transition-colors hover:text-primary">
            Data Transparency
          </Link>
          <Link to="/skills" className="text-sm font-medium transition-colors hover:text-primary">
            Skills
          </Link>
        </nav>


        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bookmark className="h-5 w-5" />
            <span className="sr-only">Bookmarks</span>
          </Button>
          
          <ThemeToggle />
          
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[385px]">
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <span className="text-lg font-bold">SkillsHub</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <a 
                      key={item.href} 
                      href={item.href} 
                      className="text-sm font-medium py-2 transition-colors hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                
                <div className="flex flex-col gap-3 pt-4">
                  <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
                    <Bookmark className="h-4 w-4" />
                    <span>Bookmarks</span>
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-700">
          ShubhOm
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-green-700">Home</Link>
          <Link href="#about" className="text-gray-600 hover:text-green-700">About</Link>
          <Link href="#classes" className="text-gray-600 hover:text-green-700">Classes</Link>
          <Link href="#trainers" className="text-gray-600 hover:text-green-700">Trainers</Link>
          <Link href="#contact" className="text-gray-600 hover:text-green-700">Contact</Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link href="/" className="text-gray-600 hover:text-green-700">Home</Link>
            <Link href="#about" className="text-gray-600 hover:text-green-700">About</Link>
            <Link href="#classes" className="text-gray-600 hover:text-green-700">Classes</Link>
            <Link href="#trainers" className="text-gray-600 hover:text-green-700">Trainers</Link>
            <Link href="#contact" className="text-gray-600 hover:text-green-700">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
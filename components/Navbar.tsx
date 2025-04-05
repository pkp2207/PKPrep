'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, redirect } from 'next/navigation';
import { Button } from './ui/button';
import { signOut } from '@/lib/actions/auth.action';
import Image from 'next/image';
import Link from 'next/link';
import Loader from './Loader';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    // Close mobile menu when changing routes
    setIsMenuOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    setLoading(true);
    await signOut();
    redirect('/sign-in');
  };

  const handleLoadingComplete = () => {
    console.log('Page transition complete');
    // You can trigger additional animations here if needed
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {loading && (
        <Loader 
          isVisible={loading} 
          minDisplayTime={5000} 
          onComplete={handleLoadingComplete} 
        />
      )}
      
      <nav className="shadow-md py-4 px-6 flex items-center animate-fadeIn justify-between relative">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <h2 className="text-2xl font-semibold text-white">PKPrep</h2>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-white text-center hover:text-gray-300 transition duration-200">
            About
          </Link>
          <Button onClick={handleLogout} className="btn btn-primary">
            Log out
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full right-0 left-0 bg-gray-800 shadow-lg py-4 px-6 z-10 animate-slideDown">
            <div className="flex flex-col gap-4">
              <Link 
                href="/about" 
                className="text-white text-center hover:text-gray-300 transition duration-200 py-2"
              >
                About
              </Link>
              <Button 
                onClick={handleLogout} 
                className="btn btn-primary w-full"
              >
                Log out
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
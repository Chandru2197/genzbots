// File: components/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

interface DropdownItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export default function Navbar({ addToRefs }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Refs for DOM elements
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Parallax effect through refs
  useEffect(() => {
    if (addToRefs) {
      if (logoRef.current) addToRefs(logoRef.current);
      if (menuRef.current) addToRefs(menuRef.current);
    }
  }, [addToRefs]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      [logoRef.current, menuRef.current].forEach((element) => {
        if (!element) return;
        const speed = element.dataset.speed || '0.1';
        const yPos = -scrollY * parseFloat(speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        element.style.willChange = 'transform';
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '#services',
      dropdown: [
        { label: 'Process Automation', href: '#process-automation' },
        { label: 'Data Integration', href: '#data-integration' },
        { label: 'Custom Software', href: '#custom-software' },
        { label: 'RPA Implementation', href: '#rpa' }
      ]
    },
    {
      label: 'Solutions',
      href: '#solutions',
      dropdown: [
        { label: 'For Small Business', href: '#small-business' },
        { label: 'For Enterprise', href: '#enterprise' },
        { label: 'For Healthcare', href: '#healthcare' },
        { label: 'For Finance', href: '#finance' }
      ]
    },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      setActiveDropdown(null); // Close dropdown on scroll
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const dropdownButtons = document.querySelectorAll('[data-dropdown]');
      const isClickInsideDropdown = Array.from(dropdownButtons).some(button => 
        button.contains(target)
      );
      
      if (!isClickInsideDropdown) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left: Logo & Menu */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div data-speed="0.02" className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={'/assets/svgs/GenZBotLogo.svg'}
                  alt="Logo"
                  width={125}
                  height={50}
                  priority
                />
              </Link>
            </div>
            {/* Desktop Menu */}
            <div data-speed="0.02" className="hidden md:block">
              <div className="flex items-center space-x-6">
                {menuItems.map((item) => (
                  <div key={item.label} className="relative group">
                    {item.dropdown ? (
                      <>
                        <button
                          data-dropdown
                          onClick={() => toggleDropdown(item.label)}
                          className={`text-label font-label transition-colors flex items-center ${
                            activeDropdown === item.label ? 'text-[var(--color-secondary)]' : ''
                          }`}
                        >
                          {item.label}
                          <svg
                            className={`ml-1 w-4 h-4 transition-transform ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {/* Dropdown menu */}
                        <div
                          className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transform transition-all origin-top-left ${
                            activeDropdown === item.label
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-95 pointer-events-none'
                          }`}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-desc font-desc text-gray-700 hover:bg-orange-50 hover:text-[var(--color-secondary)]"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-label font-label transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Get Started Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="btn-secondary text-btn font-btn text-white px-5 py-2.5 rounded-none hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] border-2 border-transparent transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[var(--color-secondary)] hover:bg-orange-50 focus:outline-none"
            >
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          {menuItems.map((item) => (
            <div key={item.label} className="block">
              {item.dropdown ? (
                <div className="py-1">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex justify-between items-center w-full px-3 py-2 text-label font-label text-gray-800 hover:text-[var(--color-secondary)] hover:bg-orange-50 font-medium transition-colors rounded-md"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`pl-4 ${
                      activeDropdown === item.label ? 'block' : 'hidden'
                    }`}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block pl-3 pr-4 py-2 text-desc font-desc text-gray-700 hover:bg-orange-50 hover:text-[var(--color-secondary)] rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-label font-label text-gray-800 hover:text-[var(--color-secondary)] hover:bg-orange-50 font-medium transition-colors rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="#contact"
            className="btn-secondary block px-3 py-2 text-btn font-btn text-white rounded-md transition-colors text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
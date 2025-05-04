// File: components/Navbar.tsx
"use client";

import { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      setActiveDropdown(null);
    };
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const dropdownButtons = document.querySelectorAll('[data-dropdown]');
      const isClickInsideDropdown = Array.from(dropdownButtons).some(button => button.contains(target));
      if (!isClickInsideDropdown) setActiveDropdown(null);
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services', dropdown: [
      { label: 'Process Automation', href: '#process-automation' },
      { label: 'Data Integration', href: '#data-integration' },
      { label: 'Custom Software', href: '#custom-software' },
      { label: 'RPA Implementation', href: '#rpa' }
    ]},
    { label: 'Solutions', href: '#solutions', dropdown: [
      { label: 'For Small Business', href: '#small-business' },
      { label: 'For Enterprise', href: '#enterprise' },
      { label: 'For Healthcare', href: '#healthcare' },
      { label: 'For Finance', href: '#finance' }
    ]},
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-screen-xl mx-auto h-14 lg:h-16 flex justify-between items-center px-4">
        {/* Logo (left) */}
        <div className="flex items-center w-[200px]">
          <Link href="/" className="flex items-center">
            <Image
              src={'/assets/svgs/GenZBotLogo.svg'}
              alt="Logo"
              width={isMobile ? 150 : 200}
              height={isMobile ? 75 : 85}
              priority
              className="transition-all duration-300 hover:scale-105"
            />
          </Link>
        </div>
        {/* Menu (center) */}
        <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    data-dropdown
                    onClick={() => toggleDropdown(item.label)}
                    className={`text-menu font-medium transition-colors flex items-center cursor-pointer ${
                      activeDropdown === item.label ? 'text-[var(--color-secondary)]' : 'text-gray-700 hover:text-[var(--color-secondary)]'
                    }`}
                    suppressHydrationWarning
                  >
                    {item.label}
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
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
                    className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transform transition-all duration-200 origin-top-left ${
                      activeDropdown === item.label
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-menu font-desc text-gray-700 hover:bg-orange-50 hover:text-[var(--color-secondary)] transition-colors duration-200 cursor-pointer"
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
                  className="text-menu font-medium text-gray-700 hover:text-[var(--color-secondary)] transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
        {/* Button (right) */}
        <div className="flex-shrink-0 flex items-center">
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="btn-secondary text-btn font-btn text-white px-6 py-2.5 rounded-none hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] border-2 border-transparent transition-all duration-300 cursor-pointer"
            >
              Get Started
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[var(--color-secondary)] hover:bg-orange-50 focus:outline-none transition-colors duration-200"
              suppressHydrationWarning
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
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          {menuItems.map((item) => (
            <div key={item.label} className="block">
              {item.dropdown ? (
                <div className="py-1">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex justify-between items-center w-full px-3 py-2 text-label font-label text-gray-800 hover:text-[var(--color-secondary)] hover:bg-orange-50 font-medium transition-colors rounded-md cursor-pointer"
                    suppressHydrationWarning
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
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
                    className={`pl-4 transition-all duration-200 ${
                      activeDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block pl-3 pr-4 py-2 text-desc font-desc text-gray-700 hover:bg-orange-50 hover:text-[var(--color-secondary)] rounded-md transition-colors duration-200 cursor-pointer"
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
                  className="block px-3 py-2 text-label font-label text-gray-800 hover:text-[var(--color-secondary)] hover:bg-orange-50 font-medium transition-colors rounded-md cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="#contact"
            className="btn-secondary block px-3 py-2 text-btn font-btn text-white rounded-md transition-colors text-center mt-4 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
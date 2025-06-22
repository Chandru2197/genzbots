// File: components/Navbar.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { serviceIcons } from './ui/lucide-icons';
import { solutionIcons } from './ui/lucide-solution-icons';

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

// Helper for icon type safety
function getServiceIcon(label: string) {
  return (serviceIcons as Record<string, any>)[label] || serviceIcons['default'];
}

function getSolutionIcon(label: string) {
  return (solutionIcons as Record<string, any>)[label] || solutionIcons['default'];
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
    { label: 'Services', href: '#services', 
      dropdown: [
        { label: 'Bot Blueprint', href: '/services/bot-blueprint' },
        { label: 'Build & Test', href: '/services/build-and-test' },
        { label: 'Discovery Call', href: '/services/discovery-call' },
        { label: 'Hyper Care', href: '/services/hyper-care' },
        { label: 'Scale & Optimize', href: '/services/scale-optimize' }
      ]
    },
    { label: 'Solutions', href: '#solutions',
      dropdown: [
        { label: 'Time Liberation', href: '/solutions/time-liberation' },
        { label: 'Growth Accelerator', href: '/solutions/growth-accelerator' },
        { label: 'Profit Rescue', href: '/solutions/profit-rescue' },
        { label: 'Custom Bot Development', href: '/solutions/custombot-development' }
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white/30 backdrop-blur-md shadow-lg'
    }`}>
      <div className="relative w-full max-w-[1920px] mx-auto h-14 lg:h-16">
        {/* Logo absolutely positioned to the left */}
        <div className="absolute left-0 top-0 bottom-0 flex items-center pl-4">
          <Link href="/" className="flex items-center">
            <Image
              src={'/assets/svgs/GenZBotLogo.svg'}
              alt="Logo"
              width={isMobile ? 120 : 180}
              height={isMobile ? 60 : 75}
              priority
              className="transition-all duration-300 hover:scale-105 object-contain object-left"
            />
          </Link>
        </div>
        
        {/* Menu (center) - fixed in center */}
        <div className="flex h-full w-full justify-center items-center">
          <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      data-dropdown
                      onClick={() => toggleDropdown(item.label)}
                      className={`text-menu font-medium transition-colors flex items-center cursor-pointer ${
                        activeDropdown === item.label 
                          ? 'text-[var(--color-secondary)]' 
                          : 'text-[var(--color-primary-dark)] hover:text-[var(--color-secondary)]'
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
                    {/* Enhanced Hero Dropdown for Services */}
                    {item.label === 'Services' && activeDropdown === item.label && (
                      <div className="fixed left-1/2 top-[4.5rem] z-[120] transform -translate-x-1/2 w-full max-w-xl md:max-w-2xl rounded-3xl shadow-2xl border-0 bg-gradient-to-br from-emerald-200/80 via-blue-100/60 to-white/90 p-0 overflow-x-auto transition-all duration-200 opacity-100 scale-100 visible backdrop-blur-xl"
                        style={{ minWidth: '320px', maxWidth: '48vw' }}
                      >
                        <div className="flex">
                          {/* Left Hero Section */}
                          <div className="hidden md:flex flex-col items-center justify-center w-1/3 p-8 relative bg-gradient-to-br from-emerald-400/90 via-blue-200/70 to-blue-100/60 animate-fade-in">
                            <div className="relative flex flex-col items-center">
                              <div className="w-24 h-24 rounded-full bg-white/30 backdrop-blur-lg flex items-center justify-center shadow-emerald-200/40 shadow-2xl mb-4 animate-glow">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><ellipse cx="30" cy="30" rx="28" ry="28" fill="#10B981" fillOpacity="0.12"/><path d="M30 15L40 45H20L30 15Z" fill="#10B981"/></svg>
                              </div>
                              <span className="absolute -top-4 right-0 animate-pulse text-3xl">💡</span>
                            </div>
                            <h3 className="text-2xl font-extrabold text-emerald-900 mb-2 drop-shadow-lg">Automation Services</h3>
                            <p className="text-emerald-900/80 text-sm text-center">Unlock efficiency and scale with our expert automation solutions.</p>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-emerald-400 to-blue-300 rounded-full blur-sm opacity-40" />
                          </div>
                          {/* Right: Menu grid for Services */}
                          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 divide-x divide-y divide-emerald-200 bg-transparent">
                            {item.dropdown.map((dropdownItem, idx) => {
                              const IconComponent = getServiceIcon(dropdownItem.label);
                              let cardBg, accent;
                              switch (dropdownItem.label) {
                                case 'Bot Blueprint':
                                  cardBg = 'bg-white/70';
                                  accent = <span className="absolute -top-3 left-6 text-yellow-400 animate-bounce text-xl">💡</span>;
                                  break;
                                case 'Build & Test':
                                  cardBg = 'bg-blue-50/60';
                                  accent = <span className="absolute top-3 right-6 text-blue-400 animate-spin-slow text-lg">⚙️</span>;
                                  break;
                                case 'Discovery Call':
                                  cardBg = 'bg-yellow-50/60';
                                  accent = <span className="absolute top-2 left-8 text-orange-400 animate-bounce text-lg">📅</span>;
                                  break;
                                case 'Hyper Care':
                                  cardBg = 'bg-pink-50/60';
                                  accent = <span className="absolute top-3 right-6 text-pink-400 animate-heartbeat text-lg">❤️</span>;
                                  break;
                                case 'Scale & Optimize':
                                  cardBg = 'bg-emerald-50/60';
                                  accent = <span className="absolute top-3 left-6 text-emerald-400 animate-bounce text-lg">🚀</span>;
                                  break;
                                default:
                                  cardBg = 'bg-white/60';
                                  accent = null;
                              }
                              return (
                                <Link
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  className={`flex flex-col gap-1 px-5 py-4 border-0 ${cardBg} hover:bg-emerald-100/80 hover:shadow-emerald-200 hover:shadow-xl hover:text-emerald-700 transition-all duration-200 cursor-pointer group min-h-[90px] relative animate-fade-in-up backdrop-blur-md hover:border-emerald-400 border-0 overflow-hidden`}
                                  style={{ boxShadow: idx % 2 === 0 ? '0 2px 12px 0 rgba(16, 185, 129, 0.08)' : '0 2px 12px 0 rgba(59, 130, 246, 0.08)' }}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {accent}
                                  <div className="flex items-center gap-2 mb-0.5 z-10">
                                    <span className="inline-flex items-center justify-center w-8 h-8 bg-transparent group-hover:bg-emerald-50 transition-colors shadow-none text-xl text-emerald-500">
                                      <IconComponent size={22} />
                                    </span>
                                    <span className="font-bold text-base group-hover:text-emerald-700 transition-colors drop-shadow-sm">{dropdownItem.label}</span>
                                  </div>
                                  <span className="text-sm text-gray-500 group-hover:text-emerald-800 transition-colors z-10 leading-tight">
                                    {dropdownItem.label === 'Bot Blueprint' && 'Plan, design, and architect your automation bot.'}
                                    {dropdownItem.label === 'Build & Test' && 'Develop, test, and iterate your automation solution.'}
                                    {dropdownItem.label === 'Discovery Call' && 'Book a call to explore automation opportunities.'}
                                    {dropdownItem.label === 'Hyper Care' && 'Ongoing support and optimization for your bots.'}
                                    {dropdownItem.label === 'Scale & Optimize' && 'Expand and enhance your automation for growth.'}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Enhanced Hero Dropdown for Solutions */}
                    {item.label === 'Solutions' && activeDropdown === item.label && (
                      <div className="fixed left-1/2 top-[4.5rem] z-[120] transform -translate-x-1/2 w-full max-w-xl md:max-w-2xl rounded-3xl shadow-2xl border-0 bg-gradient-to-br from-yellow-100/90 via-pink-100/80 to-orange-50/90 p-0 overflow-x-auto transition-all duration-200 opacity-100 scale-100 visible backdrop-blur-xl"
                        style={{ minWidth: '320px', maxWidth: '48vw' }}
                      >
                        <div className="flex">
                          {/* Left Hero Section */}
                          <div className="hidden md:flex flex-col items-center justify-center w-1/3 p-8 relative bg-gradient-to-br from-orange-300/90 via-pink-200/70 to-yellow-100/60 animate-fade-in">
                            <div className="relative flex flex-col items-center">
                              <div className="w-24 h-24 rounded-full bg-white/40 backdrop-blur-lg flex items-center justify-center shadow-orange-200/40 shadow-2xl mb-4 animate-pop">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><ellipse cx="30" cy="30" rx="28" ry="28" fill="#FB923C" fillOpacity="0.12"/><path d="M30 15L50 50H10L30 15Z" fill="#FB923C"/></svg>
                              </div>
                              <span className="absolute -top-4 left-0 animate-bounce text-3xl">🚀</span>
                              <span className="absolute top-0 right-0 animate-sparkle text-2xl">✨</span>
                            </div>
                            <h3 className="text-2xl font-extrabold text-orange-900 mb-2 drop-shadow-lg">Business Solutions</h3>
                            <p className="text-orange-900/80 text-sm text-center">Accelerate growth and profits with our tailored solutions.</p>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-orange-400 to-pink-300 rounded-full blur-sm opacity-40" />
                          </div>
                          {/* Right: Menu grid for Solutions */}
                          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 divide-x divide-y divide-orange-200 bg-transparent">
                            {item.dropdown.map((dropdownItem, idx) => {
                              const IconComponent = getSolutionIcon(dropdownItem.label);
                              let cardBg, accent;
                              switch (dropdownItem.label) {
                                case 'Time Liberation':
                                  cardBg = 'bg-white/80';
                                  accent = <span className="absolute -top-3 left-6 text-yellow-400 animate-bounce text-xl">✨</span>;
                                  break;
                                case 'Growth Accelerator':
                                  cardBg = 'bg-gradient-to-br from-pink-100/80 via-white/90 to-orange-50/80';
                                  accent = <span className="absolute top-3 right-6 text-pink-400 animate-sparkle text-lg">🚀</span>;
                                  break;
                                case 'Profit Rescue':
                                  cardBg = 'bg-gradient-to-br from-orange-100/80 via-white/90 to-pink-50/80';
                                  accent = <span className="absolute top-3 left-6 text-orange-400 animate-bounce text-lg">💡</span>;
                                  break;
                                case 'Custom Bot Development':
                                  cardBg = 'bg-gradient-to-br from-white/90 via-pink-50/80 to-orange-50/80';
                                  accent = <span className="absolute top-3 right-6 text-pink-400 animate-pop text-lg">🧩</span>;
                                  break;
                                default:
                                  cardBg = 'bg-white/60';
                                  accent = null;
                              }
                              return (
                                <Link
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  className={`flex flex-col gap-1 px-5 py-4 border-0 ${cardBg} hover:bg-orange-100/80 hover:shadow-orange-200 hover:shadow-xl hover:text-orange-700 transition-all duration-200 cursor-pointer group min-h-[90px] relative animate-fade-in-up hover:border-orange-400 border-0 overflow-hidden`}
                                  style={{ boxShadow: idx % 2 === 0 ? '0 2px 12px 0 rgba(251, 191, 36, 0.08)' : '0 2px 12px 0 rgba(236, 72, 153, 0.08)' }}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {accent}
                                  <div className="flex items-center gap-2 mb-0.5 z-10">
                                    <span className="inline-flex items-center justify-center w-8 h-8 bg-transparent group-hover:bg-orange-50 transition-colors shadow-none text-xl text-orange-500">
                                      <IconComponent size={22} />
                                    </span>
                                    <span className="font-bold text-base group-hover:text-orange-700 transition-colors drop-shadow-sm">{dropdownItem.label}</span>
                                  </div>
                                  <span className="text-sm text-gray-500 group-hover:text-orange-800 transition-colors z-10 leading-tight">
                                    {dropdownItem.label === 'Time Liberation' && 'Automate away the boring stuff—get your time back for what matters most.'}
                                    {dropdownItem.label === 'Growth Accelerator' && 'Supercharge your business with playful, smart automation that scales as you do.'}
                                    {dropdownItem.label === 'Profit Rescue' && 'Save money, reduce manual work, and let your team shine at what they do best.'}
                                    {dropdownItem.label === 'Custom Bot Development' && 'Build something truly yours—bespoke bots, creative automations, and a dash of magic.'}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Default dropdown for other items */}
                    {item.label !== 'Services' && item.label !== 'Solutions' && activeDropdown === item.label && (
                      <div
                        className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transform transition-all duration-200 origin-top-left opacity-100 scale-100"
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
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-menu font-medium transition-colors duration-200 text-[var(--color-primary-dark)] hover:text-[var(--color-secondary)] cursor-pointer"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Button absolutely positioned to the right */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4">
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="btn-secondary text-btn font-btn text-white px-6 py-2.5 rounded-none hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] border-2 border-transparent transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-200 text-gray-700 hover:text-[var(--color-secondary)] hover:bg-orange-50"
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
        } overflow-hidden bg-white`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <div key={item.label} className="block">
              {item.dropdown ? (
                <div className="py-1">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex justify-between items-center w-full px-3 py-2 font-medium transition-colors rounded-md cursor-pointer text-label font-label text-gray-800 hover:text-[var(--color-secondary)] hover:bg-orange-50"
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
                        className="block pl-3 pr-4 py-2 rounded-md transition-colors duration-200 cursor-pointer text-desc font-desc text-gray-700 hover:bg-orange-50 hover:text-[var(--color-secondary)]"
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
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[var(--color-secondary)] hover:bg-orange-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
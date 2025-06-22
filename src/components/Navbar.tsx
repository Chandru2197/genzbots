// File: components/Navbar.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
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
      const dropdownMenus = document.querySelectorAll('[data-dropdown-menu]');
      
      const isClickInsideDropdown = Array.from(dropdownButtons).some(button => button.contains(target)) ||
                                   Array.from(dropdownMenus).some(menu => menu.contains(target));
      
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
    { 
      label: 'Services', 
      href: '/services',
      dropdown: [
        { label: 'Bot Blueprint', href: '/services/bot-blueprint' },
        { label: 'Build & Test', href: '/services/build-and-test' },
        { label: 'Discovery Call', href: '/services/discovery-call' },
        { label: 'Hyper Care', href: '/services/hyper-care' },
        { label: 'Scale & Optimize', href: '/services/scale-optimize' }
      ]
    },
    { 
      label: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { label: 'Time Liberation', href: '/solutions/time-liberation' },
        { label: 'Growth Accelerator', href: '/solutions/growth-accelerator' },
        { label: 'Profit Rescue', href: '/solutions/profit-rescue' },
        { label: 'Custom Bot Development', href: '/solutions/custombot-development' }
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white/30 backdrop-blur-md shadow-lg'
    }`}>
      <div className="relative w-full max-w-[1920px] mx-auto h-14 lg:h-16">
        {/* Logo */}
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
        
        {/* Menu */}
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

                    {/* Services Dropdown */}
                    {item.label === 'Services' && activeDropdown === item.label && (
                      <div 
                        data-dropdown-menu
                        className="fixed left-1/2 top-[4.5rem] z-[120] transform -translate-x-1/2 w-full max-w-3xl rounded-xl shadow-2xl border bg-white/95 backdrop-blur-2xl p-3 transition-all duration-300 opacity-100 scale-100 visible"
                        style={{ minWidth: '200px', maxWidth: '45vw' }}
                      >
                        <div className="flex flex-col lg:flex-row gap-3">
                          <div className="lg:w-1/3 relative">
                            <Card className="h-full border-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
                              <CardHeader className="relative pb-2">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl"></div>
                                <div className="absolute bottom-0 left-0 w-12 h-12 bg-blue-400/20 rounded-full blur-lg"></div>
                                <div className="relative z-10">
                                  <div className="flex items-center gap-1.5 mb-1.5">
                                    <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </div>
                                    <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 text-xs px-1.5 py-0.5">
                                      SERVICES
                                    </Badge>
                                  </div>
                                  <CardTitle className="text-lg font-bold text-white mb-1">
                                    Automation Services
                                  </CardTitle>
                                  <CardDescription className="text-slate-300 text-xs">
                                    Enterprise-grade automation solutions designed for scale and efficiency
                                  </CardDescription>
                                </div>
                              </CardHeader>
                              <CardContent className="relative z-10 pt-0">
                                <div className="space-y-1.5">
                                  <div className="flex items-center gap-1 text-xs text-slate-300">
                                    <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                                    End-to-end automation
                                  </div>
                                  <div className="flex items-center gap-1 text-xs text-slate-300">
                                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                                    Expert consultation
                                  </div>
                                  <div className="flex items-center gap-1 text-xs text-slate-300">
                                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                                    24/7 support included
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          
                          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-2">
                            {item.dropdown.map((dropdownItem, idx) => {
                              const IconComponent = getServiceIcon(dropdownItem.label);
                              let cardStyle, badgeColor, iconColor;
                              switch (dropdownItem.label) {
                                case 'Bot Blueprint':
                                  cardStyle = 'border-blue-200 hover:border-blue-400 hover:shadow-blue-100';
                                  badgeColor = 'bg-blue-100 text-blue-700 border-blue-200';
                                  iconColor = 'text-blue-600';
                                  break;
                                case 'Build & Test':
                                  cardStyle = 'border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-100';
                                  badgeColor = 'bg-emerald-100 text-emerald-700 border-emerald-200';
                                  iconColor = 'text-emerald-600';
                                  break;
                                case 'Discovery Call':
                                  cardStyle = 'border-orange-200 hover:border-orange-400 hover:shadow-orange-100';
                                  badgeColor = 'bg-orange-100 text-orange-700 border-orange-200';
                                  iconColor = 'text-orange-600';
                                  break;
                                case 'Hyper Care':
                                  cardStyle = 'border-pink-200 hover:border-pink-400 hover:shadow-pink-100';
                                  badgeColor = 'bg-pink-100 text-pink-700 border-pink-200';
                                  iconColor = 'text-pink-600';
                                  break;
                                case 'Scale & Optimize':
                                  cardStyle = 'border-purple-200 hover:border-purple-400 hover:shadow-purple-100';
                                  badgeColor = 'bg-purple-100 text-purple-700 border-purple-200';
                                  iconColor = 'text-purple-600';
                                  break;
                                default:
                                  cardStyle = 'border-gray-200 hover:border-gray-400 hover:shadow-gray-100';
                                  badgeColor = 'bg-gray-100 text-gray-700 border-gray-200';
                                  iconColor = 'text-gray-600';
                              }
                              
                              return (
                                <Link key={dropdownItem.label} href={dropdownItem.href} onClick={handleDropdownItemClick}>
                                  <Card className={`${cardStyle} hover:shadow-lg transition-all duration-300 cursor-pointer h-full group`}>
                                    <CardHeader className="pb-1.5 pt-2 px-2">
                                      <div className="flex items-start justify-between">
                                        <div className={`w-5 h-5 rounded-md bg-white border flex items-center justify-center ${iconColor} group-hover:scale-110 transition-transform duration-200`}>
                                          <IconComponent size={10} />
                                        </div>
                                        <Badge variant="outline" className={`${badgeColor} text-xs px-1 py-0`}>
                                          {String(idx + 1).padStart(2, '0')}
                                        </Badge>
                                      </div>
                                      <CardTitle className="text-sm font-semibold text-slate-800 group-hover:text-slate-900">
                                        {dropdownItem.label}
                                      </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0 px-2 pb-2">
                                      <CardDescription className="text-xs leading-relaxed">
                                        {dropdownItem.label === 'Bot Blueprint' && 'Strategic planning and architecture design for your automation infrastructure.'}
                                        {dropdownItem.label === 'Build & Test' && 'Development, testing, and quality assurance for robust automation solutions.'}
                                        {dropdownItem.label === 'Discovery Call' && 'Consultation session to identify automation opportunities and requirements.'}
                                        {dropdownItem.label === 'Hyper Care' && 'Comprehensive support, monitoring, and continuous optimization services.'}
                                        {dropdownItem.label === 'Scale & Optimize' && 'Performance enhancement and scalability solutions for growing businesses.'}
                                      </CardDescription>
                                    </CardContent>
                                  </Card>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Solutions Dropdown */}
                    {item.label === 'Solutions' && activeDropdown === item.label && (
                      <div 
                        data-dropdown-menu
                        className="fixed left-1/2 top-[4.5rem] z-[120] transform -translate-x-1/2 w-full max-w-3xl rounded-2xl shadow-2xl border-0 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 backdrop-blur-2xl p-3 transition-all duration-300 opacity-100 scale-100 visible overflow-hidden"
                        style={{ minWidth: '200px', maxWidth: '45vw' }}
                      >
                        {/* Floating Elements */}
                        <div className="absolute top-2 right-4 w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-6 right-8 w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full animate-bounce delay-100"></div>
                        <div className="absolute bottom-4 left-6 w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse delay-200"></div>
                        
                        <div className="flex flex-col lg:flex-row gap-3 relative z-10">
                          <div className="lg:w-1/3 relative">
                            <Card className="h-full border-0 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 text-white overflow-hidden relative">
                              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-4 translate-x-4 animate-pulse"></div>
                              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-4 -translate-x-4 animate-bounce"></div>
                              
                              <CardHeader className="relative pb-2 z-10 pt-2 px-2">
                                <div className="flex items-center gap-1.5 mb-2">
                                  <div className="w-7 h-7 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-pink-300/30 animate-pulse"></div>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white relative z-10">
                                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                                    </svg>
                                  </div>
                                  <div className="space-y-0.5">
                                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs px-1.5 py-0.5">
                                      SOLUTIONS ✨
                                    </Badge>
                                    <div className="text-xs text-white/80 font-medium">Transform Your Business</div>
                                  </div>
                                </div>
                                <CardTitle className="text-lg font-bold text-white mb-1.5 leading-tight">
                                  Business Solutions
                                </CardTitle>
                                <CardDescription className="text-white/90 leading-relaxed text-xs">
                                  Playful yet powerful solutions that transform how you work and grow your business
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="relative z-10 pt-0 px-2 pb-2">
                                <div className="grid grid-cols-2 gap-1.5">
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/20">
                                    <div className="text-lg mb-0.5">⚡</div>
                                    <div className="text-xs font-medium">Fast Setup</div>
                                  </div>
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/20">
                                    <div className="text-lg mb-0.5">🎯</div>
                                    <div className="text-xs font-medium">Goal Focused</div>
                                  </div>
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/20">
                                    <div className="text-lg mb-0.5">🚀</div>
                                    <div className="text-xs font-medium">Scalable</div>
                                  </div>
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/20">
                                    <div className="text-lg mb-0.5">💎</div>
                                    <div className="text-xs font-medium">Premium</div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          
                          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            {item.dropdown.map((dropdownItem, idx) => {
                              const IconComponent = getSolutionIcon(dropdownItem.label);
                              let cardStyle, gradientFrom, gradientTo, emoji, accentColor;
                              switch (dropdownItem.label) {
                                case 'Time Liberation':
                                  cardStyle = 'border-amber-200 hover:border-amber-400 hover:shadow-amber-100';
                                  gradientFrom = 'from-amber-400';
                                  gradientTo = 'to-yellow-400';
                                  emoji = '⏰';
                                  accentColor = 'text-amber-600';
                                  break;
                                case 'Growth Accelerator':
                                  cardStyle = 'border-pink-200 hover:border-pink-400 hover:shadow-pink-100';
                                  gradientFrom = 'from-pink-400';
                                  gradientTo = 'to-rose-400';
                                  emoji = '📈';
                                  accentColor = 'text-pink-600';
                                  break;
                                case 'Profit Rescue':
                                  cardStyle = 'border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-100';
                                  gradientFrom = 'from-emerald-400';
                                  gradientTo = 'to-teal-400';
                                  emoji = '💰';
                                  accentColor = 'text-emerald-600';
                                  break;
                                case 'Custom Bot Development':
                                  cardStyle = 'border-purple-200 hover:border-purple-400 hover:shadow-purple-100';
                                  gradientFrom = 'from-purple-400';
                                  gradientTo = 'to-indigo-400';
                                  emoji = '🤖';
                                  accentColor = 'text-purple-600';
                                  break;
                                default:
                                  cardStyle = 'border-gray-200 hover:border-gray-400 hover:shadow-gray-100';
                                  gradientFrom = 'from-gray-400';
                                  gradientTo = 'to-slate-400';
                                  emoji = '⭐';
                                  accentColor = 'text-gray-600';
                              }
                              
                              const progressWidth = `${60 + (idx * 10)}%`;
                              
                              return (
                                <Link key={dropdownItem.label} href={dropdownItem.href} onClick={handleDropdownItemClick}>
                                  <Card className={`${cardStyle} hover:shadow-xl transition-all duration-300 cursor-pointer h-full group bg-white/80 backdrop-blur-sm relative overflow-hidden`}>
                                    <div className="absolute top-1.5 right-1.5 text-lg animate-bounce group-hover:animate-spin transition-all duration-300">
                                      {emoji}
                                    </div>
                                    
                                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradientFrom} ${gradientTo} group-hover:h-1 transition-all duration-300`}></div>
                                    
                                    <CardHeader className="pb-1.5 relative pt-2 px-2">
                                      <div className="flex items-start gap-1.5">
                                        <div className={`w-6 h-6 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                          <IconComponent size={11} />
                                        </div>
                                        <div className="flex-1">
                                          <CardTitle className={`text-sm font-bold ${accentColor} group-hover:text-opacity-80 transition-colors mb-0.5`}>
                                            {dropdownItem.label}
                                          </CardTitle>
                                          {/* <Badge variant="outline" className={`text-xs bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white border-0 px-1 py-0`}>
                                            Popular Choice
                                          </Badge> */}
                                        </div>
                                      </div>
                                    </CardHeader>
                                    <CardContent className="pt-0 px-2 pb-2">
                                      <CardDescription className="text-xs leading-relaxed text-slate-600 group-hover:text-slate-800 transition-colors">
                                        {dropdownItem.label === 'Time Liberation' && 'Automate away the boring stuff—get your time back for what matters most to you and your team.'}
                                        {dropdownItem.label === 'Growth Accelerator' && 'Supercharge your business with playful, smart automation that scales as you grow and evolve.'}
                                        {dropdownItem.label === 'Profit Rescue' && 'Save money, reduce manual work, and let your team shine at what they do best every day.'}
                                        {dropdownItem.label === 'Custom Bot Development' && 'Build something truly yours—bespoke bots, creative automations, and a dash of magic.'}
                                      </CardDescription>
                                      
                                      <div className="mt-2 space-y-1">
                                        <div className="flex justify-between text-xs text-slate-500">
                                          <span>Setup Time</span>
                                          <span>{idx === 0 ? '1 week' : idx === 1 ? '2 weeks' : idx === 2 ? '1 week' : '3 weeks'}</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-1">
                                          <div 
                                            className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} h-1 rounded-full transition-all duration-1000 group-hover:w-full`}
                                            style={{ width: progressWidth }}
                                          ></div>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Default dropdown */}
                    {item.label !== 'Services' && item.label !== 'Solutions' && activeDropdown === item.label && (
                      <div
                        data-dropdown-menu
                        className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transform transition-all duration-200 origin-top-left opacity-100 scale-100"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-menu font-desc text-gray-700 hover:bg-orange-50 hover:text-[var(--color-secondary)] transition-colors duration-200 cursor-pointer"
                            onClick={handleDropdownItemClick}
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
        
        {/* Get Started Button */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4">
          <div className="hidden lg:block">
            <Link
              href="/contact"
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
                        onClick={handleDropdownItemClick}
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
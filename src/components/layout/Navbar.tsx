"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Resources", href: "#resources" },
];

const isActivePath = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
};

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 border-b border-[#EFE7ED] bg-white">
      <div className="relative mx-auto flex h-[89px] w-full max-w-[1440px] items-center px-4 sm:px-6 lg:px-10 xl:px-[84px]">
        <Link
          href="/"
          className="shrink-0"
          aria-label="Go to homepage"
          onClick={handleMobileMenuClose}
        >
          <Image
            src="/images/google-logo.png"
            alt="Google"
            width={123}
            height={40}
            priority
            className="h-auto w-[108px] sm:w-[112px] lg:w-[123px]"
          />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative pb-[14px] text-[16px] font-medium leading-none transition-colors duration-200 ${
                  isActive
                    ? "text-[#F43F6D]"
                    : "text-[#1F1F1F] hover:text-[#F43F6D]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-left rounded-full bg-[#F43F6D] transition-transform duration-300 ease-out ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden lg:block">
          <Link
            href="#contact"
            onClick={handleMobileMenuClose}
            className="hero-btn inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-[4px] bg-[#F43F6D] px-5 text-[14px] font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-[#EA2D5D] hover:shadow-[0_14px_30px_rgba(244,63,109,0.28)]"
          >
            <span>Schedule A Meeting</span>

            <span className="relative flex h-[14px] w-[14px] items-center justify-center overflow-hidden">
              <span className="hero-arrow-first absolute inset-0 flex items-center justify-center">
                <ArrowRight className="size-[14px]" strokeWidth={2.25} />
              </span>

              <span className="hero-arrow-second absolute inset-0 flex items-center justify-center">
                <ArrowRight className="size-[14px]" strokeWidth={2.25} />
              </span>
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="ml-auto inline-flex size-10 items-center justify-center rounded-md text-[#1F1F1F] transition-colors hover:bg-[#F8F4F6] lg:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="size-5" strokeWidth={2.2} />
          ) : (
            <Menu className="size-5" strokeWidth={2.2} />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#F2ECF0] bg-white transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 py-4 sm:px-6">
          <nav className="flex flex-col">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleMobileMenuClose}
                  className={`rounded-md px-3 py-3 text-[15px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-[#FFF1F5] text-[#F43F6D]"
                      : "text-[#1F1F1F] hover:bg-[#FAF7F8]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="#contact"
            onClick={handleMobileMenuClose}
            className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-[4px] bg-[#F43F6D] px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#EA2D5D]"
          >
            <span>Schedule A Meeting</span>
            <ArrowRight className="size-[14px]" strokeWidth={2.25} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

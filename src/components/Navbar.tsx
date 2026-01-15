import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '/materials/documents/my_resume.pdf', external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] bg-opacity-90 backdrop-blur-sm shadow-sm py-4">
      <div className="max-w-5xl mx-auto px-8 flex justify-center">
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="font-sans text-base font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-200"
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

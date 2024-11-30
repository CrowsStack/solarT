'use client';
import Link from 'next/link';
import { COMPANY } from '../constants/company';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{COMPANY.FULL_NAME}</h3>
            <p className="text-white/90">
              Professional installation services for solar, security, and electrical systems.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#solar" className="text-white/90 hover:text-white transition-colors">
                  Solar Installation
                </Link>
              </li>
              <li>
                <Link href="/services#cctv" className="text-white/90 hover:text-white transition-colors">
                  CCTV Systems
                </Link>
              </li>
              <li>
                <Link href="/services#intercom" className="text-white/90 hover:text-white transition-colors">
                  Intercom Systems
                </Link>
              </li>
              <li>
                <Link href="/services#fencing" className="text-white/90 hover:text-white transition-colors">
                  Electric Fencing
                </Link>
              </li>
              <li>
                <Link href="/services#fire" className="text-white/90 hover:text-white transition-colors">
                  Fire Detection
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/90 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/90 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/90 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-white/90 hover:text-white transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${COMPANY.CONTACT.EMAIL.INFO}`} className="text-white/90 hover:text-white transition-colors">
                  Email: {COMPANY.CONTACT.EMAIL.INFO}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.CONTACT.PHONE}`} className="text-white/90 hover:text-white transition-colors">
                  Phone: {COMPANY.CONTACT.PHONE}
                </a>
              </li>
              <li>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                  Address: {COMPANY.CONTACT.ADDRESS}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} {COMPANY.FULL_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

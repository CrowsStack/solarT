import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SolarTech Solutions</h3>
            <p className="text-gray-300">
              Professional installation services for solar, security, and electrical systems.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#solar" className="text-gray-300 hover:text-white transition-colors">
                  Solar Installation
                </Link>
              </li>
              <li>
                <Link href="/services#cctv" className="text-gray-300 hover:text-white transition-colors">
                  CCTV Systems
                </Link>
              </li>
              <li>
                <Link href="/services#intercom" className="text-gray-300 hover:text-white transition-colors">
                  Intercom Systems
                </Link>
              </li>
              <li>
                <Link href="/services#fencing" className="text-gray-300 hover:text-white transition-colors">
                  Electric Fencing
                </Link>
              </li>
              <li>
                <Link href="/services#fire" className="text-gray-300 hover:text-white transition-colors">
                  Fire Detection
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-300 hover:text-white transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@solartech.com" className="text-gray-300 hover:text-white transition-colors">
                  Email: info@solartech.com
                </a>
              </li>
              <li>
                <a href="tel:+2341234567890" className="text-gray-300 hover:text-white transition-colors">
                  Phone: (123) 456-7890
                </a>
              </li>
              <li>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Address: 123 Solar Street
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SolarTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
            <ul className="space-y-2 text-gray-300">
              <li>Solar Installation</li>
              <li>CCTV Systems</li>
              <li>Intercom Systems</li>
              <li>Electric Fencing</li>
              <li>Fire Detection</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Projects</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Get Quote</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@solartech.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Solar Street</li>
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


import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-pitchburg-dark-purple text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-display text-pitchburg-purple">
              Pitch<span className="text-white">burg</span>
            </h3>
            <p className="text-sm text-gray-300">
              Empowering young innovators to showcase their ideas and make a difference.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Navigation</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-pitchburg-purple transition">Home</Link></li>
              <li><Link to="/gallery" className="hover:text-pitchburg-purple transition">Pitch Gallery</Link></li>
              <li><Link to="/updates" className="hover:text-pitchburg-purple transition">Updates</Link></li>
              <li><Link to="/achievers" className="hover:text-pitchburg-purple transition">Achievers</Link></li>
              <li><Link to="/about" className="hover:text-pitchburg-purple transition">About</Link></li>
              <li><Link to="/careers" className="hover:text-pitchburg-purple transition">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/leadership-plan" className="hover:text-pitchburg-purple transition">Leadership & Execution Plan</Link></li>
              <li><Link to="#" className="hover:text-pitchburg-purple transition">Pitch Guidelines</Link></li>
              <li><Link to="#" className="hover:text-pitchburg-purple transition">Code of Conduct</Link></li>
              <li><Link to="#" className="hover:text-pitchburg-purple transition">FAQ</Link></li>
              <li><Link to="#" className="hover:text-pitchburg-purple transition">Contact Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>University Innovation Center</p>
              <p>123 Campus Drive</p>
              <p>Pitchburg, PI 12345</p>
              <p className="pt-2">
                <a href="mailto:info@pitchburg.edu" className="hover:text-pitchburg-purple transition">
                  info@pitchburg.edu
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Pitchburg. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-pitchburg-purple transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-pitchburg-purple transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

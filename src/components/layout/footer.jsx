import React from "react";

export default function Footer({ onNavigate }) {
  return (
    <footer id="contact" className="bg-zinc-950 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary">
            UniConnect
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            A global platform for university and college students to connect,
            share ideas, post updates, and grow together through technology
            and collaboration.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                type="button"
                onClick={() => onNavigate?.("home")}
                className="hover:text-primary transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate?.("about")}
                className="hover:text-primary transition-colors"
              >
                About Uniconnect
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate?.("why-uniconnect")}
                className="hover:text-primary transition-colors"
              >
                why Uniconnect
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate?.("Download")}
                className="hover:text-primary transition-colors"
              >
                Download App
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate?.("Experts")}
                className="hover:text-primary transition-colors"
              >
                Experts
              </button>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-white font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>Student Verification</li>
            <li>Global Messaging</li>
            <li>Post & Share Updates</li>
            <li>Expert Sessions</li>
            <li>University Network</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                type="button"
                onClick={() => onNavigate?.("privacy")}
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate?.("security")}
                className="hover:text-primary transition-colors"
              >
                Security
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate?.("terms")}
                className="hover:text-primary transition-colors"
              >
                Terms & Conditions
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} UniConnect. All rights reserved.</p>

        {/* Social */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-primary cursor-pointer">Facebook</span>
          <span className="hover:text-primary cursor-pointer">Twitter</span>
          <span className="hover:text-primary cursor-pointer">LinkedIn</span>
          <span className="hover:text-primary cursor-pointer">Instagram</span>
        </div>
      </div>
    </footer>
  );
}

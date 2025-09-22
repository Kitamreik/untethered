import React from "react";
import { Instagram, ArrowUpCircle, Mail, Banknote, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <section className="max-w-5xl mx-auto px-6">
        <div className="space-y-8">
          {/* Company Name */}
          <h2 className="text-2xl font-bold text-center">
            Untethered Coaching LLC
          </h2>

          {/* Contact Info */}
          <div className="text-center space-y-3">
            <h2 className="text-xl font-semibold">Contact Info</h2>
            <p className="text-gray-600">
              A Product of Erin Rainwood (they/them)
            </p>
            <ul className="flex justify-center gap-6 text-blue-600">
              <li>
                <a
                  href="https://www.instagram.com/untetheredcoachingllc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:untetheredcoachingllc@gmail.com"
                  className="hover:text-green-600 transition-colors"
                >
                <Mail className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-3">
            <h2 className="text-xl font-semibold">Call to Action</h2>
            <ul className="flex justify-center gap-6 text-blue-600">
                <li>
                <a
                    href="#"
                    className="hover:text-green-600 transition-colors"
                >
                    <Banknote className="w-6 h-6" />
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                >
                    <Phone className="w-6 h-6" />
                </a>
                </li>
            </ul>
            <p className="text-gray-500 text-sm mt-4">
              &copy; Erin Rainwood (they/them), 2025. All rights reserved.
            </p>
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToTop}
              id="scroll-button"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
            >
              Back to Top
              <ArrowUpCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

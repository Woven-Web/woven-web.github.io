
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Principles", path: "/principles" },
    { name: "Projects", path: "/projects" },
    { name: "Partnerships", path: "/partnerships" },
    { name: "Map", path: "/map.pdf", icon: MapPin, external: true },
    { name: "Join Us", path: "/join-us" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-semibold text-natural-leaf hover:text-natural-sage transition-colors"
          >
            Woven Web
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-natural-earth hover:text-natural-leaf transition-colors flex items-center`}
                >
                  {link.icon && <link.icon size={16} className="mr-1" />}
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-natural-earth hover:text-natural-leaf transition-colors flex items-center ${
                    location.pathname === link.path ? "font-semibold" : ""
                  }`}
                >
                  {link.icon && <link.icon size={16} className="mr-1" />}
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-natural-earth hover:text-natural-leaf transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-fade-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded-md text-natural-earth hover:text-natural-leaf transition-colors flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.icon && <link.icon size={16} className="mr-2" />}
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-2 rounded-md text-natural-earth hover:text-natural-leaf transition-colors flex items-center ${
                      location.pathname === link.path ? "font-semibold" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.icon && <link.icon size={16} className="mr-2" />}
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

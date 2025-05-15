
import { Link } from "react-router-dom";
import { Leaf, Globe2, Heart, MapPin } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "Principles", path: "/principles" },
    { name: "Projects", path: "/projects" },
    { name: "Partnerships", path: "/partnerships" },
    { name: "Map", path: "/map.pdf", icon: MapPin, external: true },
    { name: "Join Us", path: "/join-us" },
    { name: "About", path: "/about" },
  ];

  return (
    <footer className="bg-natural-leaf/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-natural-leaf mb-4">
              Woven Web
            </h3>
            <p className="text-natural-earth text-sm max-w-xs">
              A Community research lab rooted in Boulder, CO - Weaving culture & technology to foster open & connected communities
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-natural-leaf mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.path} className="flex items-center">
                  {link.icon && <link.icon size={14} className="mr-1 text-natural-earth" />}
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-natural-earth hover:text-natural-leaf transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-natural-earth hover:text-natural-leaf transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-natural-leaf mb-4">Location</h4>
            <p className="text-natural-earth text-sm">
              Based in Boulder County, Colorado
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-natural-leaf mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-natural-earth hover:text-natural-leaf transition-colors"
              >
                <Globe2 size={20} />
              </a>
              <a
                href="#"
                className="text-natural-earth hover:text-natural-leaf transition-colors"
              >
                <Heart size={20} />
              </a>
              <a
                href="#"
                className="text-natural-earth hover:text-natural-leaf transition-colors"
              >
                <Leaf size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-natural-leaf/10 pt-8 text-center text-sm text-natural-earth">
          <p>&copy; {new Date().getFullYear()} Woven Web. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

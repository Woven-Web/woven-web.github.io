import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe2, Users, Puzzle } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          if (entry.target instanceof HTMLElement) {
            entry.target.style.opacity = "1";
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-natural-sage/10 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-natural-sage/20 via-transparent to-transparent animate-pulse" />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-6xl font-bold text-natural-leaf mb-6 opacity-0 animate-on-scroll">
            Woven Web
          </h1>
          <p className="text-xl md:text-2xl text-natural-earth mb-8 opacity-0 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            Weaving technology and culture to foster open and connected communities
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-natural-sand/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-natural-leaf mb-4">Our Pillars</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/rich-culture" className="group">
              <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-on-scroll">
                <div className="text-natural-sage mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users size={48} />
                </div>
                <h3 className="text-2xl font-semibold text-natural-leaf mb-4">Rich Culture</h3>
                <p className="text-natural-earth">Regenerative, Innovative, Cooperative, and Healthy</p>
              </div>
            </Link>
            <Link to="/open-systems" className="group">
              <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
                <div className="text-natural-sage mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Puzzle size={48} />
                </div>
                <h3 className="text-2xl font-semibold text-natural-leaf mb-4">Open Systems</h3>
                <p className="text-natural-earth">Building transparent and accessible technology solutions for all.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-natural-leaf text-center mb-16">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "We Gather",
                description: "From hosting fully-produced events to cozy intimate circles in living rooms so much of our work happens through bringing people together",
                icon: Users,
                delay: "0s",
              },
              {
                title: "We Build",
                description: "We develop open-source technology solutions that help networks coordinate more effectively",
                icon: Puzzle,
                delay: "0.2s",
              },
              {
                title: "We Connect",
                description: "'Have you met X?' is a phrase we say a lot",
                icon: Globe2,
                delay: "0.4s",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl bg-natural-leaf/5 p-8 opacity-0 animate-on-scroll"
                style={{ animationDelay: item.delay }}
              >
                <div className="text-natural-sage mb-4">
                  <item.icon size={36} />
                </div>
                <h3 className="text-xl font-semibold text-natural-leaf mb-4">{item.title}</h3>
                <p className="text-natural-earth">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

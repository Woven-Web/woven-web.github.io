
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe2, Users, Puzzle, Lightbulb, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            A Community research lab rooted in Boulder, CO
          </p>
          <p className="text-lg md:text-xl text-natural-earth mb-6 opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            Weaving culture & technology to foster open & connected communities
          </p>
          
          {/* Slim Subscribe Embed */}
          <div className="mb-8 opacity-0 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
            <p className="text-natural-earth mb-3">Subscribe to the Weave</p>
            <iframe 
              src="https://embeds.beehiiv.com/07cac404-7618-4ef7-aaa6-0d7e669329ba?slim=true" 
              data-test-id="beehiiv-embed" 
              height="52" 
              width="100%"
              frameBorder="0" 
              scrolling="no" 
              style={{ margin: "0", borderRadius: "0px !important", backgroundColor: "transparent" }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-natural-sand/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-natural-leaf mb-4">Our Vision</h2>
            <p className="text-lg text-natural-earth max-w-3xl mx-auto">
              We are a collaborative ecosystem exploring the intersection of community, technology, and regenerative practices.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/principles" className="group">
              <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-on-scroll">
                <div className="text-natural-sage mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb size={48} />
                </div>
                <h3 className="text-2xl font-semibold text-natural-leaf mb-4">Our Principles</h3>
                <p className="text-natural-earth">Guided by nature, generosity, and collaborative connection</p>
              </div>
            </Link>
            <Link to="/projects" className="group">
              <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
                <div className="text-natural-sage mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Puzzle size={48} />
                </div>
                <h3 className="text-2xl font-semibold text-natural-leaf mb-4">Our Projects</h3>
                <p className="text-natural-earth">Building tools and platforms that empower communities</p>
              </div>
            </Link>
            <Link to="/partnerships" className="group">
              <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
                <div className="text-natural-sage mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users size={48} />
                </div>
                <h3 className="text-2xl font-semibold text-natural-leaf mb-4">Our Partnerships</h3>
                <p className="text-natural-earth">Collaborating with aligned organizations to create impact</p>
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

      {/* Ecosystem Map Section */}
      <section className="py-24 bg-natural-sand/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-natural-leaf mb-4">Our Regenerative Ecosystem</h2>
            <p className="text-lg text-natural-earth max-w-3xl mx-auto mb-8">
              Explore our map of interconnected projects, partners, and initiatives that comprise our regenerative ecosystem.
            </p>
            <a href="/map.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="mb-8 border-natural-sage text-natural-sage hover:bg-natural-sage hover:text-white">
                <MapPin className="mr-2 h-4 w-4" /> View Full Map
              </Button>
            </a>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <iframe 
              src="/map.pdf" 
              className="w-full"
              style={{height: "600px"}}
              title="Woven Web Regenerative Ecosystem Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-natural-leaf mb-4">Stay Connected</h2>
            <p className="text-natural-earth">Join our newsletter to stay updated with our latest insights and community developments</p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <iframe 
              src="https://embeds.beehiiv.com/07cac404-7618-4ef7-aaa6-0d7e669329ba" 
              data-test-id="beehiiv-embed" 
              width="100%" 
              height="320" 
              frameBorder="0" 
              scrolling="no" 
              style={{
                borderRadius: "4px",
                border: "2px solid #e5e7eb",
                margin: "0",
                backgroundColor: "transparent"
              }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

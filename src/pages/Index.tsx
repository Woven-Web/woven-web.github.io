import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe2, Users, Puzzle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email") as string;
    
    // Redirect to Beehiiv subscription page
    window.open(`https://wovenweb.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`, '_blank');
    toast.success("Redirecting to subscription page...");
    form.reset();
  };

  return (
    <div className="min-h-screen">
      {/* Mycelial Wave Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mycelialGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#87A878"/>
              <stop offset="1" stopColor="#496F5D"/>
            </linearGradient>
          </defs>
          {/* Multiple wave paths for mycelial effect */}
          <path fill="url(#mycelialGradient)" d="M 0 0 C 20 10, 40 0, 60 5 C 80 10, 100 0, 120 5 L 120 100 L 0 100 Z" className="animate-[wave_20s_ease-in-out_infinite]" opacity="0.3" />
          <path fill="url(#mycelialGradient)" d="M 0 10 C 30 20, 70 5, 100 15 C 130 25, 160 15, 200 20 L 200 100 L 0 100 Z" className="animate-[wave_25s_ease-in-out_infinite]" opacity="0.2" />
          <path fill="url(#mycelialGradient)" d="M 0 20 C 50 30, 90 15, 120 25 C 150 35, 180 25, 220 30 L 220 100 L 0 100 Z" className="animate-[wave_22s_ease-in-out_infinite]" opacity="0.15" />
          <path fill="url(#mycelialGradient)" d="M -50 30 C 0 40, 40 25, 70 35 C 100 45, 130 35, 170 40 L 170 100 L -50 100 Z" className="animate-[wave_28s_ease-in-out_infinite]" opacity="0.1" />
        </svg>
      </div>

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
                <p className="text-natural-earth">Developing technology for an open & connected society</p>
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

      {/* Newsletter Section */}
      <section className="py-24 bg-natural-sand/5">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-natural-leaf mb-6 opacity-0 animate-on-scroll">Stay Connected</h2>
          <p className="text-natural-earth mb-8 opacity-0 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            Join our newsletter to stay updated with our latest insights and community developments
          </p>
          <div className="opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                required 
                className="flex-1"
              />
              <Button type="submit">
                <Send className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-natural-earth/80 mt-2">
              Join our newsletter for updates and insights
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;


import { useEffect } from "react";
import { Palette, BookOpen, Cpu, MessageCircle } from "lucide-react";

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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-woven-warm/10 via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative py-24">
          <h1 className="text-5xl md:text-7xl font-light text-woven-deep mb-8 opacity-0 animate-on-scroll tracking-tight">
            Woven Web
          </h1>
          <p className="text-2xl md:text-3xl text-woven-earth mb-6 opacity-0 animate-on-scroll font-light italic" style={{ animationDelay: "0.2s" }}>
            A communal learning lab exploring what it means to be alive together
          </p>
          <p className="text-lg text-woven-earth/80 max-w-2xl mx-auto opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            Boulder, Colorado
          </p>
        </div>
      </section>

      {/* Core Inquiry Section */}
      <section className="py-24 bg-woven-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-woven-deep mb-8 opacity-0 animate-on-scroll">Our Core Inquiry</h2>
            <p className="text-lg text-woven-earth mb-12 opacity-0 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              Three questions guide everything we do:
            </p>
          </div>
          <div className="space-y-8">
            <div className="text-center opacity-0 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <p className="text-xl md:text-2xl text-woven-deep font-light italic">
                "What does it mean to be alive?"
              </p>
            </div>
            <div className="text-center opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <p className="text-xl md:text-2xl text-woven-deep font-light italic">
                "How can we foster greater understanding among more people regarding the web of life that we are a part of?"
              </p>
            </div>
            <div className="text-center opacity-0 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
              <p className="text-xl md:text-2xl text-woven-deep font-light italic">
                "How do we improve communication so as to be more effective in facilitating understanding?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-xl text-woven-earth leading-relaxed opacity-0 animate-on-scroll">
              We are a communal learning lab with deep curiosity about <strong className="text-woven-deep font-medium">consciousness</strong>, <strong className="text-woven-deep font-medium">connectedness</strong>, and <strong className="text-woven-deep font-medium">communication</strong>.
            </p>
            <p className="text-xl text-woven-earth leading-relaxed opacity-0 animate-on-scroll mt-6" style={{ animationDelay: "0.2s" }}>
              Our primary role is shifting worldviews — the slow transformation of culture through understanding and honest communication.
            </p>
            <p className="text-xl text-woven-earth leading-relaxed opacity-0 animate-on-scroll mt-6" style={{ animationDelay: "0.4s" }}>
              We don't create connection so much as we <em>point to the connection that already exists</em>. We get out of the way so it can happen.
            </p>
          </div>
        </div>
      </section>

      {/* The Name Section */}
      <section className="py-24 bg-woven-deep text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-8 opacity-0 animate-on-scroll">The Name</h2>
          <p className="text-xl leading-relaxed opacity-0 animate-on-scroll text-woven-cream/90" style={{ animationDelay: "0.2s" }}>
            "Woven Web" — not "weaving web" — because it recognizes the state of <strong className="text-white">already being woven</strong>.
          </p>
          <p className="text-xl leading-relaxed opacity-0 animate-on-scroll text-woven-cream/90 mt-6" style={{ animationDelay: "0.4s" }}>
            When we stop fighting the shoelace, when we stop holding ourselves at a distance from our world, we actually become connected. We become informed by life. We enter into the world and are home in our world.
          </p>
        </div>
      </section>

      {/* Triangle Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-woven-deep mb-4 opacity-0 animate-on-scroll">The Triangle</h2>
            <p className="text-lg text-woven-earth opacity-0 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              Three interconnected domains with communication and relationship at the center
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 rounded-2xl bg-woven-cream/30 opacity-0 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="text-woven-warm mb-4 flex justify-center">
                <BookOpen size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-light text-woven-deep mb-4">Education</h3>
              <p className="text-woven-earth">
                Not the consumable knowledge of "I eat the poem and the poem gives me powers" but the relational learning of "I sit with the poem and am chewed on by the poem."
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-woven-cream/30 opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="text-woven-warm mb-4 flex justify-center">
                <Palette size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-light text-woven-deep mb-4">Arts</h3>
              <p className="text-woven-earth">
                Fostering creativity and expression that emerges from relationship with life. Supporting the artists and creatives who bring meaning and beauty into our communities.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-woven-cream/30 opacity-0 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
              <div className="text-woven-warm mb-4 flex justify-center">
                <Cpu size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-light text-woven-deep mb-4">Technology</h3>
              <p className="text-woven-earth">
                Building tools that serve human flourishing. Engaging in right relationship with technology in this time of vast potentiation.
              </p>
            </div>
          </div>

          <div className="text-center opacity-0 animate-on-scroll" style={{ animationDelay: "0.8s" }}>
            <div className="inline-flex items-center gap-2 text-woven-warm">
              <MessageCircle size={24} strokeWidth={1.5} />
              <span className="text-lg">Communication & Relationship at the center</span>
            </div>
            <p className="text-woven-earth mt-4 max-w-2xl mx-auto">
              Ecology isn't a fourth pillar — it's what's at the center of all of it. What is art that emerges from relationship with life? What is education that emerges from relationship with life? What is technology that emerges from relationship with life?
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-woven-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-woven-deep text-center mb-12 opacity-0 animate-on-scroll">How We Gather</h2>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            {[
              "Communal sense-making gatherings",
              "Regular councils and circle sharing",
              "Meals together",
              "Engaged discussion about being alive",
              "Ritual practices",
              "Deep listening, musical jamming",
            ].map((item, index) => (
              <div
                key={item}
                className="p-4 text-woven-earth opacity-0 animate-on-scroll"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {item}
              </div>
            ))}
          </div>
          <p className="text-center text-woven-earth mt-8 opacity-0 animate-on-scroll" style={{ animationDelay: "0.7s" }}>
            All of these are ways we explore what it means to be alive together.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-woven-deep mb-4 opacity-0 animate-on-scroll">Stay Connected</h2>
            <p className="text-woven-earth opacity-0 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              Join our newsletter for updates on gatherings and community happenings
            </p>
          </div>
          <div className="rounded-lg overflow-hidden opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
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

      {/* Closing Quote */}
      <section className="py-24 bg-woven-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-woven-earth italic opacity-0 animate-on-scroll">
            "The scientific method is actually a form of divination. It's isolating variables — making a square on the ground and watching it for an hour. Not trying to see the whole field, but relating to the microcosm to understand something about the whole."
          </p>
          <p className="text-lg text-woven-earth mt-8 opacity-0 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
            This is what we're doing. Looking at different ways of looking at the world and helping point to the connections between them. Fostering a sense of all of us being able to look at the world together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;

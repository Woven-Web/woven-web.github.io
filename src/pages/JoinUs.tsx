
import { Mail } from "lucide-react";

const JoinUs = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-natural-leaf mb-8 text-center">Join Us</h1>
          
          <div className="space-y-8 text-natural-earth text-lg">
            <p>
              There is a movement in this world towards regeneration, innovation, cooperation, and health. 
              Towards open and distributed systems that help us actualize our self-organizing capacities as human beings. 
              We are just one node in this network and we invite you to join us.
            </p>

            <p>
              You can stay tuned to our calendar and our newsletter to stay up to date with our organization 
              and with other meaningful events happening around the Boulder area. You can also peruse the map 
              to discover where else you can get plugged into.
            </p>

            <div className="bg-natural-leaf/5 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-natural-leaf mb-4">Consulting Services</h2>
              <p className="mb-6">
                Our team is also available for consulting work, if you could use some help with weaving 
                a richer cultural fabric in your organization and with developing technology to support 
                greater openness and connectivity.
              </p>
              <div className="flex items-center gap-2 text-natural-leaf">
                <Mail size={20} />
                <a 
                  href="mailto:hello@wovenweb.org" 
                  className="hover:text-natural-sage transition-colors"
                >
                  hello@wovenweb.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

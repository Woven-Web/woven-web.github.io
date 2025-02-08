
import { User, Users, Building } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-natural-leaf mb-8">About Us</h1>
        
        <div className="space-y-12">
          {/* History Section */}
          <div className="prose max-w-none space-y-6 text-natural-earth">
            <div className="flex items-center gap-2 text-natural-leaf mb-4">
              <Building size={24} />
              <h2 className="text-2xl font-semibold m-0">Our Journey</h2>
            </div>
            <p className="text-lg">
              Woven Web began as Consciousness Hacking Colorado, a chapter of the larger 
              Consciousness Hacking network originating in San Francisco. We hosted regular 
              meetups exploring the intersection of consciousness and technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-natural-leaf/5 p-6 rounded-xl">
                <h3 className="font-semibold text-natural-leaf mb-2">2019</h3>
                <p>Formed as a non-profit organization under the leadership of our first 
                executive director, Adam Harvey.</p>
              </div>
              <div className="bg-natural-leaf/5 p-6 rounded-xl">
                <h3 className="font-semibold text-natural-leaf mb-2">2022</h3>
                <p>Achieved 501c3 status, establishing our foundation as a 
                recognized non-profit entity.</p>
              </div>
              <div className="bg-natural-leaf/5 p-6 rounded-xl">
                <h3 className="font-semibold text-natural-leaf mb-2">2023</h3>
                <p>Rebranded to Woven Web under new executive director Aaron Gabriel, 
                focusing on fostering deeper connectivity throughout social systems.</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-16">
            <div className="flex items-center gap-2 text-natural-leaf mb-8">
              <Users size={24} />
              <h2 className="text-2xl font-semibold">Our Team</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-natural-leaf/5 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <User size={20} className="text-natural-leaf" />
                  <h3 className="font-semibold text-natural-leaf">Aaron Gabriel Neyer</h3>
                </div>
                <p className="text-natural-earth">Executive Director</p>
              </div>
              
              <div className="bg-natural-leaf/5 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <User size={20} className="text-natural-leaf" />
                  <h3 className="font-semibold text-natural-leaf">Eileen Walz</h3>
                </div>
                <p className="text-natural-earth">Director of Cultural Weaving</p>
              </div>
              
              <div className="bg-natural-leaf/5 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <User size={20} className="text-natural-leaf" />
                  <h3 className="font-semibold text-natural-leaf">Jon Bo</h3>
                </div>
                <p className="text-natural-earth">Director of Technology Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

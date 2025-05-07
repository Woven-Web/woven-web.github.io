
import { Network, Code2, GitBranch, Handshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OpenSystems = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-natural-leaf mb-6">
            Developing technology for an open & connected society
          </h1>
        </div>

        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4 text-natural-earth text-lg text-center">
          <p>We are building tools that help networks communicate better together.</p>
          <p>We are working with open source and distributed technology to enable better collaboration.</p>
          <p>We are practicing building in the open to move the conversation forward.</p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-natural-sage mb-4">
              <Code2 size={40} />
            </div>
            <h2 className="text-2xl font-semibold text-natural-leaf mb-4">
              Open Source/Open Systems
            </h2>
            <p className="text-natural-earth">
              By building in the open with open source code and leveraging open schemas and protocols 
              we are better able to collaborate with others and weave existing systems together. 
              We are building open-source technology as much as we are able to.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-natural-sage mb-4">
              <Network size={40} />
            </div>
            <h2 className="text-2xl font-semibold text-natural-leaf mb-4">
              Distributed & Decentralized
            </h2>
            <p className="text-natural-earth">
              By leveraging distributed web technologies such as Bitcoin, Ethereum, Nostr and Holochain; 
              we can contribute to an open ecosystem that does not depend on any existing corporation or 
              government. We are building technology that utilizes these distributed technologies and 
              that is also able to bridge to them as they become more ready and the ecosystem grows.
            </p>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Handshake className="text-natural-sage" size={32} />
            <h2 className="text-2xl font-semibold text-natural-leaf">
              Our Partners
            </h2>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8">
            <Card className="bg-white overflow-hidden shadow-sm border-none">
              <div className="md:flex">
                <div className="md:w-1/3 bg-natural-leaf/5 flex items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-natural-leaf">Neighborhood Accelerator Program</h3>
                    <a 
                      href="https://nap.community/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-natural-sage hover:text-natural-leaf transition-colors mt-2 inline-flex items-center"
                    >
                      nap.community
                    </a>
                  </div>
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <h4 className="font-medium text-natural-leaf mb-2">Fiscal Sponsorship & Technology Advisory</h4>
                  <p className="text-natural-earth mb-4">
                    We serve as a fiscal sponsor for the Neighborhood Accelerator Program and work closely with them to 
                    identify and implement technologies that can best support neighborhoods in becoming more connected 
                    and resilient.
                  </p>
                  <p className="text-natural-earth">
                    Our collaboration focuses on understanding community needs and developing open systems that 
                    facilitate stronger neighborhood connections and information sharing.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>

        {/* Current Projects Section */}
        <div className="bg-natural-sage/5 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <GitBranch className="text-natural-sage" size={32} />
            <h2 className="text-2xl font-semibold text-natural-leaf">
              Current Projects
            </h2>
          </div>
          <p className="text-natural-earth text-lg">
            Our projects are developed openly on GitHub. We welcome contributions and collaboration 
            from the community. Stay tuned for more information about our ongoing projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenSystems;

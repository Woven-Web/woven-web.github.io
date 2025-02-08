
import { Network, Code2, GitBranch } from "lucide-react";

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

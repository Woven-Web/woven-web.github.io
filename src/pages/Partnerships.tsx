
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe } from "lucide-react";

const Partnerships = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-natural-leaf mb-6">
            Our Partnerships
          </h1>
          <p className="text-xl text-natural-earth max-w-3xl mx-auto">
            Collaborating with aligned organizations to create meaningful impact in our communities
          </p>
        </div>

        {/* Partnerships List */}
        <div className="grid md:grid-cols-1 gap-12">
          {/* Partnership 1 */}
          <Card className="bg-white overflow-hidden shadow-sm border-none">
            <div className="md:flex">
              <div className="md:w-1/3 bg-natural-leaf/5 flex items-center justify-center p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-natural-leaf">Neighborhood Accelerator Program</h3>
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
              <CardContent className="md:w-2/3 p-8">
                <p className="text-natural-earth text-lg mb-4">
                  We serve as fiscal sponsors for NAP, and work directly with them to help weave community 
                  in neighborhoods and to research together what technology solutions can support more 
                  connected neighborhoods.
                </p>
                <p className="text-natural-earth">
                  Our collaboration focuses on understanding community needs and developing open systems that 
                  facilitate stronger neighborhood connections and information sharing.
                </p>
              </CardContent>
            </div>
          </Card>

          {/* Partnership 2 */}
          <Card className="bg-white overflow-hidden shadow-sm border-none">
            <div className="md:flex">
              <div className="md:w-1/3 bg-natural-leaf/5 flex items-center justify-center p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-natural-leaf">Climate Justice Hive</h3>
                  <a 
                    href="https://boulder.earth" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-natural-sage hover:text-natural-leaf transition-colors mt-2 inline-flex items-center"
                  >
                    boulder.earth
                  </a>
                </div>
              </div>
              <CardContent className="md:w-2/3 p-8">
                <p className="text-natural-earth text-lg mb-4">
                  We are partnering with the Hive to help build better technology for network coordination 
                  focused around climate justice and regenerative values.
                </p>
                <p className="text-natural-earth">
                  Through this partnership, we're developing tools and processes that support collaborative 
                  decision-making and resource sharing within climate justice networks, enhancing their ability 
                  to respond effectively to environmental challenges.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;

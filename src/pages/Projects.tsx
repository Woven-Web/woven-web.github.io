
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Puzzle, Users, Globe2 } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-natural-leaf mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-natural-earth max-w-3xl mx-auto">
            Building tools and platforms that empower community coordination and collaboration
          </p>
        </div>

        {/* Projects List */}
        <div className="grid md:grid-cols-1 gap-12">
          {/* Project 1 */}
          <Card className="bg-white overflow-hidden shadow-sm border-none">
            <div className="md:flex">
              <div className="md:w-1/3 bg-natural-leaf/5 flex items-center justify-center p-8">
                <div className="text-center">
                  <Puzzle className="w-16 h-16 text-natural-sage mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-natural-leaf">AlloIRL</h3>
                </div>
              </div>
              <CardContent className="md:w-2/3 p-8">
                <p className="text-natural-earth text-lg mb-4">
                  One-click participatory budgeting for real-world events using Allo Protocol
                </p>
                <p className="text-natural-earth">
                  AlloIRL makes it easy for event organizers to manage and distribute funding among various initiatives
                  during in-person gatherings, enabling transparent and collaborative resource allocation through a simple interface.
                </p>
              </CardContent>
            </div>
          </Card>

          {/* Project 2 */}
          <Card className="bg-white overflow-hidden shadow-sm border-none">
            <div className="md:flex">
              <div className="md:w-1/3 bg-natural-leaf/5 flex items-center justify-center p-8">
                <div className="text-center">
                  <Globe2 className="w-16 h-16 text-natural-sage mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-natural-leaf">Boulder.Builders</h3>
                </div>
              </div>
              <CardContent className="md:w-2/3 p-8">
                <p className="text-natural-earth text-lg mb-4">
                  A Community platform empowering local communication, collaboration, and creativity
                </p>
                <p className="text-natural-earth">
                  Boulder.Builders connects local community members, creators, and organizations through a digital
                  platform designed to foster meaningful interactions and collaborative projects that strengthen
                  the Boulder community fabric.
                </p>
              </CardContent>
            </div>
          </Card>

          {/* Project 3 */}
          <Card className="bg-white overflow-hidden shadow-sm border-none">
            <div className="md:flex">
              <div className="md:w-1/3 bg-natural-leaf/5 flex items-center justify-center p-8">
                <div className="text-center">
                  <Users className="w-16 h-16 text-natural-sage mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-natural-leaf">Cohere Boulder</h3>
                </div>
              </div>
              <CardContent className="md:w-2/3 p-8">
                <p className="text-natural-earth text-lg mb-4">
                  Weaving local resilience in Boulder - organized around an annual immersive 10 day Boulder-wide event
                </p>
                <p className="text-natural-earth">
                  Cohere Boulder creates opportunities for deep connection and community building through a carefully
                  curated annual event that brings together diverse perspectives and talents from across Boulder for
                  10 days of immersive experiences, workshops, and collaborative projects.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;

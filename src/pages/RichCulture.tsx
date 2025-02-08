
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Lightbulb, Users, Heart, Map } from "lucide-react";

const RichCulture = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-natural-leaf mb-6">
            Weaving a rich cultural fabric with deep roots in Boulder County, Colorado
          </h1>
          <p className="text-xl text-natural-earth max-w-3xl mx-auto">
            We are building relationships throughout the Boulder area with a focus on our core values of Regeneration, Innovation, Cooperation, and Health.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-natural-sand/5 rounded-2xl p-8 mb-16">
          <p className="text-lg text-natural-earth">
            In partnership with other local organizations, we are developing a map of what is happening in our bioregion to help people get connected to what matters, including organizations, gathering locations, volunteer opportunities, events and more.
          </p>
          <p className="text-lg text-natural-earth mt-4">
            We are creating events and other opportunities to gather and helping to seed more collaboration and communication throughout this area.
          </p>
        </div>

        {/* RICH Framework */}
        <h2 className="text-3xl font-bold text-natural-leaf mb-8 text-center">Our RICH Framework</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/50 hover:bg-white transition-colors duration-300">
            <CardHeader>
              <Leaf className="w-12 h-12 text-natural-sage mb-4" />
              <CardTitle className="text-2xl text-natural-leaf">Regenerative</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-natural-earth">Life at the center; care for all beings; harmonizing with nature's rhythms</p>
            </CardContent>
          </Card>

          <Card className="bg-white/50 hover:bg-white transition-colors duration-300">
            <CardHeader>
              <Lightbulb className="w-12 h-12 text-natural-sage mb-4" />
              <CardTitle className="text-2xl text-natural-leaf">Innovative</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-natural-earth">Ignite creative breakthroughs. Crafting forward-thinking solutions.</p>
            </CardContent>
          </Card>

          <Card className="bg-white/50 hover:bg-white transition-colors duration-300">
            <CardHeader>
              <Users className="w-12 h-12 text-natural-sage mb-4" />
              <CardTitle className="text-2xl text-natural-leaf">Cooperative</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-natural-earth">Working together for the benefit of all. Moving towards shared ownership and mutual aid</p>
            </CardContent>
          </Card>

          <Card className="bg-white/50 hover:bg-white transition-colors duration-300">
            <CardHeader>
              <Heart className="w-12 h-12 text-natural-sage mb-4" />
              <CardTitle className="text-2xl text-natural-leaf">Healthy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-natural-earth">Embracing balance and well-being both individually and collectively</p>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <Map className="w-8 h-8 text-natural-sage" />
            <h2 className="text-3xl font-bold text-natural-leaf">The Map</h2>
          </div>
          <div className="bg-natural-sand/10 rounded-lg h-[400px] flex items-center justify-center">
            <p className="text-natural-earth text-lg">Map visualization coming soon...</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RichCulture;

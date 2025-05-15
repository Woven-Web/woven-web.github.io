
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sprout, Heart, Users, Globe2 } from "lucide-react";

const Principles = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-natural-leaf mb-6">
            Our Guiding Principles
          </h1>
        </div>

        {/* First Principle */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sprout className="text-natural-sage" size={32} />
            <h2 className="text-2xl font-semibold text-natural-leaf">Nature → Humanity → Technology</h2>
          </div>
          <Card className="bg-white/80 overflow-hidden shadow-sm border-none mb-6">
            <CardContent className="p-8">
              <p className="text-natural-earth text-lg leading-relaxed">
                We see that humanity has emerged from nature and technology has emerged from humanity. 
                In recognition of this, we tend to think in terms of first principles, thinking first 
                in terms of ecological systems and how nature operates; and then moving to seeing how 
                humans operate and relate and how we can empower genuine human agency and connection. 
                Finally, we look to how technology can support humans interacting harmoniously within 
                the natural world.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Second Principle */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="text-natural-sage" size={32} />
            <h2 className="text-2xl font-semibold text-natural-leaf">Generosity → Reciprocity → Harmony</h2>
          </div>
          <Card className="bg-white/80 overflow-hidden shadow-sm border-none mb-6">
            <CardContent className="p-8">
              <p className="text-natural-earth text-lg leading-relaxed">
                The conversation around alignment is incredibly important. However it's not just aligning 
                technology with humanity that is essential, but aligning technology and humanity with the 
                wider natural world. Even better is harmonizing technology with humanity with the natural 
                world. Harmony comes from reciprocity in relationships; a balance of giving and receiving; 
                and the best way to bring about reciprocity is through generosity. We aim to operate from 
                the spirit of generosity in all of our relationships, sharing as openly as possible to help 
                foster trust and mutuality in relationships.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Third Principle */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="text-natural-sage" size={32} />
            <h2 className="text-2xl font-semibold text-natural-leaf">Collaboration → Connection → Community</h2>
          </div>
          <Card className="bg-white/80 overflow-hidden shadow-sm border-none mb-6">
            <CardContent className="p-8">
              <p className="text-natural-earth text-lg leading-relaxed">
                Coming together is essential in this time. The best way we have found to foster community is to 
                bring people together in real connection, and one of the most efficient strategies for creating 
                real connection that we've found is working together with people. We aim to foster a collaborative 
                culture, working together with others we are in resonant with and creating spaces that support 
                others working together on things that really matter.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Fourth Principle */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe2 className="text-natural-sage" size={32} />
            <h2 className="text-2xl font-semibold text-natural-leaf">Abundance for All</h2>
          </div>
          <Card className="bg-white/80 overflow-hidden shadow-sm border-none mb-6">
            <CardContent className="p-8">
              <p className="text-natural-earth text-lg leading-relaxed">
                We aim to foster a RICH (Regenerative, Innovative, Cooperative, Healthy) Ecosystem that seeks to 
                benefit all life. We live on a planet that is rich with resources, and if we are learn how to 
                harmonize with nature's way, it's possible for all beings to be provided for.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Principles;

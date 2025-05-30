
const Map = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-natural-leaf mb-4">
            Our Regenerative Ecosystem Map
          </h1>
          <p className="text-lg text-natural-earth max-w-3xl mx-auto">
            Explore our map of interconnected projects, partners, and initiatives that comprise our regenerative ecosystem.
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe 
            src="/map.pdf" 
            className="w-full"
            style={{height: "80vh"}}
            title="Woven Web Regenerative Ecosystem Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;

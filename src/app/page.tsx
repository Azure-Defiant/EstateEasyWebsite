import Image from "next/image";
import Navbar from "../components/common/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter brightness-90"
            poster="/hero-bg.jpg"
            preload="auto"
          >
            <source src="/assets/websiteVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-7xl font-light mb-4 tracking-wide">Estate Easy</h1>
          <h2 className="text-7xl font-light mb-12 tracking-wide">Haven 2025</h2>
          <div className="flex justify-center gap-8">
            <button className="border-2 border-white text-white px-12 py-3 text-lg hover:bg-white hover:text-black transition-all duration-300">
              Modern Houses
            </button>
            <button className="border-2 border-white text-white px-12 py-3 text-lg hover:bg-white hover:text-black transition-all duration-300">
              Vintage Houses
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/property-1.jpg"
                alt="Luxury apartment"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Luxury Apartment</h3>
              <p className="text-gray-600 mb-4">123 Main St, City Name</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">$450,000</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
          {/* Add more property cards here */}
        </div>
      </section>
    </div>
  );
}

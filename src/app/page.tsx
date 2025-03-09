import Image from "next/image";
import Navbar from "../components/common/Navbar";
import PropertyCard from '../components/PropertyCard';
import WhyChooseUs from "../components/WhyChooseUs";
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
            <button className="border-2 border-white text-white px-12 py-3 text-lg hover:bg-white hover:text-black transition-all duration-500">
              Modern Houses
            </button>
            <button className="border-2 border-white text-white px-12 py-3 text-lg hover:bg-white hover:text-black transition-all duration-500">
              Vintage Houses
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              id="1"
              title="Modern Luxury Villa"
              location="Beverly Hills, CA"
              price={2500000}
              bedrooms={5}
              bathrooms={4}
              area={3500}
              imageUrl="/assets/house-1.jpg"
            />
            <PropertyCard
              id="2"
              title="Oceanfront Paradise"
              location="Malibu, CA"
              price={4200000}
              bedrooms={4}
              bathrooms={3}
              area={2800}
              imageUrl="/assets/house-2.jpg"
            />
            <PropertyCard
              id="3"
              title="Downtown Penthouse"
              location="Los Angeles, CA"
              price={1800000}
              bedrooms={3}
              bathrooms={2}
              area={2200}
              imageUrl="/assets/house-3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Latest Properties Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">Latest Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add property cards here */}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Ready to Find Your Dream Home?</h2>
          <p className="mb-8 text-lg text-gray-300">Browse our exclusive collection of premium properties</p>
          <button className="bg-white text-gray-900 px-8 py-3 text-lg font-semibold hover:bg-gray-100 transition-colors">
            View All Properties
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-light mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="mb-4">Email: info@estateeasy.com</p>
              <p className="mb-4">Phone: (555) 123-4567</p>
              <p>Address: 123 Luxury Lane, Premium City</p>
            </div>
            <div>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300" />
                <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300" />
                <textarea placeholder="Your Message" rows={4} className="w-full p-3 border border-gray-300"></textarea>
                <button className="bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
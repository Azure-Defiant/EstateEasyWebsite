'use client';

import PropertyCard from "../../components/PropertyCard";
import Navbar from "../../components/common/Navbar";

export default function FeaturedProperties() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Featured Properties Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-light mb-6">Featured Properties</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties, each chosen for their exceptional quality and unique character.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
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
            <PropertyCard
              id="4"
              title="Hillside Retreat"
              location="Hollywood Hills, CA"
              price={3100000}
              bedrooms={4}
              bathrooms={3}
              area={3200}
              imageUrl="/assets/house-1.jpg"
            />
            <PropertyCard
              id="5"
              title="Beachfront Condo"
              location="Santa Monica, CA"
              price={1950000}
              bedrooms={2}
              bathrooms={2}
              area={1800}
              imageUrl="/assets/house-2.jpg"
            />
            <PropertyCard
              id="6"
              title="Modern Townhouse"
              location="West Hollywood, CA"
              price={1650000}
              bedrooms={3}
              bathrooms={2}
              area={2000}
              imageUrl="/assets/house-3.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
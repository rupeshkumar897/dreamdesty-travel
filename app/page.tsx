import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import DestinationsCarousel from "@/components/DestinationsCarousel";
import TourPackages from "@/components/TourPackages";
import ExplorerTypes from "@/components/ExplorerTypes";
import BrandStory from "@/components/BrandStory";
import CallToAction from "@/components/CallToAction";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      {/* Hero Section (Navbar already layout.tsx me hai) */}
      <Hero />
      {/* <SearchBar /> */}
      <DestinationsCarousel />
      <TourPackages />
      <ExplorerTypes />
      <BrandStory />
      <CallToAction />
      <HowItWorks />
      
      {/* Yahan se aage ke sections ( jaise Destinations, Tour Packages, etc.) add kar sakte hain */}
    </div>
  );
}
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PetShop from "@/components/PetShop";
import Hotel from "@/components/Hotel";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EmergencyBar from "@/components/EmergencyBar";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "Franki Clínica Veterinaria",
  description:
    "Clínica veterinaria en Asunción: consultas, vacunación, cirugía, estética, hotel y pet shop.",
  url: "https://frankiveterinaria.com.py/",
  telephone: "+595982297132",
  priceRange: "₲₲",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Julio Correa y Molas López",
    addressLocality: "Asunción",
    addressCountry: "PY",
  },
  geo: { "@type": "GeoCoordinates", latitude: -25.2740725, longitude: -57.5667208 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  sameAs: ["https://www.instagram.com/franki_veterinaria/"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Services />
        <PetShop />
        <Hotel />
        <About />
        <Contact />
      </main>
      <Footer />
      <EmergencyBar />
    </>
  );
}

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/home/HeroBanner";
import { ProductsSection } from "@/components/home/ProductsSection";
import { Categories } from "@/components/home/Categories";
import { Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <ProductsSection />
      <Categories />

      {/* Contact Us */}
      <section className="py-5 sm:py-8 md:py-12">
        <div className="container px-3 sm:px-4">
          <div className="text-center py-6 sm:py-8 px-4 sm:px-6 rounded-2xl bg-foreground text-background">
            <Phone className="w-7 h-7 sm:w-9 sm:h-9 mx-auto mb-2 sm:mb-3 text-primary" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-1.5">
              Any queries? Please reach out
            </h2>
            <p className="text-background/70 mb-3 sm:mb-4 max-w-md mx-auto text-xs sm:text-sm">
              We're here to help. Reach out to us anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <a
                href="tel:7095288950"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                70952 88950
              </a>
              <a
                href="tel:6304408747"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                63044 08747
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { mockCollections, mockProducts } from "@/data/mockData";
import { ProductCard } from "@/components/ProductCard";

const Collections = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Curated Collections
            </h1>
            <p className="text-muted-foreground text-lg">
              Handpicked styles for every vibe. Explore our carefully curated collections 
              and find your perfect thrift.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="pb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {mockCollections.map((collection, i) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/browse?collection=${collection.slug}`}
                  className="group block relative rounded-3xl overflow-hidden aspect-[16/9]"
                >
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-background mb-2">
                      {collection.title}
                    </h2>
                    <p className="text-background/80 mb-4">{collection.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-background/70">
                        {collection.itemCount} items
                      </span>
                      <span className="flex items-center gap-2 text-sm font-medium text-background group-hover:gap-3 transition-all">
                        Explore
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured from Collections */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                Featured Picks
              </h2>
              <p className="text-muted-foreground mt-1">
                Top items from our collections
              </p>
            </div>
            <Link to="/browse">
              <span className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                See all
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {mockProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;
